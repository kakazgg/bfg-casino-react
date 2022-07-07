
const BetModal = () => {
    return (
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
                                                <div className="top-item fjalla-one">
                                                    <button className="cmn-btn firstTeam">Win</button>
                                                    <button className="cmn-btn active draw">Draw</button>
                                                    <button className="cmn-btn lastTeam">Win</button>
                                                </div>
                                                <div className="select-odds d-flex align-items-center">
                                                    <h6>Odds</h6>
                                                    <div className="d-flex in-dec-val">
                                                        <input type="text" value="1.5" className="InDeVal2" />
                                                        
                                                    </div>
                                                </div>
                                                <div className="mid-area">
                                                    <div className="single-area">
                                                        <div className="item-title d-flex align-items-center justify-content-between">
                                                            <span>Bet Value :</span>
                                                                <p>SOL</p>
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
                                                            <button className="quickIn">0.05</button>
                                                            <button className="quickIn">0.25</button>
                                                            <button className="quickIn">0.5</button>
                                                            <button className="quickIn">1</button>
                                                            <button className="quickIn">5</button>
                                                        </div>
                                                    </div>
                                                    <div className="single-area smart-value fjalla-one">
                                                        <div className="item-title d-flex align-items-center">
                                                            <p className="mdr">Bet Value</p>
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
    )
}

export default BetModal;