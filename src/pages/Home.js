import React from "react";
import { Link, NavLink } from 'react-router-dom';

class Home extends React.Component {
    render() {
        const refreshPage = () => {
            window.reload();
        }
        return (
            <main>
                <section className="banner-section">
                    <div className="overlay">
                        <div className="shape-area">
                            <img src="assets/images/coin-2.png" className="obj-1" alt="img" />
                            <img src="assets/images/winner-cup.png" className="obj-2" alt="img" />
                        </div>
                        <div className="banner-content">
                            <div className="container">
                                <div className="content-shape">
                                    <img src="assets/images/coin-1.png" className="obj-1" alt="img" />
                                    <img src="assets/images/coin-3.png" className="obj-2" alt="img" />
                                    <img src="assets/images/coin-3.png" className="obj-3" alt="img" />
                                    <img src="assets/images/coin-4.png" className="obj-4" alt="img" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-10">
                                        <div className="main-content">
                                            <div className="top-area section-text">
                                                <div className="title-area-1">
                                                    <span className="specialelite logothetext1">The </span>
                                                    <span className="permanentmarker logoBFGtext1">B.F.G's</span>
                                                </div>
                                                <p className="xlr">The fastest and easiest way to bet on your favourite live sports, gaming tournaments and crypto price action.</p>
                                            </div>
                                            <div className="bottom-area">
                                                <span className="btn-border">
                                                    <button type="button" className="cmn-btn reg" data-bs-toggle="modal" data-bs-target="#loginMod">
                                                        Get Started Now
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="counter-section">
                        <div className="container">
                            <div className="row cus-mar">
                                <div className="col-xl-4 col-md-6">
                                    <div className="single-area d-flex align-items-center">
                                        <div className="img-area">
                                            <img src="assets/images/icon/counter-icon-1.png" alt="img" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="m-none"><span>$</span><span className="counter">1304,941</span></h3>
                                            <p>Paid Out Prize in Total</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="single-area d-flex align-items-center">
                                        <div className="img-area">
                                            <img src="assets/images/icon/counter-icon-2.png" alt="img" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="m-none"><span className="counter">76,752</span></h3>
                                            <p>Winners</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="single-area d-flex align-items-center">
                                        <div className="img-area">
                                            <img src="assets/images/icon/counter-icon-3.png" alt="img" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="m-none"><span className="counter">4,392</span></h3>
                                            <p>Players online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-bitbetio">
                    <div className="overlay pt-120 pb-120">
                        <div className="shape-area">
                            <img src="assets/images/crypto-fanus-1.png" className="obj-1" alt="img" />
                            <img src="assets/images/crypto-fanus-2.png" className="obj-2" alt="img" />
                        </div>
                        <div className="container">
                            <div className="row d-flex align-items-end">
                                <div className="col-lg-6">
                                    <div className="image-area d-rtl left-side">
                                        <img src="assets/images/about-bitbetio-image.png" alt="images" className="max-un" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="section-text">
                                        <h5 className="sub-title">Next-Level Sports Betting</h5>
                                        <h2 className="title">A Revolution in Online Betting</h2>
                                        <p>The B.F.G's is a user-friendly, decentralised, peer-to-peer betting platform.</p>
                                    </div>
                                    <div className="row cus-mar">
                                        <div className="col-sm-6 col-6">
                                            <div className="single-item">
                                                <img src="assets/images/icon/about-icon-1.png" alt="images" />
                                                <h5>Peer-to-peer</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-6">
                                            <div className="single-item">
                                                <img src="assets/images/icon/about-icon-2.png" alt="images" />
                                                <h5>No limits</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-6">
                                            <div className="single-item">
                                                <img src="assets/images/icon/about-icon-3.png" alt="images" />
                                                <h5>Decentralised</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-6">
                                            <div className="single-item">
                                                <img src="assets/images/icon/about-icon-4.png" alt="images" />
                                                <h5>Community-powered</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="how-it-works">
                    <div className="overlay pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-header text-center">
                                        <h5 className="sub-title">Get to Know.</h5>
                                        <h2 className="title">How The B.F.G's Work?</h2>
                                        <p>Our platform has been designed from the ground up to be tailored to the unique form of
                                            betting and settlement offered by the blockchain. Follow these simple steps and make
                                            profits!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-content">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-5">
                                        <ul className="nav" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <h5 className="nav-link active" id="sport-tab" data-bs-toggle="tab"
                                                    data-bs-target="#sport" role="tab" aria-controls="sport" aria-selected="true">
                                                    <span className="image-area">
                                                        <img src="assets/images/icon/how-works-icon-1.png" alt="icon" />
                                                    </span>
                                                    Choose a sport
                                                </h5>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <h5 className="nav-link" id="match-tab" data-bs-toggle="tab" data-bs-target="#match"
                                                    role="tab" aria-controls="match" aria-selected="false">
                                                    <span className="image-area">
                                                        <img src="assets/images/icon/how-works-icon-2.png" alt="icon" />
                                                    </span>
                                                    Choose a match
                                                </h5>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <h5 className="nav-link" id="team-tab" data-bs-toggle="tab" data-bs-target="#team"
                                                    role="tab" aria-controls="team" aria-selected="false">
                                                    <span className="image-area">
                                                        <img src="assets/images/icon/how-works-icon-3.png" alt="icon" />
                                                    </span>
                                                    Choose your team
                                                </h5>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <h5 className="nav-link" id="odds-tab" data-bs-toggle="tab" data-bs-target="#odds"
                                                    role="tab" aria-controls="odds" aria-selected="false">
                                                    <span className="image-area">
                                                        <img src="assets/images/icon/how-works-icon-4.png" alt="icon" />
                                                    </span>
                                                    Choose your odds
                                                </h5>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <h5 className="nav-link" id="amount-tab" data-bs-toggle="tab" data-bs-target="#amount"
                                                    role="tab" aria-controls="amount" aria-selected="false">
                                                    <span className="image-area">
                                                        <img src="assets/images/icon/how-works-icon-5.png" alt="icon" />
                                                    </span>
                                                    Choose your amount
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="sport" role="tabpanel"
                                                aria-labelledby="sport-tab">
                                                <h4>Select a Sport</h4>
                                                <div className="img-area">
                                                    <img src="assets/images/process-img-1.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="match" role="tabpanel" aria-labelledby="match-tab">
                                                <h4>Select a Match</h4>
                                                <div className="img-area">
                                                    <img src="assets/images/process-img-2.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="team" role="tabpanel" aria-labelledby="team-tab">
                                                <h4>Select a Team</h4>
                                                <div className="img-area">
                                                    <img src="assets/images/process-img-3.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="odds" role="tabpanel" aria-labelledby="odds-tab">
                                                <h4>Select Odds</h4>
                                                <div className="img-area">
                                                    <img src="assets/images/process-img-4.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="amount" role="tabpanel" aria-labelledby="amount-tab">
                                                <h4>Select Bet Amount </h4>
                                                <div className="img-area">
                                                    <img src="assets/images/process-img-5.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bet-this-game">
                    <div className="overlay pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-header text-center">
                                        <h5 className="sub-title">Lets bet!</h5>
                                        <h2 className="title">Bets on The Game</h2>
                                        <p>Use the power of The B.F.G's fast, secured, autonomous and trustworthy platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row cus-mar">
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>Mar 23, 2022,3:45PM EDT</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Arsenal</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-1.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="hours">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <h6>Division- Belarus</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Volna</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-2.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Eagle will win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Paeek will win</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>Mar 23, 2022,3:45PM EDT</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Apollon</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-3.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="hours">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <h6>Division (Cyprus)</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Paeek</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-4.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Eagle will win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Paeek will win</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>Mar 23, 2022,3:45PM EDT</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Raufoss</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-5.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="hours">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <h6>Division (Norway)</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Åsane</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Eagle will win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Paeek will win</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>Mar 23, 2022,3:45PM EDT</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Lida</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-6.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="hours">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <h6>Division (Cyprus)</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Paeek</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-7.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Eagle will win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Paeek will win</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>Mar 23, 2022,3:45PM EDT</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Electro</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-8.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="hours">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <h6>Division- Belarus</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Dainava</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-9.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Eagle will win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Paeek will win</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>Mar 23, 2022,3:45PM EDT</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Eagle</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-10.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="hours">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <h6>Division- Belarus</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Paeek</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/team-logo-11.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Eagle will win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Paeek will win</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <div className="bottom-area mt-60">
                                        <span className="btn-border">
                                            <Link to="/Sports" className="cmn-btn" onClick={() => window.reload()}>Browse More</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="betpopmodal">
                    <div className="modal fade" id="betpop-up" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xxl-8 col-xl-9 col-lg-11">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="top-item">
                                                    <a href="/#" className="cmn-btn firstTeam">Eagle will win</a>
                                                    <a href="/#" className="cmn-btn active draw">Draw</a>
                                                    <a href="/#" className="cmn-btn lastTeam">Paeek will win</a>
                                                </div>
                                                <div className="select-odds d-flex align-items-center">
                                                    <h6>Select Odds</h6>
                                                    <div className="d-flex in-dec-val">
                                                        <input type="text" value="1.5" className="InDeVal2" />
                                                        <div className="btn-area">
                                                            <button className="plus2">
                                                                <img src="assets/images/icon/up-arrow.png" alt="icon" />
                                                            </button>
                                                            <button className="minus2">
                                                                <img src="assets/images/icon/down-arrow.png" alt="icon" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mid-area">
                                                    <div className="single-area">
                                                        <div className="item-title d-flex align-items-center justify-content-between">
                                                            <span>Bet Value :</span>
                                                            <select>
                                                                <option value="sol">SOL</option>
                                                            </select>
                                                        </div>
                                                        <div className="d-flex in-dec-val">
                                                            <input type="text" value="0.1" className="InDeVal1" />
                                                            <div className="btn-area">
                                                                <button className="plus">
                                                                    <img src="assets/images/icon/up-arrow.png" alt="icon" />
                                                                </button>
                                                                <button className="minus">
                                                                    <img src="assets/images/icon/down-arrow.png" alt="icon" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-area quick-amounts">
                                                        <div className="item-title d-flex align-items-center">
                                                            <p>Quick Amounts</p>
                                                        </div>
                                                        <div className="input-item">
                                                            <button className="quickIn">0.005</button>
                                                            <button className="quickIn">0.025</button>
                                                            <button className="quickIn">0.1</button>
                                                            <button className="quickIn">0.5</button>
                                                            <button className="quickIn">2.5</button>
                                                        </div>
                                                    </div>
                                                    <div className="single-area smart-value">
                                                        <div className="item-title d-flex align-items-center">
                                                            <p className="mdr">Smart Contact Value</p>
                                                        </div>
                                                        <div className="contact-val d-flex align-items-center">
                                                            <h4>0.1103</h4>
                                                            <h5>SOL</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bottom-area">
                                                    <div className="fee-area">
                                                        <p>Winner will get: <span className="amount">0.179</span> SOL</p>
                                                        <p className="fee">Escrow Fee: <span>5%</span></p>
                                                    </div>
                                                    <div className="btn-area">
                                                        <button>Make (0.1 SOL) Bet</button>
                                                    </div>
                                                    <div className="bottom-right">
                                                        <p>Game Closes:</p>
                                                        <p className="date-area">Mar <span>21,2021-1:00</span> Am</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="amazing-features">
                    <div className="overlay pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-header text-center">
                                        <h5 className="sub-title">Leading the Solana betting service</h5>
                                        <h2 className="title">An Exhaustive list of Amazing Features</h2>
                                        <p>The B.F.G's is the most advanced sports crypto beting platform and highest stakes across
                                            multiple bookmakers and exchanges.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-carousel">
                                <div className="single-slide">
                                    <div className="slide-content">
                                        <div className="icon-area">
                                            <img src="assets/images/icon/amazing-features-icon-1.png" alt="icon" />
                                        </div>
                                        <h5>Safety</h5>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-content">
                                        <div className="icon-area">
                                            <img src="assets/images/icon/amazing-features-icon-2.png" alt="icon" />
                                        </div>
                                        <h5>Transparency</h5>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-content">
                                        <div className="icon-area">
                                            <img src="assets/images/icon/amazing-features-icon-3.png" alt="icon" />
                                        </div>
                                        <h5>Low Commissions</h5>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-content">
                                        <div className="icon-area">
                                            <img src="assets/images/icon/amazing-features-icon-4.png" alt="icon" />
                                        </div>
                                        <h5>Player is King</h5>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="slide-content">
                                        <div className="icon-area">
                                            <img src="assets/images/icon/amazing-features-icon-3.png" alt="icon" />
                                        </div>
                                        <h5>Low Commissions</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="more-features">
                    <div className="overlay pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-0 order-1">
                                    <div className="img-area">
                                        <img src="assets/images/more-features-image.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="section-header">
                                        <h5 className="sub-title">A New Betting World</h5>
                                        <h2 className="title">Bets on Future Currencies Prices Between Users</h2>
                                        <p>Cutting out bookmakers, opens a new betting experience for players.</p>
                                    </div>
                                    <div className="content-area">
                                        <div className="single-item">
                                            <div className="image-area">
                                                <img src="assets/images/icon/more-features-icon-1.png" alt="img" />
                                            </div>
                                            <div className="text-area">
                                                <h5>Pool Bets</h5>
                                                <p>Players bet on their predicted outcomes and all stakes go into a single pool.
                                                    Winners share the pool. The odds are dynamic and depend on the number of
                                                    participants and the amounts they wagered.</p>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="image-area">
                                                <img src="assets/images/icon/more-features-icon-2.png" alt="img" />
                                            </div>
                                            <div className="text-area">
                                                <h5>Head to head betting</h5>
                                                <p>The purest form of peer-to-peer betting. One player opens the bet and defines the
                                                    odds and another player matches the bet. Players are not bound by unfavourable,
                                                    centrally-defined odds.</p>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="image-area">
                                                <img src="assets/images/icon/more-features-icon-3.png" alt="img" />
                                            </div>
                                            <div className="text-area">
                                                <h5>Multi- Player Bets</h5>
                                                <p>High rollers can wager large amounts by offering bets that can be partially
                                                    matched by multiple players. Similar to head-to-head bets, the odds are defined
                                                    by the player who opens the bet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="escrow-bets-fee">
                    <div className="overlay pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-header text-center">
                                        <h2 className="title">Betting Fees</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row cus-mar">
                                <div className="col-md-6">
                                    <div className="single-item">
                                        <img src="assets/images/icon/bets-escrow-icon-1.png" alt="icon" />
                                        <h4>Currency Bets</h4>
                                        <h3><span className="fee">5%</span> Fee</h3>
                                        <p>Creating bets on future cryptocurrency prices.</p>
                                        <p>All bets are between users - peer to peer.</p>
                                        <p>Invite other users to your bet.</p>
                                        <span className="btn-border">
                                            <NavLink onClick={refreshPage} to="/Currencies" className="cmn-btn">Currency Bets</NavLink>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-item">
                                        <img src="assets/images/icon/bets-escrow-icon-2.png" alt="icon" />
                                        <h4>Sports Bets</h4>
                                        <h3><span className="fee">5%</span> Fee</h3>
                                        <p>Creating bets on the results of sports fixtures.</p>
                                        <p>All bets are between users and against the house.</p>
                                        <p>Invite other users to your bet.</p>
                                        <span className="btn-border">
                                            <NavLink onClick={refreshPage} to="/Sports" className="cmn-btn">Sports Bets</NavLink>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faqs-section">
                    <div className="overlay pt-120">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-7">
                                    <div className="section-header text-center">
                                        <h5 className="sub-title">Frequently Asked Questions</h5>
                                        <h2 className="title">If you have questions we have answers.</h2>
                                        <p>Answers for our most popular questions about sportsbetting, crypto, and The B.F.G's</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row faq-bg d-flex justify-content-center">
                                <div className="col-xl-10">
                                    <div className="faq-box mt-60 mb-60">
                                        <div className="accordion" id="accordionFaqs">
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                        I want to play with The B.F.G's, What do i need to do?
                                                    </button>
                                                </h5>
                                                <div id="collapseOne" className="accordion-collapse collapse"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        How fast do I get paid once I win a bet?
                                                    </button>
                                                </h5>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        What are the commissions I have to pay?
                                                    </button>
                                                </h5>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        Can I set the odds for any bet I want?
                                                    </button>
                                                </h5>
                                                <div id="collapseFour" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFour" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                        aria-expanded="false" aria-controls="collapseFive">
                                                        What kind of Escrow do you provide?
                                                    </button>
                                                </h5>
                                                <div id="collapseFive" className="accordion-collapse collapse"
                                                    aria-labelledby="headingFive" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingsix">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapsesix"
                                                        aria-expanded="false" aria-controls="collapsesix">
                                                        What makes us unique?
                                                    </button>
                                                </h5>
                                                <div id="collapsesix" className="accordion-collapse collapse"
                                                    aria-labelledby="headingsix" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingsaven">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapsesaven"
                                                        aria-expanded="false" aria-controls="collapsesaven">
                                                        Is the Escrow payment secured?
                                                    </button>
                                                </h5>
                                                <div id="collapsesaven" className="accordion-collapse collapse"
                                                    aria-labelledby="headingsaven" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingeight">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseeight"
                                                        aria-expanded="false" aria-controls="collapseeight">
                                                        How do I deposit/transfer money to my transactions?
                                                    </button>
                                                </h5>
                                                <div id="collapseeight" className="accordion-collapse collapse"
                                                    aria-labelledby="headingeight" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h5 className="accordion-header" id="headingNine">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseNight"
                                                        aria-expanded="false" aria-controls="collapseNight">
                                                        How do I withdraw money from my account?
                                                    </button>
                                                </h5>
                                                <div id="collapseNight" className="accordion-collapse collapse"
                                                    aria-labelledby="headingNine" data-bs-parent="#accordionFaqs">
                                                    <div className="accordion-body">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="affilliate-section">
                    <div className="overlay pt-120">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 order-lg-0 order-1">
                                    <div className="img-area d-rtl">
                                        <img src="assets/images/affilliate-image.png" alt="img" className="max-un" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="section-text">
                                        <h5 className="sub-title">Join forces with The B.F.G's</h5>
                                        <h2 className="title">Earn As Our Affilliate</h2>
                                        <p>Join our affiliate program and earn up to 50% in revshare. Are you an experienced affiliate? Or, maybe you're brand new to the space. At The BFGs we welcome all levels of experience and would love to have you as part of our affiliate team. Partner with us today and earn as your referrals start playing.</p>
                                    </div>
                                    <div className="bottom-area">
                                        <div className="btn-border d-inline-block">
                                            <a href="affiliate.html" className="cmn-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Home;