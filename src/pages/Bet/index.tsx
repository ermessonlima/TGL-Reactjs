import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
    Container,
    Content,
    ButtonType,
    Balls,
    ButtonOptions,
    OutlineButton,
    AddToCart,
} from "./styles";
import Cart from "../../components/Cart";

const Bet = () => {
    return (
        <>
            <Header  />
            <Container>
                <Content>
                    <h1>
                        <b>NEW BET </b>
                        FOR {'Tipo'}
                    </h1>
                    <p>Choose a game</p>
                    <ButtonType>{'Btn-type'}</ButtonType>
                    <p>
                        <b>
                            Fill your bet
                            <br />
                        </b>
                        {'Descrção'}
                    </p>
                    <Balls>{'Bolas'}</Balls>
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
