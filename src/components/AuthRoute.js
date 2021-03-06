// Dashboard cannot be accessed unless logged in

import {Route, Navigate} from 'react-router-dom';

const AuthRoute = ({children, authenticated, ...rest}) => {
    return (
        <Route
        {...rest}
        render={
            ({location}) => authenticated ? (children) : (
                <Navigate 
                to={{
                    pathname: "/dashboardnolog",
                    state: {from: location}
                }}
                />
            )
        }
        />
    );

};

// const mapStateToProps = ({ session }) => ({
//     authenticated: session.authenticated
// });

export default AuthRoute; 