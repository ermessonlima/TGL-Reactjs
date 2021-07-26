import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    CartContainer,
    BetArea,
    BetsList,
    BetInfo,
    EmptyCart,
    Save,
} from "./styles";

const Cart = ({ bets, removeBet, cartValue, background, color, disabled }) => {

    const dispatch = useDispatch();

    function saveBets() {
        bets.map((bet) => {
            dispatch({
                type: 'SET_GAMES',
                payload: {
                    numbers: bet.numbers,
                    data: bet.data,
                    price: bet.price,
                    color: bet.color,
                    type: bet.type,
                }
            })
        })
    }

    function convertCoin(value) {
        return `R$ ${value.toFixed(2).replace(".", ",")}`;
    }

    return (
        <>
            <CartContainer>
                <h1>
                    <b>CART</b>
                </h1>
                <BetArea>

                    {bets.length == 0 && <EmptyCart>Bet now!</EmptyCart>}

                    {bets.length > 0 && bets.map((field, index) => {
                        return (
                            <BetsList key={index}>
                                <FiTrash2
                                    style={{ cursor: "pointer" }}
                                    onClick={() => removeBet(field)}
                                    size={36}
                                />
                                <BetInfo color={field.color}>
                                    <h3>{field.numbers}</h3>
                                    <section>
                                        <h1>{field.type}</h1>
                                        {field.price}
                                    </section>
                                </BetInfo>
                            </BetsList>
                        );
                    })}
                </BetArea>
                <h1>
                    <b>CART</b> TOTAL: {convertCoin(cartValue)}
                </h1>
                {disabled && <Link to="/home">
                    <Save
                        style={{ background, color }}
                        onClick={saveBets}>
                        <p>Save</p>
                        <FiArrowRight style={{ marginLeft: 15 }} />
                    </Save>
                </Link>}
                {!disabled && <Save
                    style={{ background, color }} >
                    <p>Save</p>
                    <FiArrowRight style={{ marginLeft: 15 }} />
                </Save>}


            </CartContainer>
        </>
    );
};


export default Cart
