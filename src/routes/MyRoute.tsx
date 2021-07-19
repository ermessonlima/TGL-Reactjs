import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }: {
    [x: string]: any;
    component: any;
    isClosed: boolean | any ;
}): JSX.Element  {
    const isLoggedIn = true;

    if( isClosed && !isLoggedIn ) {
        return (
            <Redirect 
                to={{pathname: '/', state: {prevPath: rest.location.pathname} }}
            />
        );
    }

    return <Route {...rest} component={Component}/>
};

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
    isClosed: PropTypes.bool,
}