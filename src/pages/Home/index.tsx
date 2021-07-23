import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FiArrowRight } from "react-icons/fi";
import {
    Container,
    Content,
    BetOptions,
    GameButton,
    GamesContainer,
    Game,
} from "./styles";
import axios from 'axios';

interface userState {
    usuario: {
        games: [
            {
                numbers: number;
                data: string;
                price: number;
                color: string;
                type: string;
            }
        ],
    }
}

const Home = () => {

    const betsGames = useSelector((state: userState) => state.usuario.games);
    const [betType, setBetType] = useState<any>([])
    const [bets, setBets] = useState([])

    useEffect(() => {
        getGames()
        setBets(betsGames)
    }, [])

    const getGames = () => {
        axios.get('./games.json')
            .then((res) => {
                setBetType(res.data.types);
            }).catch((err) => {
                console.log(err);
            })
    }

    //Função para filtrar
    function handleBetFilter(index) {
        let aux = betType;
        aux[index].selected = !this.selected;
        setBetType([...aux]);
        if (filterSelected()) {
            setBets(
                betsGames.filter((bet) => {
                    for (let i = 0; i < aux.length; i++) {
                        if (bet.type === aux[i].type && aux[i].selected)
                            return true;
                    }
                    return false;
                })
            );
        } else {
            setBets(betsGames);
        }

        return;
    }

    //Função para verificar filtro
    function filterSelected() {
        for (let i = 0; i < betType.length; i++) {
            if (betType[i].selected) {
                return true
            };
        }
        return false;
    }

    return (
        <>
            <Header home={false} />
            <Container>
                <Content>
                    <BetOptions>
                        <h1>RECENT GAMES</h1>
                        <p>Filters</p>
                        {betType.map((field, index) => {
                            return (
                                <GameButton
                                    key={field.type}
                                    onClick={() => handleBetFilter.call(field, [index])}
                                    backgroundColor={field.selected ? field.color : "#FFFFFF"}
                                    fontColor={!field.selected ? field.color : "#FFFFFF"}
                                    borderColor={field.color}
                                >
                                    {field.type}
                                </GameButton>
                            )
                        })
                        }
                        <Link to="/bet">
                            New Bet
                            <FiArrowRight />
                        </Link>
                    </BetOptions>
                </Content>
                <GamesContainer>
                    {betsGames.length == 1 && <h1>No games, bet now!</h1>}
                    {bets.map((field, index) => {
                        var value = parseFloat(
                            field.price.replaceAll(/R\$ /g, "").replace(",", ".")
                        );
                        if (field.price != "") {
                            return (
                                <Game key={index} color={field.color}>
                                    <span></span>
                                    <div>
                                        <h1>{field.numbers}</h1>
                                        <p>
                                            {new Date().toLocaleDateString('pt-br')} -
                                            ({`R$ ${value.toFixed(2).replace(".", ",")}`})
                                        </p>
                                        <h4>{field.type}</h4>
                                    </div>
                                </Game>
                            );
                        }
                    })}
                </GamesContainer>
            </Container>
            <Footer />

        </>
    );
};

export default Home
