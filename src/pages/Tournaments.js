import React from "react";
import { Link } from "react-router-dom";

class Tournaments extends React.Component {
    render() {
        return (
            <main>
                <section class="banner-section inner-banner soccer-bets">
                    <div class="overlay">
                        <div class="shape-area">
                            <img src="assets/images/winner-cup.png" class="obj-1" alt="img" />
                            <img src="assets/images/coin-5.png" class="obj-2" alt="img" />
                            <img src="assets/images/coin-3.png" class="obj-3" alt="img" />
                            <img src="assets/images/coin-6.png" class="obj-4" alt="img" />
                            <img src="assets/images/coin-9.png" class="obj-5" alt="img" />
                            <img src="assets/images/coin-8.png" class="obj-6" alt="img" />
                            <img src="assets/images/coin-7.png" class="obj-7" alt="img" />
                        </div>
                        <div class="banner-content">
                            <div class="container">
                                <div class="content-shape">
                                    <img src="assets/images/coin-1.png" class="obj-8" alt="img" />
                                </div>
                                <div class="col-lg-9 col-md-10">
                                    <div class="main-content">
                                        <h1>Tournaments</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="how-works-tournaments">
                    <div class="overlay">
                        <div class="container">
                            <div class="row cus-mar">
                                <div class="col-md-6 col-lg-4">
                                    <div class="single-area text-center">
                                        <div class="img-area">
                                            <img src="assets/images/icon/how-works-icon-9.png" alt="img" />
                                        </div>
                                        <h4>1. Join for free</h4>
                                        <p>Click on a tournament to join</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="single-area text-center">
                                        <div class="img-area">
                                            <img src="assets/images/icon/how-works-icon-10.png" alt="img" />
                                        </div>
                                        <h4>2. Bet</h4>
                                        <p>Bet on the The B.F.G's</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="single-area text-center">
                                        <div class="img-area">
                                            <img src="assets/images/icon/how-works-icon-11.png" alt="img" />
                                        </div>
                                        <h4>3. Win Prizes</h4>
                                        <p>Winners receive prizes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="tournaments-section">
                    <div class="overlay pt-120">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-5">
                                    <div class="section-header text-center">
                                        <h5 class="sub-title">Grow your Income With The B.F.G's</h5>
                                        <h2 class="title">Tournaments</h2>
                                        <p>Compete with The B.F.G's users to find the best bettor and win cash prizes.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <ul class="nav" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="cmn-btn active" id="ongoing-tab" data-bs-toggle="tab"
                                            data-bs-target="#ongoing" type="button" role="tab" aria-controls="ongoing"
                                            aria-selected="true">ongoing</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="cmn-btn" id="upcoming-tab" data-bs-toggle="tab" data-bs-target="#upcoming"
                                            type="button" role="tab" aria-controls="upcoming"
                                            aria-selected="false">upcoming</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="cmn-btn" id="past-tab" data-bs-toggle="tab" data-bs-target="#past"
                                            type="button" role="tab" aria-controls="past" aria-selected="false">past</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="ongoing" role="tabpanel" aria-labelledby="ongoing-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-1.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>Rage Fan Challenge</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-2.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>NBA Spotlight</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-3.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>NFL Week 11</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-4.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>Bitbetio Fall Classic</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-5.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>MLB Week</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-6.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>MLB Week 11</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-4.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>The B.F.G's Fall Classic</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-2.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>NBA Spotlight</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-6.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>MLB Week</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-1.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>Rage Fan Challenge</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-3.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>NFL Week 11</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-5.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>MLB Week</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="past" role="tabpanel" aria-labelledby="past-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-5.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>MLB Week</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-4.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>Bitbetio Fall Classic</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-6.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>MLB Week</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-1.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>Rage Fan Challenge</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-2.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>NBA Spotlight</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="single-item">
                                                <div class="left-item">
                                                    <div class="logo-item">
                                                        <img src="assets/images/icon/tournaments-logo-3.png" alt="icon" />
                                                    </div>
                                                    <div class="mid-area">
                                                        <h3>NFL Week 11</h3>
                                                        <ul>
                                                            <li>
                                                                <span><i class="far fa-calendar-alt"></i></span>
                                                                NOV 27 23:00 - DEC 2 14:00
                                                            </li>
                                                            <li>
                                                                <span><i class="fas fa-users"></i></span>
                                                                43 PARTICIPANTS
                                                            </li>
                                                        </ul>
                                                        <p>Compete for a chance to win one of five special Rage Fan NFT prizes.</p>
                                                    </div>
                                                </div>
                                                <div class="last-item">
                                                    <h6>In Prizes</h6>
                                                    <h4>$2000</h4>
                                                    <span class="btn-border">
                                                        <Link to="/TournamentDetails" className="cmn-btn" onClick={() => window.reload()}>Join Now</Link>
                                                    </span>
                                                </div>
                                            </div>
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

export default Tournaments