import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
    HomeContainer,
    HomeContent,
    GameOptions,
    GamesContainer,
} from "./styles";

const Home = () => {
    
    return (
        <>
            <Header />
            <HomeContainer>
                <HomeContent>
                    <GameOptions>
                        <h1>RECENT GAMES</h1>
                        <p>Filters</p>
                  
                        <Link to="/bet">
                            New Bet
                            <FiArrowRight />
                        </Link>
                     
                    </GameOptions>
                </HomeContent>
                <GamesContainer>{'Jogos'}</GamesContainer>
            </HomeContainer>
            <Footer />
        </>
    );
};

export default Home
