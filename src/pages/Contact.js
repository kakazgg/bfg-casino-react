import React from "react";

class Contact extends React.Component {
    render () {
        return (
            <main>
                <section class="banner-section inner-banner contact">
        <div class="overlay">
            <div class="shape-area">
                <img src="assets/images/contact-illus.png" class="contact-illu" alt="img"/>
            </div>
            <div class="banner-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 col-md-10">
                            <div class="main-content">
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contact-section">
        <div class="overlay">
            <div class="container bg-area">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-header text-center">
                            <h2 class="title">Get in touch with us</h2>
                            <p>Fill up the form and our team will get back to you within 24 hours</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="form-content">
                            <form action="#">
                                <div class="row justify-content-center">
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <label for="fname">Name</label>
                                            <input type="text" id="fname" placeholder="What's your name?"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <label for="email">Your email address</label>
                                            <input type="text" id="email" placeholder="What's your Email?"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <label for="phone">Phone</label>
                                            <input type="text" id="phone" placeholder="(123) 480 - 3540"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <label for="subject">Subject</label>
                                            <input type="text" id="subject" placeholder="Enter Your Subject?"/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="single-input">
                                            <label for="message">Message</label>
                                            <textarea id="message" placeholder="I would like to get in touch with you..." cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6 col-10">
                                        <div class="btn-border w-100 mt-40">
                                            <button class="cmn-btn w-100">Send Message</button>
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
    <section class="faqs-section faqs-page">
        <div class="overlay pt-120">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-7">
                        <div class="section-header text-center">
                            <h5 class="sub-title">Frequently Asked Questions</h5>
                            <h2 class="title">If you have questions we have answer</h2>
                            <p>Answers for our most popular questions about sportsbetting, crypto, and The B.F.G's</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <ul class="nav" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="cmn-btn active" id="general-tab" data-bs-toggle="tab"
                                data-bs-target="#general" type="button" role="tab" aria-controls="general"
                                aria-selected="true">general</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="cmn-btn" id="affiliate-tab" data-bs-toggle="tab" data-bs-target="#affiliate"
                                type="button" role="tab" aria-controls="affiliate"
                                aria-selected="false">affiliate</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="cmn-btn" id="sports-tab" data-bs-toggle="tab" data-bs-target="#sports"
                                type="button" role="tab" aria-controls="sports" aria-selected="false">sports</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="cmn-btn" id="tournament-tab" data-bs-toggle="tab"
                                data-bs-target="#tournament" type="button" role="tab" aria-controls="tournament"
                                aria-selected="false">tournament</button>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                        <div class="row d-flex justify-content-center">
                            <div class="col-xl-10">
                                <div class="faq-box">
                                    <div class="accordion" id="accordionFaqsGeneral">
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralOne">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralOne"
                                                    aria-expanded="false" aria-controls="collapseGeneralOne">
                                                    I want to play at The B.F.G's, What do i need to do?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralOne" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralOne"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralTwo"
                                                    aria-expanded="false" aria-controls="collapseGeneralTwo">
                                                    How fast do I get paid once I win a bet?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralTwo" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralTwo"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralThree"
                                                    aria-expanded="false" aria-controls="collapseGeneralThree">
                                                    What are the commissions I have to pay?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralThree" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralThree"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralFour">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralFour"
                                                    aria-expanded="false" aria-controls="collapseGeneralFour">
                                                    Can I set the odds for any bet I want?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralFour" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralFour"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralFive">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralFive"
                                                    aria-expanded="false" aria-controls="collapseGeneralFive">
                                                    What kind of Escrow do you provide?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralFive" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralFive"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralsix">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralsix"
                                                    aria-expanded="false" aria-controls="collapseGeneralsix">
                                                    What makes us unique?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralsix" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralsix"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralsaven">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralsaven"
                                                    aria-expanded="false" aria-controls="collapseGeneralsaven">
                                                    Is the Escrow payment secured?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralsaven" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralsaven"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneraleight">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneraleight"
                                                    aria-expanded="false" aria-controls="collapseGeneraleight">
                                                    How do I deposit/transfer money to my transactions?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneraleight" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneraleight"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingGeneralNine">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseGeneralNight"
                                                    aria-expanded="false" aria-controls="collapseGeneralNight">
                                                    How do I withdraw money from my The B.F.G's account?
                                                </button>
                                            </h5>
                                            <div id="collapseGeneralNight" class="accordion-collapse collapse"
                                                aria-labelledby="headingGeneralNine"
                                                data-bs-parent="#accordionFaqsGeneral">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="affiliate" role="tabpanel" aria-labelledby="affiliate-tab">
                        <div class="row d-flex justify-content-center">
                            <div class="col-xl-10">
                                <div class="faq-box">
                                    <div class="accordion" id="accordionFaqsAffiliate">
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliateOne">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliateOne"
                                                    aria-expanded="false" aria-controls="collapseAffiliateOne">
                                                    I want to play at The B.F.G's, What do i need to do?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliateOne" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliateOne"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliateTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliateTwo"
                                                    aria-expanded="false" aria-controls="collapseAffiliateTwo">
                                                    How fast do I get paid once I win a bet?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliateTwo" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliateTwo"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliateThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliateThree"
                                                    aria-expanded="false" aria-controls="collapseAffiliateThree">
                                                    What are the commissions I have to pay?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliateThree" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliateThree"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliateFour">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliateFour"
                                                    aria-expanded="false" aria-controls="collapseAffiliateFour">
                                                    Can I set the odds for any bet I want?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliateFour" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliateFour"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliateFive">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliateFive"
                                                    aria-expanded="false" aria-controls="collapseAffiliateFive">
                                                    What kind of Escrow do you provide?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliateFive" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliateFive"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliatesix">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliatesix"
                                                    aria-expanded="false" aria-controls="collapseAffiliatesix">
                                                    What makes us unique?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliatesix" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliatesix"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliatesaven">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliatesaven"
                                                    aria-expanded="false" aria-controls="collapseAffiliatesaven">
                                                    Is the Escrow payment secured?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliatesaven" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliatesaven"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliateeight">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliateeight"
                                                    aria-expanded="false" aria-controls="collapseAffiliateeight">
                                                    How do I deposit/transfer money to my transactions?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliateeight" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliateeight"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingAffiliateNine">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAffiliateNight"
                                                    aria-expanded="false" aria-controls="collapseAffiliateNight">
                                                    How do I withdraw money from my The B.F.G's Bets account?
                                                </button>
                                            </h5>
                                            <div id="collapseAffiliateNight" class="accordion-collapse collapse"
                                                aria-labelledby="headingAffiliateNine"
                                                data-bs-parent="#accordionFaqsAffiliate">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="sports" role="tabpanel" aria-labelledby="sports-tab">
                        <div class="row d-flex justify-content-center">
                            <div class="col-xl-10">
                                <div class="faq-box">
                                    <div class="accordion" id="accordionFaqsSports">
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportsOne">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportsOne"
                                                    aria-expanded="false" aria-controls="collapseSportsOne">
                                                    I want to play at The B.F.G's, What do i need to do?
                                                </button>
                                            </h5>
                                            <div id="collapseSportsOne" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportsOne"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportsTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportsTwo"
                                                    aria-expanded="false" aria-controls="collapseSportsTwo">
                                                    How fast do I get paid once I win a bet?
                                                </button>
                                            </h5>
                                            <div id="collapseSportsTwo" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportsTwo"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportsThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportsThree"
                                                    aria-expanded="false" aria-controls="collapseSportsThree">
                                                    What are the commissions I have to pay?
                                                </button>
                                            </h5>
                                            <div id="collapseSportsThree" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportsThree"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportsFour">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportsFour"
                                                    aria-expanded="false" aria-controls="collapseSportsFour">
                                                    Can I set the odds for any bet I want?
                                                </button>
                                            </h5>
                                            <div id="collapseSportsFour" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportsFour"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportsFive">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportsFive"
                                                    aria-expanded="false" aria-controls="collapseSportsFive">
                                                    What kind of Escrow do you provide?
                                                </button>
                                            </h5>
                                            <div id="collapseSportsFive" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportsFive"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportssix">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportssix"
                                                    aria-expanded="false" aria-controls="collapseSportssix">
                                                    What makes us unique?
                                                </button>
                                            </h5>
                                            <div id="collapseSportssix" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportssix"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportssaven">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportssaven"
                                                    aria-expanded="false" aria-controls="collapseSportssaven">
                                                    Is the Escrow payment secured?
                                                </button>
                                            </h5>
                                            <div id="collapseSportssaven" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportssaven"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportseight">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportseight"
                                                    aria-expanded="false" aria-controls="collapseSportseight">
                                                    How do I deposit/transfer money to my transactions?
                                                </button>
                                            </h5>
                                            <div id="collapseSportseight" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportseight"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingSportsNine">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSportsNight"
                                                    aria-expanded="false" aria-controls="collapseSportsNight">
                                                    How do I withdraw money from my The B.F.G's Bets account?
                                                </button>
                                            </h5>
                                            <div id="collapseSportsNight" class="accordion-collapse collapse"
                                                aria-labelledby="headingSportsNine"
                                                data-bs-parent="#accordionFaqsSports">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tournament" role="tabpanel" aria-labelledby="tournament-tab">
                        <div class="row d-flex justify-content-center">
                            <div class="col-xl-10">
                                <div class="faq-box">
                                    <div class="accordion" id="accordionFaqsTournament">
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentOne">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentOne"
                                                    aria-expanded="false" aria-controls="collapseTournamentOne">
                                                    I want to play at The B.F.G's, What do i need to do?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentOne" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentOne"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentTwo"
                                                    aria-expanded="false" aria-controls="collapseTournamentTwo">
                                                    How fast do I get paid once I win a bet?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentTwo" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentTwo"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentThree"
                                                    aria-expanded="false" aria-controls="collapseTournamentThree">
                                                    What are the commissions I have to pay?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentThree" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentThree"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentFour">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentFour"
                                                    aria-expanded="false" aria-controls="collapseTournamentFour">
                                                    Can I set the odds for any bet I want?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentFour" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentFour"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentFive">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentFive"
                                                    aria-expanded="false" aria-controls="collapseTournamentFive">
                                                    What kind of Escrow do you provide?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentFive" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentFive"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentsix">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentsix"
                                                    aria-expanded="false" aria-controls="collapseTournamentsix">
                                                    What makes us unique?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentsix" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentsix"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentsaven">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentsaven"
                                                    aria-expanded="false" aria-controls="collapseTournamentsaven">
                                                    Is the Escrow payment secured?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentsaven" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentsaven"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamenteight">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamenteight"
                                                    aria-expanded="false" aria-controls="collapseTournamenteight">
                                                    How do I deposit/transfer money to my transactions?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamenteight" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamenteight"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
                                                        scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header" id="headingTournamentNine">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTournamentNight"
                                                    aria-expanded="false" aria-controls="collapseTournamentNight">
                                                    How do I withdraw money from my The B.F.G's Bets account?
                                                </button>
                                            </h5>
                                            <div id="collapseTournamentNight" class="accordion-collapse collapse"
                                                aria-labelledby="headingTournamentNine"
                                                data-bs-parent="#accordionFaqsTournament">
                                                <div class="accordion-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever
                                                        since the 1500s, when an unknown printer took a galley of type
                                                        and
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
            </div>
        </div>
    </section>
            </main>
        )
    }
}

export default Contact