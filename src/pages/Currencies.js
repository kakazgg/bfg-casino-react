import React from "react";
import { Link, NavLink } from "react-router-dom";

class Currencies extends React.Component {
    render() {
        return (
            <main>
                <section class="banner-section inner-banner soccer-bets currency-bet">
                    <div class="overlay">
                        <div class="shape-area">
                            <img src="assets/images/winner-cup.png" class="obj-1" alt="img" />
                            <img src="assets/images/coin-5.png" class="obj-2" alt="img" />
                            <img src="assets/images/coin-3.png" class="obj-3" alt="img" />
                            <img src="assets/images/coin-6.png" class="obj-4" alt="img" />
                        </div>
                        <div class="banner-content">
                            <div class="container">
                                <div class="content-shape">
                                    <img src="assets/images/coin-1.png" class="obj-8" alt="img" />
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-10">
                                        <div class="main-content">
                                            <h1>Currency Bet</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="currency-bet-section">
                    <div class="overlay pb-120">
                        <div class="container">
                            <div class="filter-section mb-60">
                                <div class="section-text text-center">
                                    <h3>Bet on Future Currency Price</h3>
                                </div>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="input-area">
                                                <input type="text" placeholder="Filter Coin" />
                                                <button class="d-flex align-items-center"><img src="assets/images/icon/search-icon.png" alt="icon" />
                                                    <span class="text-area d-sm-block d-none">
                                                        Search
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="row cus-mar">
                                <div class="col-lg-12">
                                    <div class="table-responsive fjalla-one">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Coin</th>
                                                    <th scope="col">Bet</th>
                                                    <th scope="col">Reward</th>
                                                    <th scope="col">p</th>
                                                    <th scope="col">Counter Bets</th>
                                                    <th scope="col">Close date</th>
                                                    <th scope="col">Expiration date</th>
                                                    <th scope="col">Bet Now</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">01</th>
                                                    <td>
                                                        <img src="assets/images/icon/btc.png" alt="icon" />
                                                        BTC
                                                    </td>
                                                    <td>
                                                        <img src="assets/images/icon/sol-btc.png" alt="icon" />
                                                        0.05 SOL
                                                    </td>
                                                    <td>0.095 SOL</td>
                                                    <td>2</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{ width: '70%' }}
                                                                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70 %</div>
                                                        </div>
                                                    </td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td><Link to="/CurrencyBetDetails" className="cmn-btn" onClick={() => window.reload()}>Bet Now</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">02</th>
                                                    <td>
                                                        <img src="assets/images/icon/btc.png" alt="icon" />
                                                        BTC
                                                    </td>
                                                    <td>
                                                        <img src="assets/images/icon/sol-btc.png" alt="icon" />
                                                        0.05 SOL
                                                    </td>
                                                    <td>0.095 SOL</td>
                                                    <td>2</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{ width: '90%' }}
                                                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90 %</div>
                                                        </div>
                                                    </td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td><Link to="/CurrencyBetDetails" className="cmn-btn" onClick={() => window.reload()}>Bet Now</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">03</th>
                                                    <td>
                                                        <img src="assets/images/icon/btc.png" alt="icon" />
                                                        BTC
                                                    </td>
                                                    <td>
                                                        <img src="assets/images/icon/sol-btc.png" alt="icon" />
                                                        0.05 SOL
                                                    </td>
                                                    <td>0.095 SOL</td>
                                                    <td>2</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{ width: '100%' }}
                                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100 %</div>
                                                        </div>
                                                    </td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td><Link to="/CurrencyBetDetails" className="cmn-btn" onClick={() => window.reload()}>Bet Now</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">04</th>
                                                    <td>
                                                        <img src="assets/images/icon/btc.png" alt="icon" />
                                                        BTC
                                                    </td>
                                                    <td>
                                                        <img src="assets/images/icon/sol-btc.png" alt="icon" />
                                                        0.05 SOL
                                                    </td>
                                                    <td>0.095 SOL</td>
                                                    <td>2</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{ width: '60%' }}
                                                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60 %</div>
                                                        </div>
                                                    </td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td><Link to="/CurrencyBetDetails" className="cmn-btn" onClick={() => window.reload()}>Bet Now</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">05</th>
                                                    <td>
                                                        <img src="assets/images/icon/btc.png" alt="icon" />
                                                        BTC
                                                    </td>
                                                    <td>
                                                        <img src="assets/images/icon/sol-btc.png" alt="icon" />
                                                        0.05 SOL
                                                    </td>
                                                    <td>0.095 SOL</td>
                                                    <td>2</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{ width: '50%' }}
                                                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50 %</div>
                                                        </div>
                                                    </td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td><Link to="/CurrencyBetDetails" className="cmn-btn" onClick={() => window.reload()}>Bet Now</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">06</th>
                                                    <td>
                                                        <img src="assets/images/icon/btc.png" alt="icon" />
                                                        BTC
                                                    </td>
                                                    <td>
                                                        <img src="assets/images/icon/sol-btc.png" alt="icon" />
                                                        0.05 SOL
                                                    </td>
                                                    <td>0.095 SOL</td>
                                                    <td>2</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" style={{ width: '60%' }}
                                                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60 %</div>
                                                        </div>
                                                    </td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td>1 d 4 h 26 m 33 s</td>
                                                    <td><Link to="/CurrencyBetDetails" className="cmn-btn" onClick={() => window.reload()}>Bet Now</Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="create-future-currency">
                    <div class="overlay">
                        <div class="container">
                            <div class="main-content">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="section-text text-center">
                                            <h3>Create Future Currency Bet</h3>
                                            <p>All bets are between users - peer to peer.</p>
                                        </div>
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="single-input">
                                                        <label for="nickname">Your Name for this Bet</label>
                                                        <input type="text" id="nickname"
                                                            placeholder="Please insert your name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="invite-friends">
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <label class="checkbox-single d-flex align-items-center">
                                                                    <span class="left-area">
                                                                        <span class="checkbox-area d-flex">
                                                                            <input type="checkbox" checked="checked" />
                                                                            <span class="checkmark"></span>
                                                                        </span>
                                                                        <span class="item-title d-flex align-items-center">
                                                                            <span>Invite friends to your et</span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="single-input">
                                                                    <label for="invited-name">Invited Name</label>
                                                                    <input type="text" id="invited-name"
                                                                        placeholder="Name of the invited person" />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="single-input">
                                                                    <label for="invited-email">Invited Email</label>
                                                                    <input type="text" id="invited-email"
                                                                        placeholder="Email of the invited person" />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="single-input">
                                                                    <label for="message">Your message</label>
                                                                    <textarea id="message" cols="30" rows="10"
                                                                        placeholder="Your message to user"></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="single-btn">
                                                                    <button class="cmn-btn">
                                                                        <i class="fas fa-plus"></i>
                                                                        Add Another
                                                                    </button>
                                                                    <button class="cmn-btn clear">
                                                                        <i class="fas fa-trash-alt"></i>
                                                                        Clear
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="single-input">
                                                        <label for="bet-amount">Bet Amount</label>
                                                        <div class="input-items d-flex">
                                                            <input type="text" id="bet-amount" placeholder="For example: 0.1" />
                                                            <input type="text" disabled value="Available 1.00 SOL" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="single-input">
                                                        <label for="currency">Choose The Currency</label>
                                                        <input type="text" id="currency" placeholder="Select Currency" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="single-input d-grid">
                                                        <label for="price">Future Price</label>
                                                        <div class="input-select d-flex">
                                                            <select>
                                                                <option>Below</option>
                                                                <option value="2">Above</option>
                                                            </select>
                                                            <input type="text" id="price" placeholder="Future Price" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="single-input">
                                                        <label for="closing-date">Bet Closing Date/Time</label>
                                                        <input type="text" id="closing-date" placeholder="Choose Closing Date" />
                                                        <p class="mdr">(No player can join this bet after this date)</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="single-input">
                                                        <label for="finish-date">Bet Expiration Date/Time</label>
                                                        <input type="text" id="finish-date" placeholder="Choose Finish Date" />
                                                        <p class="mdr">(Date the winner is chosen, based on the currency price)</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <span class="btn-border">
                                                        <NavLink forceRefresh={true} to="/Currencies" className="cmn-btn" onClick={() => window.reload()}>Create Currency Bet</NavLink>
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="more-info">
                                                        <ul>
                                                            <li>Base market is Solana.</li>
                                                            <li>Future currency results are based on the Binance exchange feed.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="call-to-action">
                    <div class="overlay pt-120">
                        <div class="container">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-lg-5 order-lg-0 order-1">
                                    <div class="img-area d-rtl">
                                        <img src="assets/images/call-to-action-bg.png" alt="img" class="max-un" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="section-text">
                                        <h5 class="sub-title">Are you a degen?</h5>
                                        <h2 class="title">Your 1st Prediction is on us.</h2>
                                        <p>Don't wait another minute. Take action straight from our wallet and make a prediction!</p>
                                    </div>
                                    <span class="btn-border">
                                        <button type="button" class="cmn-btn reg" data-bs-toggle="modal" data-bs-target="#loginMod">
                                            Get Started Now
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Currencies