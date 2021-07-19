import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

const Authentication = () => {
    return (
        <Container>
            <h1>Reset password</h1>
            <Form >
                <Input
                    placeholder="Email"
                    id="email"
                    type="email"
                />
                <SubmitButton type="submit">
                    Send link
                </SubmitButton>
            </Form>
            <HandleButton >
                <Link to="/"> <FiArrowLeft /> Back </ Link>
            </HandleButton>
        </Container>
    );
};

export default Authentication;
