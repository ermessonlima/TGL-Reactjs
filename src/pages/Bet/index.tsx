import {
    BetContainer,
    BetContent,
    GameOptions,
    GameOption,
    Balls,
    Ball,
    BetButtons,
    BetButton,
    AddToCart,
} from "./styles";
import axios from 'axios';
import Cart from "../../components/Cart";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FiShoppingCart } from "react-icons/fi";

export interface Game {
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

const Bet = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [info, setInfo] = useState<any>({ ...games[0] });
    const [numbers, setNumbers] = useState<number[]>([]);
    const [bets, setBets] = useState([]);
    let [cartValue, setCartValue] = useState(0);

    useEffect(() => {
        getGames()
    }, [])


    //Adicionar os jogos
    const getGames = () => {
        axios.get('./games.json')
            .then((res) => {
                setGames(res.data.types);
                setInfo(res.data.types[0] )
            }).catch((err) => {
                console.log(err);
            })
    }

    //Trocar . por ,
    function convertCoin(value) {
        return `R$ ${value.toFixed(2).replace(".", ",")}`;
    }

    //Limpar numeros
    function clearNumbers() {
        return setNumbers([]);
    }

    //Retorna o primeiro element que tenha o tipo, ex.: Lotofacil, Mega-sena...
    function getBet(type: string) {
        if (type) {
            setInfo(games.find((field) => field.type === type) );
            clearNumbers();

        }
    }

    //selecionar numeros
    function selectedNumbers(number) {
        let balls = numbers;
        if (balls.includes(number)) {
            balls.splice(balls.indexOf(number), 1);
        } else if (balls.length < info["max-number"]) {
            balls.push(number);
        } else {
            return;
        }
        return setNumbers([...balls]);
    }

    //Completar jogo
    function handleCompleteBet() {
        const numbers = []
        let balls = numbers;
        for (let i = numbers.length; i < info["max-number"]; i++) {
            let currentNumber = 0;
            do {
                currentNumber = Math.ceil(Math.random() * info.range);
            } while (numbers.includes(currentNumber));
            balls.push(currentNumber);
        }
        setNumbers([...balls])
    }

    //Adicionar 0 aos numeros menores que 10
    function handleBetNumbers() {
        return numbers.map((field) => (field < 10 ? `0${field}` : field)).sort((x: number, y: number) => x - y).join(" - ");
    }

    function handleNewBet() {
        return {
            numbers: handleBetNumbers(),
            type: info.type,
            price: convertCoin(info.price),
            color: info.color,
        };
    }

    //Adicionar ao carrinho
    function addCart(bet) {
        clearNumbers();
        handleUpdateCartPrice(bet.price);
        return setBets([...bets, bet]);
    }

    //Remover item do carrinho
    function removeBet(bet) {
        let cart = bets;
        cart.splice(cart.indexOf(bet), 1);
        handleUpdateCartPrice("-" + bet.price);
        return setBets([...cart]);
    }

    //Somar valor do carrinho
    function handleUpdateCartPrice(valeuStringfy) {
        const value = parseFloat(
            valeuStringfy.replaceAll(/R\$ /g, "").replace(",", ".")
        );
        setCartValue((cartValue += value));

    }

    return (
        <>
            <Header home={true} />
            <BetContainer>
                <BetContent>
                    <h1>
                        <b>NEW BET </b>
                        FOR {info.type}
                    </h1>
                    <p>Choose a game</p>
                    <GameOptions>{games.map((field) => {
                        return (
                            <GameOption
                                key={field.type}
                                backgroundColor={
                                    field.type === info.type ? field.color : "#FFF"
                                }
                                fontColor={!(field.type === info.type) ? field.color : "#FFF"}
                                borderColor={field.color}
                                onClick={() => {
                                    getBet(field.type);
                                }}
                            >
                                {field.type}
                            </GameOption>
                        );
                    })}</GameOptions>

                    <p>
                        <b>
                            Fill your bet
                            <br />
                        </b>
                        {info.description}
                    </p>
                    <Balls>{Array.from(Array(info.range).keys()).map((field, index) => {
                        return (
                            <Ball
                                key={index}
                                color={numbers.includes(index + 1) ? info.color : "#ADC0C4"}
                                onClick={() => selectedNumbers(index + 1)}
                            >
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </Ball>
                        );
                    })}</Balls>
                    <BetButtons>
                        <BetButton onClick={handleCompleteBet}>
                            Complete game
                        </BetButton>
                        <BetButton onClick={clearNumbers}>Clear game</BetButton>
                        <AddToCart
                            background={
                                numbers.length === info["max-number"]
                                    ? "#27c383"
                                    : "#7fd4b1"
                            }
                            onClick={
                                numbers.length === info["max-number"]
                                    ? () => addCart(handleNewBet())
                                    : null
                            }
                        >
                            <FiShoppingCart
                                size={20}
                                style={{ marginRight: 15 }}
                            />
                            Add to cart
                        </AddToCart>
                    </BetButtons>
                </BetContent>
                <Cart
                    background={
                        cartValue >= info["min-cart-value"]
                            ? "#27c383"
                            : "#fafafa"
                    }

                    color={
                        cartValue >= info["min-cart-value"]
                            ? "#ffffff"
                            : "#27c383"
                    }

                    bets={bets}
                    removeBet={removeBet}
                    cartValue={cartValue}
                />
            </BetContainer>
            <Footer />
        </>
    );
};

export default Bet;
