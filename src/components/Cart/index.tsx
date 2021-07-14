import React from "react";
import {
    Container,
    Box,
} from "./styles";

const Cart = () => {
    return (
        <>
            <Container>
                <h1>
                    <b>CART</b>
                </h1>
                <Box>
                    {'Aposta'}
                </Box>
                <h1>
                    <b>CART</b> TOTAL: {'Total'}
                </h1>
                {'Btn'}
            </Container>
        </>
    );
};

export default Cart
