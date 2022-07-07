import React from "react";


class Sports extends React.Component {
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
                                        <h1>Sports</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bet-this-game all-soccer-bets bets-2">
                    <div class="overlay">
                        <div class="container">
                            <div class="filter-section mb-60">
                                <div class="section-text text-center">
                                    <h3>Fixtures</h3>
                                </div>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-6">
                                            <div class="input-area">
                                                <img src="assets/images/icon/search-icon.png" alt="icon" />
                                                <input type="text" placeholder="Search by League name" />
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-6">
                                            <div class="single-input">
                                                <select>
                                                    <option>Search by Team Name</option>
                                                    <option value="2">Arsenal</option>
                                                    <option value="3">Crystal Palace</option>
                                                    <option value="4">Fulham</option>
                                                    <option value="5">Liverpool</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-6">
                                            <div class="single-input">
                                                <select>
                                                    <option>Select League</option>
                                                    <option value="1">Premier League</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-6">
                                            <div class="input-area">
                                                <img src="assets/images/icon/date-icon.png" alt="icon" />
                                                <input type="text" id="dateSelect" placeholder="Select Date" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="row cus-mar">
                                <div class="col-xxl-3 col-lg-4">
                                    <div class="sidebar position-sticky top-0">
                                        <div class="single-sidebar">
                                            <h5 class="title-area m-none">Latest Teams</h5>
                                            <div class="single-item">
                                                <label class="checkbox-single d-flex align-items-center">
                                                    <span class="left-area">
                                                        <span class="checkbox-area d-flex">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </span>
                                                        <span class="item-title d-flex align-items-center">
                                                            <img src="assets/images/icon/arsenal-icon.png" alt="icon" />
                                                            <span>Arsenal</span>
                                                        </span>
                                                    </span>
                                                </label>
                                                <label class="checkbox-single d-flex align-items-center">
                                                    <span class="left-area">
                                                        <span class="checkbox-area d-flex">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </span>
                                                        <span class="item-title d-flex align-items-center">
                                                            <img src="assets/images/icon/crystal-palace-icon.png" alt="icon" />
                                                            <span>Crystal Palace</span>
                                                        </span>
                                                    </span>
                                                </label>
                                                <label class="checkbox-single d-flex align-items-center">
                                                    <span class="left-area">
                                                        <span class="checkbox-area d-flex">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </span>
                                                        <span class="item-title d-flex align-items-center">
                                                            <img src="assets/images/icon/fulham-icon.png" alt="icon" />
                                                            <span>Fulham</span>
                                                        </span>
                                                    </span>
                                                </label>
                                                <label class="checkbox-single d-flex align-items-center">
                                                    <span class="left-area">
                                                        <span class="checkbox-area d-flex">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </span>
                                                        <span class="item-title d-flex align-items-center">
                                                            <img src="assets/images/icon/liverpool-icon.png" alt="icon" />
                                                            <span>Liverpool</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="single-sidebar">
                                            <h5 class="title-area">Latest Games</h5>
                                            <div class="single-item">
                                                <label class="checkbox-single d-flex align-items-center">
                                                    <span class="left-area">
                                                        <span class="checkbox-area d-flex">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </span>
                                                        <span class="item-title d-flex align-items-center">
                                                            <span>Crystal Palace <span class="vs">VS</span> Arsenal</span>
                                                        </span>
                                                    </span>
                                                </label>
                                                <label class="checkbox-single d-flex align-items-center">
                                                    <span class="left-area">
                                                        <span class="checkbox-area d-flex">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </span>
                                                        <span class="item-title d-flex align-items-center">
                                                            <span>Fulham <span class="vs">VS</span> Liverpool</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="single-sidebar">
                                            <h5 class="title-area">Sports</h5>
                                            <div class="single-item">
                                                <label class="checkbox-single d-flex align-items-center">
                                                    <span class="left-area">
                                                        <span class="checkbox-area d-flex">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </span>
                                                        <span class="item-title d-flex align-items-center">
                                                            <img src="assets/images/icon/sports-logo-3.png" alt="icon" />
                                                            <span>Soccer</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-9 col-lg-8">
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
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
export default Sports