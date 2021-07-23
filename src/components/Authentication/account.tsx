import { useState } from 'react';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { FiArrowRight } from "react-icons/fi";


interface userState {
    usuario: {
        user: {
            username: string;
            email: string;
            password: string;
        }
    }
}

const Account = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: userState) => state.usuario.user);
    const [usernameNew, setusernameNew] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let formErros = false;

        //Verifica se o nome do usuario é menor que 3 caracteres e menor que 255
        if (usernameNew.length < 3 || usernameNew.length > 255) {
            formErros = true;
            toast.error('Name must be between 3 to 255 characters.')
        }

        //Verifica se a senha é menor que 6 caracteres e menor que 50
        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('Password must be between 6 to 50 characters.')
        }

        //Verifica se as senha são iguais
        if (password != repeatPassword) {
            formErros = true;
            toast.error('Password must match.')
        }

        //Caso atenda a uma das situações anterior, o usuario não prossegue
        if (formErros) {
            return;
        }
        try {
            const response = {
                usernameNew,
                password,
            }

            //Mensagem de sucesso ao atender todos os requisitos.
            toast.success('Changed successfully!')

        } catch (e) {
            console.log(e)
        }
        //Alteração do usuario no redux
        dispatch({
            type: 'SET_LOGIN',
            payload: {
                user: {
                    username: usernameNew,
                    email: user.email,
                    password: password
                }
            }
        })
    }

    return (
        <Container>
            <h1>Hi, {user.username}!</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Username"
                    id="username"
                    type="username"
                    value={usernameNew}
                    onChange={e => setusernameNew(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Input
                    placeholder="Repeat the password"
                    type="password"
                    id="repeatPassword"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />

                <SubmitButton type="submit">
                    Register <FiArrowRight />
                </SubmitButton>

            </Form>
            <HandleButton >
                <Link to="/home"> Back </ Link>
            </HandleButton>

        </Container>
    );
};

export default Account;
