import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FiArrowRight } from "react-icons/fi";

const Authentication = () => {
    const botaoClicado = useSelector((state:any) => state.example.botaoClicado);
    console.log(botaoClicado)
    return (
        <Container>
            <h1>Hi, {botaoClicado ? 'clicado' : 'nao clicado'}</h1>
            <Form >
                <Input
                    placeholder="Username"
                    id="username"
                    type="username"
                />
                <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                />
                <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                />
                <SubmitButton type="submit">
                    Change <FiArrowRight />
                </SubmitButton>
            </Form>
            <HandleButton >
                <Link to="/"> Back </ Link>
            </HandleButton>
  
        </Container>
    );
};

export default Authentication;
