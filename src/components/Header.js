import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="header-section">
                <div className="overlay">
                    <div className="container">
                        <div className="row d-flex header-area">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <NavLink className="navbar-brand" to="/" onClick={() => window.reload()}>
                                    <span className="specialelite logothetext">The </span>
                                    <span className="permanentmarker logoBFGtext">B.F.G's</span>
                                </NavLink>
                                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbar-content">
                                    <i className="fas fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbar-content">
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/" onClick={() => window.reload()}>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/DashboardNoLog" onClick={() => window.reload()}>Dashboard</NavLink>
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
                                    <div className="right-area header-action d-flex align-items-center max-un">
                                        <button type="button" className="cmn-btn reg" data-bs-toggle="modal" data-bs-target="#loginMod" to="/log">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>  
            </div>
            
        )
    }
}

export default Header;