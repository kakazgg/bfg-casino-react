import React from "react";

class DashboardNoLog extends React.Component {
    render() {
        return (
            <section class="error-section pt-120 pb-120 nolog-overlay">
                <div class="overlay pt-120 pb-120">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-lg-6">
                                <div class="img-area">
                                    <img src="assets/images/error-illus.png" alt="img" />
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="section-text">
                                    <h2 class="title">Welcome to the Dashboard!</h2>
                                    <p>Please Log in to see more information.</p>
                                </div>
                                <div class="btn-border">
                                <button type="button" className="cmn-btn reg" data-bs-toggle="modal" data-bs-target="#loginMod">
                                    Login
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DashboardNoLog