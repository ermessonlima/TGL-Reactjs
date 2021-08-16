import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import {
    CartContainer,
    BetArea,
    BetsList,
    BetInfo,
    EmptyCart,
    Save,
} from "./styles";
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import history from '../../services/history';
import { get } from 'lodash';

const Cart = ({ bets, removeBet, cartValue, background, color, disabled }) => {

    const dispatch = useDispatch();
   

   async function saveBets(e) {

    e.preventDefault();

       const teste =  bets.map((bet) => {
           return {
                game_id: bet.game_id,
               numbers: bet.numbers
            }
   

        })

     


      console.log(teste)
      
      try {
        await axios.post('/bets', 
            teste

         );


         toast.success(' Bet placed successfully!')
         history.push('/home')


      }catch (e) {
        const errors = get(e, 'response.data',[]);
     //   errors.map(error => toast.error(error.message) )
       console.log(errors)
      }
      

    }
    function errorBets() {
        toast.error('Minimum amount, BRL 30.00.')
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
                {disabled && 
                    <Save
                        style={{ background, color }}
                        onClick={saveBets}>
                        <p>Save</p>
                        <FiArrowRight style={{ marginLeft: 15 }} />
                    </Save>
              }
                {!disabled && <Save
                    style={{ background, color }} 
                    onClick={errorBets}>
                    <p>Save</p>
                    <FiArrowRight style={{ marginLeft: 15 }} />
                </Save>}


            </CartContainer>
        </>
    );
};


export default Cart
