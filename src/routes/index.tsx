import Bet from "../pages/Bet";
import MyRoute from "./MyRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Recover from "../pages/Recover";
import Page404 from "../pages/Page404";
import Account from "../pages/Account";
import { Switch } from "react-router-dom";
import Registration from "../pages/Registration";
import Reset from "../pages/Reset";

const Routes = () => {
    return (
        <Switch>
            <MyRoute isClosed={false} exact path="/" component={Login} />
            <MyRoute isClosed={false} exact path="/reset" component={Reset} />
            <MyRoute isClosed exact path="/bet" component={Bet} />
            <MyRoute isClosed={false} exact path="/register" component={Registration} />
            <MyRoute isClosed={false} exact path="/recover" component={Recover} />
            <MyRoute isClosed exact path="/home" component={Home} />
            <MyRoute isClosed exact path="/account" component={Account} />
            <MyRoute isClosed={false} path="*" component={Page404} />
        </Switch>
    );
};

export default Routes;
