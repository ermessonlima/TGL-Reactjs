import Reactg, {useState} from 'react';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import {Link} from 'react-router-dom';
import {  FiArrowRight } from "react-icons/fi";
import { toast } from 'react-toastify';



const Authentication = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let formErros = false;

        if(username.length < 3 || username.length > 255) {
            formErros = true;
            toast.error('Nome deve ter entre 3 a 255 caracteres')
        }

        if(password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('Password deve ter entre 6 a 50 caracteres')
        }
    }



    return (
            <Container>
                <h1>Registration</h1>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Username"
                        id="username"
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
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
                    <SubmitButton type="submit">
                        Register <FiArrowRight />
                    </SubmitButton>
                </Form>
                <HandleButton >
                <Link to="/"> Back </ Link>
                </HandleButton>
            </Container>
    );
};

export default Authentication;
