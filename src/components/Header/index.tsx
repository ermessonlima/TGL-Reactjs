import React from 'react';
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
                <a href="/account">Account</a>
                <button>
                    <Link to="/">Logout</Link>
                </button>
            </NavBarRight>
        </HeaderContainer>
    )
}

export default Header;