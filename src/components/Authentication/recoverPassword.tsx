import {useState} from "react";
import {
    Container,
    Form,
    Input,
    SubmitButton,
    HandleButton,
} from "./styles";
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";

interface userState {
    usuario: {
        user: {
            username: string;
            email: string;
            password: string;
        }
    }
}

const Authentication = () => {

    const [email, setEmail] = useState('');
    const isEmailVerified = useSelector((state: userState) => state.usuario.user);
    
    function handleSubmit(e) {
        e.preventDefault();
        let formErros = false;

        if (!isEmail(email)) {
            formErros = true;
            toast.error('Invalid e-mail')
        }

        if (email != isEmailVerified.email ) {
            formErros = true;
            toast.error('Invalid user')
        }

        if (formErros) {
            return;
        }
      
        toast.success('Check your inbox!')
    }



    return (
        <Container>
            <h1>Reset password</h1>
            <Form onSubmit={handleSubmit}>
            <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
