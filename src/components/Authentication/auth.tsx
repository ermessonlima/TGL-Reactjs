import { useState } from 'react';
import {
    Container,
    Form,
    Input,
    RecoverButton,
    SubmitButton,
    HandleButton,
} from "./styles";
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import history from '../../services/history';
import { FiArrowRight } from "react-icons/fi";
import * as actions from '../../store/modules/auth/actions'

import * as exampleActions from "../../store/modules/example/actions";

import { get } from 'lodash';


interface userState {
    usuario: {
        user: {
            username: string;
            email: string;
            password: string;
        }
    }
}

const Authentication = (props) => {

    const prevPath = get(props, 'location.state.prevPath', '/');
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   // const isEmailVerified = useSelector((state: userState) => state.usuario.user);
 
    function handleSubmit(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest()) 

     let formErros = false;

        if (!isEmail(email)) {
            formErros = true;
            toast.error('Invalid email.')
        }

        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('Password must be between 6 to 50 characters.')
        }



        if (formErros) {
            return;
        }

        dispatch(actions.loginRequest({email, password, prevPath}))


    }

    return (
        <Container>
          
            <h1>Authentication</h1>
          
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <RecoverButton >
                    <Link to="/recover">  I forgot my password  </ Link>
                </RecoverButton>

                <SubmitButton type="submit" onClick={handleSubmit}>
                    Log In
                    <FiArrowRight style={{ background: '#fff' }} />

                </SubmitButton>
            </Form>
            
            <HandleButton >
                <Link to="/register">
                    Sign Up
                    <FiArrowRight />
                </ Link>
            </HandleButton>
        </Container>
    );
};

export default Authentication;
