import React from "react";

//auth & redux
import {connect} from 'react-redux';
import {logoutUser} from './../auth/actions/userActions';


// React router
import {useNavigate, NavLink} from 'react-router-dom';

const Dashboard = ({logoutUser, user}) => {
    const navigate = useNavigate();
        return (
            <main>
                <section class="dashboard-content pt-120">
                    <div class="overlay">
                        <div class="dashboard-heading">
                            <div class="container">
                                <div class="row justify-content-lg-end justify-content-between">
                                    <div class="col-xl-9 col-lg-12">
                                        <ul class="nav" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="dashboard-tab" data-bs-toggle="tab"
                                                    data-bs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
                                                    aria-selected="true">Overview</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="my-bets-tab" data-bs-toggle="tab"
                                                    data-bs-target="#my-bets" type="button" role="tab" aria-controls="my-bets"
                                                    aria-selected="false">my bets</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="deposit-tab" data-bs-toggle="tab"
                                                    data-bs-target="#deposit" type="button" role="tab" aria-controls="deposit"
                                                    aria-selected="false">deposit</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="withdraw-tab" data-bs-toggle="tab"
                                                    data-bs-target="#withdraw" type="button" role="tab" aria-controls="withdraw"
                                                    aria-selected="false">withdraw</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="affiliate-tab" data-bs-toggle="tab"
                                                    data-bs-target="#affiliate" type="button" role="tab" aria-controls="affiliate"
                                                    aria-selected="false">affiliate</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="transactions-tab" data-bs-toggle="tab"
                                                    data-bs-target="#transactions" type="button" role="tab"
                                                    aria-controls="transactions" aria-selected="false">transactions</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="setting-tab" data-bs-toggle="tab"
                                                    data-bs-target="#setting" type="button" role="tab" aria-controls="setting"
                                                    aria-selected="false">Settings</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-3 col-lg-4 col-md-6">
                                    <div class="dashboard-sidebar">
                                        <div class="single-item">
                                            <img src="assets/images/profile-img-1.png" alt="images" />
                                            <h5>{user.name}</h5>
                                            <p>{user._id}</p>
                                            <span class="btn-border">
                                                <button class="cmn-btn" onClick={() => logoutUser(navigate)}>Log Out</button>
                                            </span>
                                        </div>
                                        <div class="balance">
                                            <div class="single-item">
                                                <img src="assets/images/icon/dashboard-sidebar-icon-1.png" alt="images" />
                                                <h5>$0.00</h5>
                                                <p>Available Balance</p>
                                            </div>
                                            <div class="bottom-area d-flex align-items-center justify-content-between">
                                                <a id="withdraw-tab" data-bs-toggle="tab"
                                                    data-bs-target="#withdraw" href="/#" class="mdr withdraw-btn fjalla-one">Withdraw</a>
                                                <a  id="deposit-tab" data-bs-toggle="tab"
                                                    data-bs-target="#deposit" href="/#" class="mdr deposit-btn fjalla-one">Deposit</a>
                                            </div>
                                        </div>
                                        <div class="single-item">
                                            <img src="assets/images/icon/dashboard-sidebar-icon-2.png" alt="images" />
                                            <h5>Need Help?</h5>
                                            <p class="mdr">Have questions? Our experts are here to help!.</p>
                                            <span class="btn-border">
                                                <button class="cmn-btn">
                                                <NavLink to="/contact" onClick={() => window.reload()}>Get Started Now</NavLink>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-8">
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="dashboard" role="tabpanel"
                                            aria-labelledby="dashboard-tab">
                                            <div class="row">
                                                <div class="col-xl-4 col-lg-6">
                                                    <div class="single-info">
                                                        <img src="assets/images/icon/user-info-icon-1.png" alt="icon" />
                                                        <div class="text-area">
                                                            <h4>0</h4>
                                                            <p class="mdr">Total Win Streak</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-lg-6">
                                                    <div class="single-info">
                                                        <img src="assets/images/icon/user-info-icon-2.png" alt="icon" />
                                                        <div class="text-area">
                                                            <h4>0%</h4>
                                                            <p class="mdr">Win Ratio</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-lg-6">
                                                    <div class="single-info">
                                                        <img src="assets/images/icon/user-info-icon-3.png" alt="icon" />
                                                        <div class="text-area">
                                                            <h4>0</h4>
                                                            <p class="mdr">Achievements</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <h5 class="title">Recent Activity</h5>
                                                    <div class="table-responsive fjalla-one">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Date/Time</th>
                                                                    <th scope="col">Type</th>
                                                                    <th scope="col">Currency</th>
                                                                    <th scope="col">Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">2021-01-07 16:33:53</th>
                                                                    <td>Deposit</td>
                                                                    <td>SOL</td>
                                                                    <td>
                                                                        <img src="assets/images/icon/sol-btc.png"
                                                                            alt="icon" />
                                                                        0.00
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2021-01-07 16:33:53</th>
                                                                    <td>Withdrawal</td>
                                                                    <td>SOL</td>
                                                                    <td>
                                                                        <img src="assets/images/icon/sol-btc.png"
                                                                            alt="icon" />
                                                                        0.00
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2021-01-07 16:33:53</th>
                                                                    <td>Referral</td>
                                                                    <td>SOL</td>
                                                                    <td>
                                                                        <img src="assets/images/icon/sol-btc.png"
                                                                            alt="icon" />
                                                                        0.00
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2021-01-07 16:33:53</th>
                                                                    <td>Withdrawal</td>
                                                                    <td>SOL</td>
                                                                    <td>
                                                                        <img src="assets/images/icon/sol-btc.png"
                                                                            alt="icon" />
                                                                        0.00
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2021-01-07 16:33:53</th>
                                                                    <td>Deposit</td>
                                                                    <td>SOL</td>
                                                                    <td>
                                                                        <img src="assets/images/icon/sol-btc.png"
                                                                            alt="icon" />
                                                                        0.00
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2021-01-07 16:33:53</th>
                                                                    <td>Referral</td>
                                                                    <td>SOL</td>
                                                                    <td>
                                                                        <img src="assets/images/icon/sol-btc.png"
                                                                            alt="icon" />
                                                                        0.00
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="my-bets" role="tabpanel" aria-labelledby="my-bets-tab">
                                            <div class="bets-tab">
                                                <div class="d-flex">
                                                    <ul class="nav" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="cmn-btn active" id="open-playing-tab"
                                                                data-bs-toggle="tab" data-bs-target="#open-playing" type="button"
                                                                role="tab" aria-controls="open-playing" aria-selected="true">Open
                                                                Playing</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="cmn-btn" id="finished-tab" data-bs-toggle="tab"
                                                                data-bs-target="#finished" type="button" role="tab"
                                                                aria-controls="finished" aria-selected="false">Finished</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="bet-this-game">
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="open-playing" role="tabpanel"
                                                aria-labelledby="open-playing-tab">
                                                <div class="single-area">
                                                    <div class="head-area d-flex align-items-center">
                                                        <span class="mdr cmn-btn">Pick Winner</span>
                                                        <p>Mar 23, 2022,3:45PM EDT</p>
                                                    </div>
                                                    <div class="main-content">
                                                        <div class="team-single">
                                                            <h4>Arsenal</h4>
                                                            <span class="mdr">Home</span>
                                                            <div class="img-area">
                                                                <img src="assets/images/team-logo-1.png" alt="img"/>
                                                            </div>
                                                        </div>
                                                        <div class="mid-area text-center">
                                                            <div class="countdown d-flex align-items-center justify-content-center">
                                                                <h4>
                                                                    <span class="hours">00</span><span
                                                                        class="seperator">:</span>
                                                                </h4>
                                                                <h4>
                                                                    <span class="minutes">00</span><span
                                                                        class="seperator">:</span>
                                                                </h4>
                                                                <h4>
                                                                    <span class="seconds">00</span>
                                                                </h4>
                                                            </div>
                                                            <h6>Division- Belarus</h6>
                                                        </div>
                                                        <div class="team-single">
                                                            <h4>Volna</h4>
                                                            <span class="mdr">Away</span>
                                                            <div class="img-area">
                                                                <img src="assets/images/team-logo-2.png" alt="img"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bottom-item">
                                                        <button type="button" class="cmn-btn firstTeam"
                                                            data-bs-toggle="modal" data-bs-target="#betpop-up">Eagle will
                                                            win</button>
                                                        <button type="button" class="cmn-btn draw" data-bs-toggle="modal"
                                                            data-bs-target="#betpop-up">Draw</button>
                                                        <button type="button" class="cmn-btn lastTeam"
                                                            data-bs-toggle="modal" data-bs-target="#betpop-up">Paeek will
                                                            win</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="canceled" role="tabpanel"
                                                aria-labelledby="canceled-tab">
                                                <div class="single-area">
                                                    <div class="head-area d-flex align-items-center">
                                                        <span class="mdr cmn-btn">Pick Winner</span>
                                                        <p>Mar 23, 2022,3:45PM EDT</p>
                                                    </div>
                                                    <div class="main-content">
                                                        <div class="team-single">
                                                            <h4>Apollon</h4>
                                                            <span class="mdr">Home</span>
                                                            <div class="img-area">
                                                                <img src="assets/images/team-logo-3.png" alt="img"/>
                                                            </div>
                                                        </div>
                                                        <div class="mid-area text-center">
                                                            <div class="countdown d-flex align-items-center justify-content-center">
                                                                <h4>
                                                                    <span class="hours">00</span><span
                                                                        class="seperator">:</span>
                                                                </h4>
                                                                <h4>
                                                                    <span class="minutes">00</span><span
                                                                        class="seperator">:</span>
                                                                </h4>
                                                                <h4>
                                                                    <span class="seconds">00</span>
                                                                </h4>
                                                            </div>
                                                            <h6>Division (Cyprus)</h6>
                                                        </div>
                                                        <div class="team-single">
                                                            <h4>Paeek</h4>
                                                            <span class="mdr">Away</span>
                                                            <div class="img-area">
                                                                <img src="assets/images/team-logo-4.png" alt="img"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bottom-item">
                                                        <button type="button" class="cmn-btn" data-bs-toggle="modal"
                                                            data-bs-target="#betpop-up">Eagle will win</button>
                                                        <button type="button" class="cmn-btn" data-bs-toggle="modal"
                                                            data-bs-target="#betpop-up">Draw</button>
                                                        <button type="button" class="cmn-btn" data-bs-toggle="modal"
                                                            data-bs-target="#betpop-up">Paeek will win</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="finished" role="tabpanel"
                                                aria-labelledby="finished-tab">
                                                <div class="single-area">
                                                    <div class="head-area d-flex align-items-center">
                                                        <span class="mdr cmn-btn">Pick Winner</span>
                                                        <p>Mar 23, 2022,3:45PM EDT</p>
                                                    </div>
                                                    <div class="main-content">
                                                        <div class="team-single">
                                                            <h4>Raufoss</h4>
                                                            <span class="mdr">Home</span>
                                                            <div class="img-area">
                                                                <img src="assets/images/team-logo-5.png" alt="img"/>
                                                            </div>
                                                        </div>
                                                        <div class="mid-area text-center">
                                                            <div class="countdown d-flex align-items-center justify-content-center">
                                                                <h4>
                                                                    <span class="hours">00</span><span
                                                                        class="seperator">:</span>
                                                                </h4>
                                                                <h4>
                                                                    <span class="minutes">00</span><span
                                                                        class="seperator">:</span>
                                                                </h4>
                                                                <h4>
                                                                    <span class="seconds">00</span>
                                                                </h4>
                                                            </div>
                                                            <h6>Division (Norway)</h6>
                                                        </div>
                                                        <div class="team-single">
                                                            <h4>Åsane</h4>
                                                            <span class="mdr">Away</span>
                                                            <div class="img-area">
                                                                <img src="assets/images/team-logo-6.png" alt="img"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bottom-item">
                                                        <button type="button" class="cmn-btn" data-bs-toggle="modal"
                                                            data-bs-target="#betpop-up">Eagle will win</button>
                                                        <button type="button" class="cmn-btn" data-bs-toggle="modal"
                                                            data-bs-target="#betpop-up">Draw</button>
                                                        <button type="button" class="cmn-btn" data-bs-toggle="modal"
                                                            data-bs-target="#betpop-up">Paeek will win</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                               
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
                                            <div class="deposit-with-tab">
                                                <div class="row">
                                                    <div class="col-xxl-4 col-xl-5">
                                                        <div class="balance-area">
                                                            <div
                                                                class="head-area d-flex align-items-center justify-content-between">
                                                                <p class="mdr">Current Balance</p>
                                                                <select>
                                                                    <option value="1">SOL</option>
                                                                </select>
                                                            </div>
                                                            <h6>0.00 <span>SOL</span></h6>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxl-8 col-xl-7">
                                                        <div class="right-area">
                                                            <h5>Deposit</h5>
                                                            <p class="para-area">You may switch to other currencies on the left side
                                                                option.</p>
                                                            <div class="address-bar">
                                                                <p>SOL Deposit Address</p>
                                                                <div class="input-area">
                                                                    <input type="text" value="bc1quxahsy9s7h99q5q4xykmmmh" />
                                                                    <img src="assets/images/icon/copy-icon.png" alt="icon" />
                                                                </div>
                                                                <div class="qr-copy d-flex justify-content-end align-items-center">
                                                                    <p class="mdr">Copy Address</p>
                                                                </div>
                                                            </div>
                                                            <div class="bottom-area">
                                                                <div class="single-item">
                                                                    <h6>Notice :</h6>
                                                                    <p>Your deposit will be credited after 4 confirmations on the SOL
                                                                        blockchain network.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab">
                                            <div class="deposit-with-tab withdraw">
                                                <div class="row">
                                                    <div class="col-xxl-4 col-xl-5">
                                                        <div class="balance-area">
                                                            <div
                                                                class="head-area d-flex align-items-center justify-content-between">
                                                                <p class="mdr">Current Balance</p>
                                                                <select>
                                                                    <option value="1">SOL</option>
                                                                </select>
                                                            </div>
                                                            <h6>0.00 <span>SOL</span></h6>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxl-8 col-xl-7">
                                                        <div class="right-area">
                                                            <h5>Withdraw</h5>
                                                            <p class="para-area">You may switch to other currencies on the left side
                                                                option.</p>
                                                            <div class="address-bar">
                                                                <form action="#">
                                                                    <div class="input-single">
                                                                        <label>Amount</label>
                                                                        <div class="input-area">
                                                                            <input type="text" placeholder="Enter Amount" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="input-single">
                                                                        <label>Payment Address</label>
                                                                        <div class="input-area">
                                                                            <input type="text" placeholder="Enter Payment Address" />
                                                                        </div>
                                                                    </div>
                                                                    <span class="btn-border">
                                                                        <a href="/#" class="cmn-btn">Get Start
                                                                            Now</a>
                                                                    </span>
                                                                </form>
                                                            </div>
                                                            <div class="bottom-area">
                                                                <div class="single-item">
                                                                    <h6>Transaction fee:</h6>
                                                                    <p>Your withdrawal will also have 0.0006 SOL subtracted to cover
                                                                        the transaction fee.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane fade" id="affiliate" role="tabpanel" aria-labelledby="affiliate-tab">
                                            <div class="affiliate-tab">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h5>Affiliate Program</h5>
                                                        <p>Get a lifetime reward up to 15% for inviting new people!</p>
                                                        <div class="referral-bar">
                                                            <p>My Referral Link</p>
                                                            <div class="input-area">
                                                                <input type="text" value="bc1quxahsy9s7h99q5q4xykmmmh" />
                                                                <img src="assets/images/icon/copy-icon.png" alt="icon" />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-xl-6">
                                                                <div class="single-info">
                                                                    <img src="assets/images/icon/earned-referral-icon-1.png"
                                                                        alt="icon" />
                                                                    <div class="text-area">
                                                                        <h4>$0.00</h4>
                                                                        <p class="mdr">Earned Referral</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-6">
                                                                <div class="single-info">
                                                                    <img src="assets/images/icon/earned-referral-icon-2.png"
                                                                        alt="icon" />
                                                                    <div class="text-area">
                                                                        <h4>$0.00</h4>
                                                                        <p class="mdr">Last Month</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="table-area fjalla-one">
                                                            <div
                                                                class="head-area d-flex justify-content-between align-items-center">
                                                                <h5>Referral History</h5>
                                                                <div class="input-area d-flex align-items-center">
                                                                    <input type="text" id="dateSelect"
                                                                        placeholder="015/08/2020 - 025/01/2021" />
                                                                    <img src="assets/images/icon/date-icon.png" class="max-un"
                                                                        alt="icon" />
                                                                </div>
                                                            </div>
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Date</th>
                                                                            <th scope="col">Level</th>
                                                                            <th scope="col">Username</th>
                                                                            <th scope="col">Earned</th>
                                                                            <th scope="col">E-mail</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">16 APR</th>
                                                                            <td>Level01</td>
                                                                            <td>Maxine24</td>
                                                                            <td>0.00 SOL</td>
                                                                            <td>Maxine24@gmail.com</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">16 APR</th>
                                                                            <td>Level01</td>
                                                                            <td>Maxine24</td>
                                                                            <td>0.00 SOL</td>
                                                                            <td>Maxine24@gmail.com</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">16 APR</th>
                                                                            <td>Level01</td>
                                                                            <td>Maxine24</td>
                                                                            <td>0.00 SOL</td>
                                                                            <td>Maxine24@gmail.com</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">16 APR</th>
                                                                            <td>Level01</td>
                                                                            <td>Maxine24</td>
                                                                            <td>0.00 SOL</td>
                                                                            <td>Maxine24@gmail.com</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="transactions" role="tabpanel"
                                            aria-labelledby="transactions-tab">
                                            <div class="transactions-tab">
                                                <div class="head-area">
                                                    <form action="#">
                                                        <div class="single-input">
                                                            <label>Month</label>
                                                            <select>
                                                                <option value="1">2021/01</option>
                                                                <option value="2">2021/02</option>
                                                                <option value="3">2021/03</option>
                                                                <option value="4">2021/04</option>
                                                            </select>
                                                        </div>
                                                        <div class="single-input">
                                                            <label>Type</label>
                                                            <select>
                                                                <option value="1">Type 1</option>
                                                                <option value="2">Type 2</option>
                                                                <option value="3">Type 3</option>
                                                                <option value="4">Type 4</option>
                                                            </select>
                                                        </div>
                                                        <div class="single-input">
                                                            <label>Currency</label>
                                                            <select>
                                                                <option value="1">Currency 1</option>
                                                                <option value="2">Currency 2</option>
                                                                <option value="3">Currency 3</option>
                                                                <option value="4">Currency 4</option>
                                                            </select>
                                                        </div>
                                                        <div class="text-end">
                                                            <button>Filter</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="table-responsive fjalla-one">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Date/Time</th>
                                                                <th scope="col">Type</th>
                                                                <th scope="col">Currency</th>
                                                                <th scope="col">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">2021-01-07 16:33:53</th>
                                                                <td>Deposit</td>
                                                                <td>SOL</td>
                                                                <td>
                                                                    <img src="assets/images/icon/sol-btc.png"
                                                                        alt="icon" />
                                                                    0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2021-01-07 16:33:53</th>
                                                                <td>Withdrawal</td>
                                                                <td>SOL</td>
                                                                <td>
                                                                    <img src="assets/images/icon/sol-btc.png"
                                                                        alt="icon" />
                                                                    0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2021-01-07 16:33:53</th>
                                                                <td>Referral</td>
                                                                <td>SOL</td>
                                                                <td>
                                                                    <img src="assets/images/icon/sol-btc.png"
                                                                        alt="icon" />
                                                                    0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2021-01-07 16:33:53</th>
                                                                <td>Withdrawal</td>
                                                                <td>SOL</td>
                                                                <td>
                                                                    <img src="assets/images/icon/sol-btc.png"
                                                                        alt="icon" />
                                                                    0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2021-01-07 16:33:53</th>
                                                                <td>Deposit</td>
                                                                <td>SOL</td>
                                                                <td>
                                                                    <img src="assets/images/icon/sol-btc.png"
                                                                        alt="icon" />
                                                                    0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2021-01-07 16:33:53</th>
                                                                <td>Referral</td>
                                                                <td>SOL</td>
                                                                <td>
                                                                    <img src="assets/images/icon/sol-btc.png"
                                                                        alt="icon" />
                                                                    0.00
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                                            <div class="setting-tab">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single-area">
                                                            <h5>Settings</h5>
                                                        </div>
                                                        <div class="single-area">
                                                            <div class="file-upload">
                                                                <div class="img-area">
                                                                    <img src="assets/images/demo-profile.png" alt="icon" />
                                                                </div>
                                                                <div class="right-area">
                                                                    <label class="file">
                                                                        <input type="file" />
                                                                        <span class="file-custom"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="single-area">
                                                            <div class="icon-area">
                                                                <img src="assets/images/icon/message-icon.png" alt="icon" />
                                                            </div>
                                                            <p class="mdr">{user.email}</p>
                                                            <a href="#/" class="mdr fjalla-one">Unverified
                                                                Account</a>
                                                        </div>
                                                        <div class="single-area">
                                                            <div class="icon-area">
                                                                <img src="assets/images/icon/security-icon.png" alt="icon" />
                                                            </div>
                                                            <a href="#/" class="cmn-btn fjalla-one">Change Password</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="google-authentication mt-30" id="active">
                                                <h4>Enable Google Authentication</h4>
                                                <div class="d-flex">
                                                    <ul class="nav" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="cmn-btn active" id="download-app-tab"
                                                                data-bs-toggle="tab" data-bs-target="#download-app" type="button"
                                                                role="tab" aria-controls="download-app"
                                                                aria-selected="true">download app</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="cmn-btn" id="scan-qr-code-tab" data-bs-toggle="tab"
                                                                data-bs-target="#scan-qr-code" type="button" role="tab"
                                                                aria-controls="scan-qr-code" aria-selected="false">scan qr
                                                                code</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="cmn-btn" id="backup-key-tab" data-bs-toggle="tab"
                                                                data-bs-target="#backup-key" type="button" role="tab"
                                                                aria-controls="backup-key" aria-selected="false">backup key</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="cmn-btn" id="enable-authentication-tab"
                                                                data-bs-toggle="tab" data-bs-target="#enable-authentication"
                                                                type="button" role="tab" aria-controls="enable-authentication"
                                                                aria-selected="false">Enable Google Authentication</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tab-content">
                                                    <div class="tab-pane fade show active" id="download-app" role="tabpanel"
                                                        aria-labelledby="download-app-tab">
                                                        <div class="auth-container">
                                                            <p>Step 1: Download and install the Google Authentication app into your
                                                                mobile phone.</p>
                                                            <div class="brand d-flex align-items-center">
                                                                <a href="/#"><img src="assets/images/app-store.png" alt="images" /></a>
                                                                <a href="/#"><img src="assets/images/google-play.png"
                                                                    alt="images" /></a>
                                                            </div>
                                                            <div class="footer-area">
                                                                <h6>I have installed the app</h6>
                                                                <a href="/#" class="cmn-btn">Next Step</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="scan-qr-code" role="tabpanel"
                                                        aria-labelledby="scan-qr-code-tab">
                                                        <div class="auth-container">
                                                            <p>Step 2: Scan this QR code in the Google Authentication app.</p>
                                                            <div class="qr-code brand">
                                                                <img src="assets/images/qr-code.png" alt="images" />
                                                            </div>
                                                            <div class="number-area">
                                                                <p>If you are unable to scan the QR code, please enter this code
                                                                    manually into the app.</p>
                                                                <h6 class="number">GI4V6OJYGI3TGMBW</h6>
                                                            </div>
                                                            <div class="footer-area">
                                                                <h6>I have installed the app</h6>
                                                                <a href="/#" class="cmn-btn">Next Step</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="backup-key" role="tabpanel"
                                                        aria-labelledby="backup-key-tab">
                                                        <div class="auth-container">
                                                            <p>Step 3: Please save this Key on paper. This Key will allow you to
                                                                recover your Google Authentication in case of phone loss.</p>
                                                            <div class="number-area">
                                                                <p>Resetting your Google Authentication requires opening a support
                                                                    ticket and takes at least 7 days to process.</p>
                                                                <h6 class="number">GI4V6OJYGI3TGMBW</h6>
                                                            </div>
                                                            <div class="footer-area">
                                                                <h6>I have already written down the 16-Digit Key</h6>
                                                                <a href="/#" class="cmn-btn">Next Step</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="enable-authentication" role="tabpanel"
                                                        aria-labelledby="enable-authentication-tab">
                                                        <div class="auth-container">
                                                            <p>Step 4: Enter your site password and your google authentication code
                                                                from the google authentication app</p>
                                                            <form action="#">
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <div class="single-input">
                                                                            <label for="loginpass">Login Password</label>
                                                                            <input type="text" id="loginpass"
                                                                                placeholder="Enter Login Password" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12">
                                                                        <div class="single-input">
                                                                            <label for="authcode">Google Authentication Code</label>
                                                                            <input type="text" id="authcode"
                                                                                placeholder="Enter Google Authentication Code" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-4">
                                                                        <span class="btn-border w-100">
                                                                            <button class="cmn-btn w-100">Submit</button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </form>
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
                </section>
            </main>
        )
    };

const mapStateToProps = ({session}) => ({
    user: session.user,
    email: session.email,
    _id: session._id

});

export default connect(mapStateToProps, {logoutUser})(Dashboard);