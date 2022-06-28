import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return(
    <footer className="footer-section">
        <div className="container pt-120">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="newsletter">
                        <div className="section-text text-center">
                            <h5 className="sub-title">Subscribe Us</h5>
                            <h3 className="title">For Newsletter</h3>
                            <p>Subscribe to our newsletter to receive all the latest news and updates</p>
                        </div>
                        <form action="#">
                            <div className="form-group d-flex align-items-center">
                                <input type="text" placeholder="Enter your email Address"/>
                                <button><img src="assets/images/icon/arrow-right-2.png" alt="icon"/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area pt-120">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="menu-item">
                            <a href="index.html" className="logo">
                                <span className="specialelite logothetext">The </span>
                                <span className="permanentmarker logoBFGtext">B.F.G's</span>
                            </a>
                            <ul className="footer-link">
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/Terms">Terms of Services</Link></li>
                                <li><Link to="/Privacy">Privacy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
}

export default Footer;