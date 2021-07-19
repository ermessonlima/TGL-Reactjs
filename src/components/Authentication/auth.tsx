import { useDispatch } from 'react-redux';
import {
    Container,
    Form,
    Input,
    RecoverButton,
    SubmitButton,
    HandleButton,
} from "./styles";
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import * as exampleActions from "../../store/modules/example/actions"
const Authentication = () => {
    const dispatch = useDispatch();

    const  handleClick = (e:any) => {
         e.preventDefault();
        dispatch(exampleActions.clicaBotao());
    }
    const botaoClicado = useSelector((state:any) => state.example.botaoClicado);
    console.log(botaoClicado)


    return (
        <Container>
            <h1>Authentication</h1>
            <Form >
                <Input
                    placeholder="Email"
                    id="email"
                    type="email"
                />
                <Input
                    placeholder="Password"
                    id="password"
                    type="password"
                />
                <RecoverButton >
                    <Link to="/recover">  I forgot my password  </ Link>

                </RecoverButton>
                <SubmitButton type="submit" onClick={handleClick}>
                    <Link to="/home" >
                        Log In
                        <FiArrowRight style={{ background: '#fff' }} />
                    </ Link>
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
