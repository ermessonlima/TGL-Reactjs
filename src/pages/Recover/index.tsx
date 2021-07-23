import { Container, Title } from "./styles";
import RecoverPassword from "../../components/Authentication/recoverPassword";

const Recover = () => {
    return (
            <Container>
                <Title>
                    <h2>The Greatest App</h2>
                    <div>for</div>
                    <h1>LOTTERY</h1>
                </Title>
                <RecoverPassword  />
            </Container>
    );
};

export default Recover;
