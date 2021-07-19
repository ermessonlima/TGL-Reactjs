import Authentication from "../../components/Authentication/auth";
import { Container, Title } from "./styles";


const Login = () => {

    return (
            <Container>
                <Title>
                    <h2>The Greatest App</h2>
                    <div>for</div>
                    <h1>LOTTERY</h1>
                </Title>
                <Authentication  />
            </Container>
    );
};

export default Login;
