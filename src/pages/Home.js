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
                                                    <span className="specialelite logothetext1">The</span>
                                                    <span className="permanentmarker logoBFGtext1">B.F.G's</span>
                                                </div>
                                                <p className="xlr">The fastest and easiest way to bet<br/> on your favourite live sports,<br/> gaming tournaments and crypto price action.</p>
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
                                            <h3 className="m-none"><span>$</span><span className="counter">1,304</span></h3>
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
                                            <h3 className="m-none"><span className="counter">76</span></h3>
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
                                            <h3 className="m-none"><span className="counter">253</span></h3>
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
                                        <h2 className="title"><h2>The Revolution</h2> in Online Betting</h2>
                                        <p>The B.F.G's is a user-friendly, decentralised, peer-to-peer betting platform.</p>
                                    </div>
                                    <div className="row cus-mar">
                                        <div className="col-sm-6 col-6">
                                            <div className="single-item">
                                                <img src="assets/images/icon/about-icon-1.png" alt="images" />
                                                <h5>Peer-to-Peer</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-6">
                                            <div className="single-item">
                                                <img src="assets/images/icon/about-icon-2.png" alt="images" />
                                                <h5>No Limits</h5>
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
                                                <h5>Community-Powered</h5>
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
                                        <p>The B.F.G's has been designed from the ground up to be a tailored and unique form of
                                            betting offered by blockchain technology. Follow these simple steps and join us!</p>
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
                                                <h5 className="nav-link" id="amount-tab" data-bs-toggle="tab" data-bs-target="#amount"
                                                    role="tab" aria-controls="amount" aria-selected="false">
                                                    <span className="image-area">
                                                        <img src="assets/images/icon/how-works-icon-4.png" alt="icon" />
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
                                        <h2 className="title">Bet on The Game</h2>
                                        <p>Use the power of The B.F.G's fast, secured, autonomous and trustworthy platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row cus-mar">
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>5th August, 2022, 19:00 PM UTC</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Palace</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/crystal-palace-logo.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span>0 - 0</span>
                                                    </h4>
                                                </div>
                                                <h6>Premier League</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Arsenal</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/arsenal-logo.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Win</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-area">
                                        <div className="head-area d-flex align-items-center">
                                            <span className="mdr cmn-btn">Pick Winner</span>
                                            <p>6th August, 2022, 11:30 AM UTC</p>
                                        </div>
                                        <div className="main-content">
                                            <div className="team-single">
                                                <h4>Fulham</h4>
                                                <span className="mdr">Home</span>
                                                <div className="img-area">
                                                    <img src="assets/images/fulham-logo.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="mid-area text-center">
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span className="minutes">00</span><span
                                                            className="seperator">:</span>
                                                    </h4>
                                                    <h4>
                                                        <span className="seconds">00</span>
                                                    </h4>
                                                </div>
                                                <div className="countdown d-flex align-items-center justify-content-center">
                                                    <h4>
                                                        <span>0 - 0</span>
                                                    </h4>
                                                </div>
                                                <h6>Premier League</h6>
                                            </div>
                                            <div className="team-single">
                                                <h4>Liverpool</h4>
                                                <span className="mdr">Away</span>
                                                <div className="img-area">
                                                    <img src="assets/images/liverpool-logo.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-item">
                                            <button type="button" className="cmn-btn firstTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Win</button>
                                            <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Draw</button>
                                            <button type="button" className="cmn-btn lastTeam" data-bs-toggle="modal"
                                                data-bs-target="#betpop-up">Win</button>
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
                <section className="amazing-features">
                    <div className="overlay pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-header text-center">
                                        <h5 className="sub-title">Leading the Solana betting service</h5>
                                        <h2 className="title">An Exhaustive list of Amazing Features</h2>
                                        <p>The B.F.G's is the most advanced crypto betting platform with the highest stakes across
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
                                        <h2 className="title">Bets on Future Currency Prices Between Users</h2>
                                        <p>Cutting out bookmakers opens a new betting experience for players.</p>
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
                                        <p>Join our affiliate program and earn up to 50% in revshare. Are you an experienced affiliate? Or, maybe you're brand new to the space. At The B.F.G's we welcome all levels of experience and would love to have you as part of our affiliate team. Partner with us today and earn as your referrals start playing.</p>
                                    </div>
                                    <div className="bottom-area">
                                        <div className="btn-border d-inline-block">
                                            <NavLink to="/affilliate" className="cmn-btn fjalla-one">Read More</NavLink>
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