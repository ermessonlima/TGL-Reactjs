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

var esportes = [];
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

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const Home = () => {




    const [betType, setBetType] = useState<any>([])
    const [bets, setBets] = useState([])
    const [betsFilter, setbetsFilter] = useState([])
    const [page, setPage] = useState(null)
    const [pageCurrent, setPageCurrent] = useState(1)
    const [pageTotal, setPageTotal] = useState(null)
    const [offSet, setOffset] = useState(0)


    const [urlParams, setUrlParams] = useState('')




    useEffect(() => {


        getData()
    }, [offSet, urlParams, esportes])


    const current = (offSet / pageTotal) + 1;
    const first = Math.min(
        Math.max(pageCurrent - MAX_LEFT, 1), 1

    )


    useEffect(() => {
        async function getData() {
            const response = await axios.get('/games')
            const { data } = response;
            setBetType(data)
        }
        getData()
    }, [])

    var numeros = [''];
    var selected;

    async function getData() {
        const response = await axios.get(`/bets?page=${current}${urlParams}`)
        const { data } = response;

        setPageCurrent(data.page ? data.page : 1)
        setPageTotal(data.lastPage)

        setBets(data.data)
        setbetsFilter(data.data)

    }

    //Função para filtrar
    function handleBetFilter(index, field) {
        console.log(field)

        let aux = betType;


        if (aux[index].selected) {
            aux[index].selected = false;
        } else {
            aux[index].selected = true;
        }

        setBetType([...aux]);

        if (aux[index].selected) {
            console.log('aqui')
            getData()
            if (field.type === aux[index].type && aux[index].selected) {

                var total = esportes.push(`&arry[]=${field.id}`);

                var tics = esportes.join('')
                console.log(esportes);
                console.log(tics);
                setUrlParams(tics)
          
                return true;
            }
        } else {
            console.log('sdsd')
            getData()

    
           
            var ab = numeros.indexOf(index);
            if (ab > -1) {
                esportes.splice(index, 1);
            }



            var estados = esportes
            var buscar = `&arry[]=${field.id}`;
            var indice = estados.indexOf(buscar);
            while(indice >= 0){
                estados.splice(indice, 1);
                indice = estados.indexOf(buscar);
            }
            console.log(estados);






            var tics = esportes.toString().replaceAll(`&arry[]=${field.id}`, '');
            var resultado = urlParams.toString().replaceAll(`&arry[]=${field.id}`, '');
            console.log(resultado)
            console.log(tics)
            console.log(esportes);

            var tics = esportes.join('')
            setUrlParams(tics)


        }

        return;
    }

    //Função para verificar filtro
    function filterSelected() {
        for (let i = 0; i < betType.length; i++) {
            console.log(betType[i].selected)
            if (betType[i].selected) {
                return true
            };
        }
        return false;
    }



    function onPageChange(page) {
        setOffset((page - 1) * pageTotal)
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
                                    onClick={() => handleBetFilter(index, field)}
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
                <ul className="pagination">
                    <li>
                        <button
                            className="btn-primary"
                            onClick={() => onPageChange(pageCurrent - 1)}
                            disabled={pageCurrent === 1}
                        >
                            Anterior
                        </button>
                    </li>
                    {Array.from({ length: Math.min(MAX_ITEMS, pageTotal) })
                        .map((_, index) => index + first)
                        .map((page) => (
                            <li key={page}>
                                <button
                                    className={page === pageCurrent ? 'pagination__item--active' : 'no_active'}
                                    onClick={() => onPageChange(page)}>
                                    {page}
                                </button>
                            </li>
                        ))}

                    <li>
                        <button
                            className="btn-primary"
                            onClick={() => onPageChange(pageCurrent + 1)}
                            disabled={pageCurrent === pageTotal}
                        >
                            Proximo
                        </button>
                    </li>
                </ul>



            </Container>
            <Footer />

        </>
    );
};

export default Home
