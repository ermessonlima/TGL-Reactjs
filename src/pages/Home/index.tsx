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
import axios from '../../services/axios';


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




    const [betType, setBetType] = useState<any>([])
    const [bets, setBets] = useState([])
    const [betsFilter, setbetsFilter] = useState([])

    useEffect(() => {
       
        async function getData(){
            const response = await axios.get('/bets')
             const { data } = response;
             setBets(data)
             setbetsFilter(data)

            }
            getData()
    }, [])


    useEffect(() => {
        async function getData(){
        const response = await axios.get('/games')
         const { data } = response;
         setBetType(data)
        }
        getData()
    }, [])



    //Função para filtrar
    function handleBetFilter(index) {
        let aux = betType;
        aux[index].selected = !this.selected;
        setBetType([...aux]);
        if (filterSelected()) {
            setBets(
                betsFilter.filter((bet) => {
                    for (let i = 0; i < aux.length; i++) {
                        if (bet.types.type === aux[i].type && aux[i].selected)
                            return true;
                    }
                    return false;
                })
            );
        } else {
            setBets(betsFilter);
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
                    
                    {console.log(bets)}
                    {bets.map((field, index) => {
                  
                        var value = parseFloat(
                            field.price.toString().replaceAll(/R\$ /g, "").replace(",", ".")
                        );
                        if (field.price != "") {
                            return (
                                <Game key={index} color={field.types.color}>
                                    <span></span>
                                    <div>
                                        <h1>{field.numbers}</h1>
                                        <p>
                                            {new Date(field.created_at).toLocaleDateString('pt-br')} -
                                            ({`R$ ${value.toFixed(2).replace(".", ",")}`})
                                        </p>
                                        <h4>{field.types.type}</h4>
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
