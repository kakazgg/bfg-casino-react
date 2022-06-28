import React from "react";

class Sports extends React.Component{
    render(){
        return(
            <main>
            <section class="banner-section inner-banner soccer-bets">
            <div class="overlay">
                <div class="shape-area">
                    <img src="assets/images/winner-cup.png" class="obj-1" alt="img"/>
                    <img src="assets/images/coin-5.png" class="obj-2" alt="img"/>
                    <img src="assets/images/coin-3.png" class="obj-3" alt="img"/>
                    <img src="assets/images/coin-6.png" class="obj-4" alt="img"/>
                    <img src="assets/images/coin-9.png" class="obj-5" alt="img"/>
                    <img src="assets/images/coin-8.png" class="obj-6" alt="img"/>
                    <img src="assets/images/coin-7.png" class="obj-7" alt="img"/>
                </div>
                <div class="banner-content">
                    <div class="container">
                        <div class="content-shape">
                            <img src="assets/images/coin-1.png" class="obj-8" alt="img"/>
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
                                        <img src="assets/images/icon/search-icon.png" alt="icon"/>
                                        <input type="text" placeholder="Search by League name"/>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6">
                                    <div class="single-input">
                                        <select>
                                            <option>Search by team name</option>
                                            <option value="2">Team 1</option>
                                            <option value="3">Team 2</option>
                                            <option value="4">Team 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6">
                                    <div class="single-input">
                                        <select>
                                            <option>Select League</option>
                                            <option value="1">League 1</option>
                                            <option value="2">League 2</option>
                                            <option value="3">League 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6">
                                    <div class="input-area">
                                        <img src="assets/images/icon/date-icon.png" alt="icon"/>
                                        <input type="text" id="dateSelect" placeholder="Select Date"/>
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
                                                    <input type="checkbox" checked="checked"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/team-logo-1.png" alt="icon"/>
                                                    <span>Busan Ipark</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/team-logo-2.png" alt="icon"/>
                                                    <span>Anyang</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/team-logo-3.png" alt="icon"/>
                                                    <span>Raufoss</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/team-logo-4.png" alt="icon"/>
                                                    <span>Åsane</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/team-logo-5.png" alt="icon"/>
                                                    <span>Apollon</span>
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
                                                    <input type="checkbox" checked="checked"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <span>Appollon <span class="vs">VS</span> Ethnikeos</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <span>Strommen <span class="vs">VS</span> Aalesund</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <span>Grorud <span class="vs">VS</span> Jerv</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <span>Fredrikstad <span class="vs">VS</span> stjordals</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <span>KFUM <span class="vs">VS</span> Sandnes UIf</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <span>Djurgarden <span class="vs">VS</span> Mjallby</span>
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
                                                    <input type="checkbox" checked="checked"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-1.png" alt="icon"/>
                                                    <span>Busan Ipark</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-2.png" alt="icon"/>
                                                    <span>NBA</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-3.png" alt="icon"/>
                                                    <span>Soccer</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-4.png" alt="icon"/>
                                                    <span>American Football</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-5.png" alt="icon"/>
                                                    <span>Horse Racing</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-6.png" alt="icon"/>
                                                    <span>Rugby Union</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-7.png" alt="icon"/>
                                                    <span>Ice Hockey</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-8.png" alt="icon"/>
                                                    <span>Boxing</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-9.png" alt="icon"/>
                                                    <span>Cricket</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-10.png" alt="icon"/>
                                                    <span>Baseball</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label class="checkbox-single d-flex align-items-center">
                                            <span class="left-area">
                                                <span class="checkbox-area d-flex">
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </span>
                                                <span class="item-title d-flex align-items-center">
                                                    <img src="assets/images/icon/sports-logo-11.png" alt="icon"/>
                                                    <span>Esports</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-9 col-lg-8">
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
                                    <button type="button" class="cmn-btn firstTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" class="cmn-btn draw" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" class="cmn-btn lastTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
                                </div>
                            </div>
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
                                    <button type="button" class="cmn-btn firstTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" class="cmn-btn draw" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" class="cmn-btn lastTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
                                </div>
                            </div>
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
                                    <button type="button" class="cmn-btn firstTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" class="cmn-btn draw" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" class="cmn-btn lastTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
                                </div>
                            </div>
                            <div class="single-area">
                                <div class="head-area d-flex align-items-center">
                                    <span class="mdr cmn-btn">Pick Winner</span>
                                    <p>Mar 23, 2022,3:45PM EDT</p>
                                </div>
                                <div class="main-content">
                                    <div class="team-single">
                                        <h4>Lida</h4>
                                        <span class="mdr">Home</span>
                                        <div class="img-area">
                                            <img src="assets/images/team-logo-6.png" alt="img"/>
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
                                            <img src="assets/images/team-logo-7.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item">
                                    <button type="button" class="cmn-btn firstTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" class="cmn-btn draw" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" class="cmn-btn lastTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
                                </div>
                            </div>
                            <div class="single-area">
                                <div class="head-area d-flex align-items-center">
                                    <span class="mdr cmn-btn">Pick Winner</span>
                                    <p>Mar 23, 2022,3:45PM EDT</p>
                                </div>
                                <div class="main-content">
                                    <div class="team-single">
                                        <h4>Electro</h4>
                                        <span class="mdr">Home</span>
                                        <div class="img-area">
                                            <img src="assets/images/team-logo-8.png" alt="img"/>
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
                                        <h4>Dainava</h4>
                                        <span class="mdr">Away</span>
                                        <div class="img-area">
                                            <img src="assets/images/team-logo-9.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item">
                                    <button type="button" class="cmn-btn firstTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" class="cmn-btn draw" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" class="cmn-btn lastTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
                                </div>
                            </div>
                            <div class="single-area">
                                <div class="head-area d-flex align-items-center">
                                    <span class="mdr cmn-btn">Pick Winner</span>
                                    <p>Mar 23, 2022,3:45PM EDT</p>
                                </div>
                                <div class="main-content">
                                    <div class="team-single">
                                        <h4>Eagle</h4>
                                        <span class="mdr">Home</span>
                                        <div class="img-area">
                                            <img src="assets/images/team-logo-10.png" alt="img"/>
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
                                        <h4>Paeek</h4>
                                        <span class="mdr">Away</span>
                                        <div class="img-area">
                                            <img src="assets/images/team-logo-11.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item">
                                    <button type="button" class="cmn-btn firstTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" class="cmn-btn draw" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" class="cmn-btn lastTeam" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="betpopmodal">
            <div class="modal fade" id="betpop-up" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xxl-8 col-xl-9 col-lg-11">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="top-item">
                                            <a href="/#" class="cmn-btn firstTeam">Eagle will win</a>
                                            <a href="/#" class="cmn-btn active draw">Draw</a>
                                            <a href="/#" class="cmn-btn lastTeam">Paeek will win</a>
                                        </div>
                                        <div class="select-odds d-flex align-items-center">
                                            <h6>Select Odds</h6>
                                            <div class="d-flex in-dec-val">
                                                <input type="text" value="1.5" class="InDeVal2"/>
                                                <div class="btn-area">
                                                    <button class="plus2">
                                                        <img src="assets/images/icon/up-arrow.png" alt="icon"/>
                                                    </button>
                                                    <button class="minus2">
                                                        <img src="assets/images/icon/down-arrow.png" alt="icon"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mid-area">
                                            <div class="single-area">
                                                <div class="item-title d-flex align-items-center justify-content-between">
                                                    <span>Bet Value :</span>
                                                    <select>
                                                        <option value="sol">SOL</option>
                                                    </select>
                                                </div>
                                                <div class="d-flex in-dec-val">
                                                    <input type="text" value="0.1" class="InDeVal1"/>
                                                    <div class="btn-area">
                                                        <button class="plus">
                                                            <img src="assets/images/icon/up-arrow.png" alt="icon"/>
                                                        </button>
                                                        <button class="minus">
                                                            <img src="assets/images/icon/down-arrow.png" alt="icon"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-area quick-amounts">
                                                <div class="item-title d-flex align-items-center">
                                                    <p>Quick Amounts</p>
                                                </div>
                                                <div class="input-item">
                                                    <button class="quickIn">0.005</button>
                                                    <button class="quickIn">0.025</button>
                                                    <button class="quickIn">0.1</button>
                                                    <button class="quickIn">0.5</button>
                                                    <button class="quickIn">2.5</button>
                                                </div>
                                            </div>
                                            <div class="single-area smart-value">
                                                <div class="item-title d-flex align-items-center">
                                                    <p class="mdr">Smart Contact Value</p>
                                                </div>
                                                <div class="contact-val d-flex align-items-center">
                                                    <h4>0.1103</h4>
                                                    <h5>SOL</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-area">
                                            <div class="fee-area">
                                                <p>Winner will get: <span class="amount">0.179</span> SOL</p>
                                                <p class="fee">Escrow Fee: <span>5%</span></p>
                                            </div>
                                            <div class="btn-area">
                                                <button>Make (0.1 SOL) Bet</button>
                                            </div>
                                            <div class="bottom-right">
                                                <p>Game Closes:</p>
                                                <p class="date-area">Mar <span>21,2021-1:00</span> Am</p>
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
        </main>
        )
    }
}
export default Sports