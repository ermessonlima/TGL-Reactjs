import { HeaderContainer, NavBarLeft, Title, NavBarRight } from "./styles";
import { Link } from 'react-router-dom';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux';


function Header({ home }) {
    const dispatch = useDispatch();


    function handleSubmit(e) {
        e.preventDefault();

        dispatch(actions.loginFailure((payload: any)=>{}));


        history.push('/')
    }

    return (
        <HeaderContainer>
            <NavBarLeft>
                <Title>
                    TGL<div></div>
                </Title>
                {home && <Link to="/home">Home</Link>}
            </NavBarLeft>
            <NavBarRight>
                <Link to="/Account">Account</Link>
                <button onClick={handleSubmit}>
                    <Link to="/">Logout</Link>
                </button>
            </NavBarRight>
        </HeaderContainer>
    )
}

export default Header;