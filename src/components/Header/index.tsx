import { HeaderContainer, NavBarLeft, Title, NavBarRight } from "./styles";
import { Link } from 'react-router-dom';
import history from '../../services/history';

function Header({home}) {

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/')
    }
   
    return (
        <HeaderContainer>
            <NavBarLeft>
                <Title>
                    TGL<div></div>
                </Title>
                { home && <Link to="/home">Home</Link>}
            </NavBarLeft>
            <NavBarRight>
            <Link to="/Account">Account</Link>
                <button onClick={handleSubmit}>
                    <Link to="/">Logout</Link>
                </button>
            </NavBarRight>
        </HeaderContainer>
    )
}

export default Header;