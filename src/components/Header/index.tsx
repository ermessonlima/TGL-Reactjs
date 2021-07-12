import React from 'react';
import { HeaderContainer, NavBarLeft, Title, NavBarRight } from "./styles";

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
                    Logout
                </button>
            </NavBarRight>
        </HeaderContainer>
    )
}

export default Header;