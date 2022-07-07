import React from "react";
import { NavLink } from "react-router-dom";

//auth & redux
import { connect } from 'react-redux';
import NavUserInfo from "./NavUserInfo";
import NavLogin from "./NavLogin";

const HeaderLog = ({ user }) => {
    return (
        <header class="header-section user-dashboard">
            <div class="overlay">
                <div class="container">
                    <div class="row d-flex header-area">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <NavLink className="nav-link" to="/" onClick={() => window.reload()}>
                                <span class="specialelite logothetext">The </span>
                                <span class="permanentmarker logoBFGtext">B.F.G's</span>
                            </NavLink>
                            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar-content">
                                <i class="fas fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbar-content">
                                <ul class="navbar-nav mr-auto mb-2 mb-lg-0 notificationEdit">
                                    <div class="collapse navbar-collapse justify-content-end  notificationEdit" id="navbar-content">
                                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/" onClick={() => window.reload()}>Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/Dashboard" onClick={() => window.reload()}>Dashboard</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/Sports" onClick={() => window.reload()}>Sports</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/Currencies" onClick={() => window.reload()}>Currency</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/Tournaments" onClick={() => window.reload()}>Tournaments</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/Affiliate" onClick={() => window.reload()}>Affiliate</NavLink>
                                            </li>
                                            
                                        </ul>
                                        
                                    </div>
                                </ul>
                                <NavUserInfo />
                                <NavLogin />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
};


const mapStateToProps = ({ session }) => ({
    user: session.user,
    email: session.email,
    _id: session._id
});

export default connect(mapStateToProps)(HeaderLog);