import React from 'react';
import CtaBgImg from '../../../public/assets/imgs/bg/cta-bg-01.png';
import Link from 'next/link';
const PortfolioCta = () => {
    return (
        <>
            <div id="homecontact" className="cta__area p-relative style-tow">
                <div className="cta__bg-thumb include-bg" style={{ backgroundImage: `url(${CtaBgImg.src})` }}></div>
                <div className="container">
                    <div className="cta__wrapper cta__item section-space">
                        <div className="row g-5 align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-5">
                                <div className="cta__content-wrap">
                                    <div className="cta__content">
                                        <div className="section__title-wrapper">
                                            <div className="section__title-wrapper">
                                                <span className={`section__subtitle bg-field`}>SUBSCRIBE</span>
                                                <h2 className="section__title mb-20">Get Started Now</h2>
                                                <p className="section__paragraph">Understanding the client,s condition and
                                                    situation in our best way. we support and appropriate all time</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-7">
                                <div className="cta__form">
                                    <form action="#">
                                        <div className="cta__input">
                                            <input type="text" placeholder="Enter email" />
                                            <div className="cta__btn-pos">
                                                <Link className="bd-btn is-btn-anim w-100" href="/contact">
                                                    <span className="bd-btn-inner">
                                                        <span className="bd-btn-normal">Submit Now</span>
                                                        <span className="bd-btn-hover">Submit Now</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioCta;