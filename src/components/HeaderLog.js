import React from "react";
import { NavLink } from "react-router-dom";

//auth & redux
import { connect } from 'react-redux';

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
                                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <div class="collapse navbar-collapse justify-content-end" id="navbar-content">
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
                                <div class="right-area header-action d-flex align-items-center max-un">
                                    <div class="single-item notifications-area">
                                        <div class="notifications-btn active-dot">
                                            <img src="assets/images/icon/notifications.png" alt="icon" />
                                            <span class="items">3</span>
                                        </div>
                                        <div class="main-area notifications-content">
                                            <div class="head-area d-flex justify-content-between">
                                                <div class="left d-flex align-items-center">
                                                    <h5>Notifications</h5>
                                                    <span class="mdr">03</span>
                                                </div>
                                                <button class="clear-all">
                                                    <img src="assets/images/icon/cancel-btn.png" alt="icon" />
                                                </button>
                                            </div>
                                            <ul>
                                                <li class="border-area">
                                                    <a href="#/">
                                                        <div class="img-area">
                                                            <img src="assets/images/latest-tips-1.png" alt="img" />
                                                        </div>
                                                        <div class="text-area">
                                                            <h6>Della Parker</h6>
                                                            <p class="mdr">+2736 Profit on Horse Racing</p>
                                                            <p class="mdr time-area">04:20 PM</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#/" class="active">
                                                        <div class="img-area">
                                                            <img src="assets/images/latest-tips-2.png" alt="img" />
                                                        </div>
                                                        <div class="text-area">
                                                            <h6>Terasa Estrada</h6>
                                                            <p class="mdr">+2534 Profit on Football</p>
                                                            <p class="mdr time-area">03:17 PM</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#/">
                                                        <div class="img-area">
                                                            <img src="assets/images/latest-tips-3.png" alt="img" />
                                                        </div>
                                                        <div class="text-area">
                                                            <h6>Tyler Bell</h6>
                                                            <p class="mdr">+2534 Profit on Football</p>
                                                            <p class="mdr time-area">05:33 PM</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="single-item user-area userNav">
                                        <div class="user-btn d-flex align-items-center">
                                            <span class="user-profile">
                                                <img src="assets/images/dashboard-profile-1.png" alt="icon" />
                                            </span>
                                            <span class="name-area">{user.name}</span>
                                            <i class="icon-c-down-arrow"></i>
                                        </div>
                                        <div class="main-area user-content userNav">
                                            <div class="head-area d-flex">
                                                <div class="img-area">
                                                    <img src="assets/images/dashboard-profile-2.png" alt="icon" />
                                                </div>
                                                <div class="text-area">
                                                    <div className="userName">
                                                        <h5>{user.name}</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <img src="assets/images/icon/user-icon.png" alt="icon" />
                                                        <span class="userID">{user._id}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li class="border-area userNav">
                                                    <NavLink to="/dashboard" onClick={() => window.reload()}>
                                                        <img src="assets/images/icon/dashboard-icon.png" alt="icon" />
                                                        <p class="mdr">Overview</p>
                                                    </NavLink>
                                                </li>
                                                <li class="border-area userNav">
                                                    <div class="userBalance">
                                                        <h5>$0.00</h5>
                                                        <p>Available Balance</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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