import { HeaderContainer, NavBarLeft, Title, NavBarRight } from "./styles";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <HeaderContainer>
            <NavBarLeft>
                <Title>
                    TGL<div></div>
                </Title>
                {'Home'}
            </NavBarLeft>
            <NavBarRight>
            <Link to="/Account">Account</Link>
                <button>
                    <Link to="/">Logout</Link>
                </button>
            </NavBarRight>
        </HeaderContainer>
    )
}

export default Header;