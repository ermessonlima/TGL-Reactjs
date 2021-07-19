import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
    Container,
    Content,
    ButtonType,
    ButtonOptions,
    OutlineButton,
    AddToCart,
    GameOption,
    Balls,
    Ball,
} from "./styles";
import Cart from "../../components/Cart";
import axios from 'axios';

export interface Game {
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

const Bet: any = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [info, setInfo] = useState<any>({ ...games[0] });
    const [numbers, setNumbers] = useState<number[]>([]);

    useEffect(() => {
        getGames()
        
    },[])

    const getGames = () => {
        axios.get('./games.json')
            .then((res) => {
                console.log(res.data.types);
                setGames(res.data.types);
            }).catch((err) => {
                console.log(err);
            })
    }

    function clearBalls() {
        return setNumbers([]);
    }


    function getGameType(type: any) {
        return games.find((field) => field.type === type);
    }

    function getNameButton(type: any) {
        setInfo({ ...getGameType(type) });
        clearBalls();
    }


    let btnTypes = games.map((field) => {
        return (
            <GameOption
                key={field.type}
                backgroundColor={
                    field.type === info.type ? field.color : "#FFF"
                }
                fontColor={!(field.type === info.type) ? field.color : "#FFF"}
                borderColor={field.color}
                onClick={() => {
                    getNameButton(field.type);
                }}
            >
                {field.type}
            </GameOption>
        );
    });


    
    function addBallsToBet(number:number) {
        let balls = numbers;
        if (balls.includes(number)) {
            balls.splice(balls.indexOf(number), 1);
        } else if (balls.length < info["max_number"]) {
            balls.push(number);
        } else {
            return;
        }
        return setNumbers([...balls]);
    }

    let balls = Array.from(Array(info.range).keys()).map((field, index:number) => {
        return (
            <Ball
                key={index}
                color={numbers.includes(index + 1) ? info.color : "#ADC0C4"}
                onClick={() => addBallsToBet(index + 1)}
            >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </Ball>
        );
    });


    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h1>
                        <b>NEW BET </b>
                        FOR {info.type}
                    </h1>
                    <p>Choose a game</p>

                    <ButtonType>{btnTypes}</ButtonType>


                    <p>
                        <b>
                            Fill your bet
                            <br />
                        </b>
                        {info.description}
                    </p>
                    <Balls>{balls}</Balls>
                    <ButtonOptions>
                        <OutlineButton  >
                            Complete game
                        </OutlineButton>
                        <OutlineButton  >Clear game</OutlineButton>
                        <AddToCart  >
                            <FiShoppingCart
                                size={20}
                                style={{ marginRight: 15 }}
                            />
                            Add to cart
                        </AddToCart>
                    </ButtonOptions>
                </Content>
                <Cart />
            </Container>
            <Footer />
        </>
    );
};

export default Bet;
