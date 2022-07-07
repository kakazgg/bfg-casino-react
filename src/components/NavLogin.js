import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

const AuthRoute = ({user, children, authenticated, ...rest}) => {
    return (
        <Route
        {...rest}
        render={
            () => !authenticated ? (children) : (
                <div className="right-area header-action d-flex align-items-center max-un">
                                        <button type="button" className="cmn-btn reg" data-bs-toggle="modal" data-bs-target="#loginMod" to="/log">
                                            Login
                                        </button>
                                    </div>
            )
        }
        />
    );

};

const mapStateToProps = ({ session }) => ({
    authenticated: session.authenticated
});

export default connect(mapStateToProps)(AuthRoute);