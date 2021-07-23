import { Container } from "./styles";
import Header from "../../components/Header";
import Authentication from "../../components/Authentication/account";

const Account = () => {

    return (<>
       <Header home={true}/>
            <Container>
                <Authentication  />
            </Container>
            </>
    );
};

export default Account;
