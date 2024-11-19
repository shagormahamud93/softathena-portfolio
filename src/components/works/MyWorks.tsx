import PortfolioTabFive from '@/elements/portfolio/Partial/PortFolioSeven/PortfolioTabFive';
import PortfolioTabFour from '@/elements/portfolio/Partial/PortFolioSeven/PortfolioTabFour';
import PortfolioTabOne from '@/elements/portfolio/Partial/PortFolioSeven/PortfolioTabOne';
import PortfolioTabThree from '@/elements/portfolio/Partial/PortFolioSeven/PortfolioTabThree';
import PortfolioTabTwo from '@/elements/portfolio/Partial/PortFolioSeven/PortfolioTabTwo';
import React from 'react';

const MyWorks = () => {
    return (
        <>
            <section className="bd__portfolio-area section-space">
                <div className="container">
                    <div className="row g-5 section__title-space align-items-end">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle bg-field">MY RECENT PORTFOLIO</span>
                                <h2 className="section__title">Our Recent Features Works</h2>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="bd__menu-tab">
                                <ul className="bd__menu nav" id="myTab" role="tablist">
                                    <li className="bd__btn-item" role="presentation">
                                        <button className="active" id="view-tab" data-bs-toggle="tab" data-bs-target="#view"
                                            type="button" role="tab" aria-controls="view" aria-selected="true">View
                                            All</button>
                                    </li>
                                    <li className="bd__btn-item" role="presentation">
                                        <button id="brnad-tab" data-bs-toggle="tab" data-bs-target="#brnad" type="button"
                                            role="tab" aria-controls="brnad" aria-selected="false">Brand</button>
                                    </li>
                                    <li className="bd__btn-item" role="presentation">
                                        <button id="project-tab" data-bs-toggle="tab" data-bs-target="#project"
                                            type="button" role="tab" aria-controls="project"
                                            aria-selected="false">Project</button>
                                    </li>
                                    <li className="bd__btn-item" role="presentation">
                                        <button id="creative-tab" data-bs-toggle="tab" data-bs-target="#creative"
                                            type="button" role="tab" aria-controls="creative"
                                            aria-selected="false">Creative</button>
                                    </li>
                                    <li className="bd__btn-item" role="presentation">
                                        <button id="mockup-tab" data-bs-toggle="tab" data-bs-target="#mockup" type="button"
                                            role="tab" aria-controls="mockup" aria-selected="false">Mockup</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div className="tab-content wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
                                id="myTabContent">
                                <div className="tab-pane fade show active" id="view" role="tabpanel" aria-labelledby="view-tab">
                                    <PortfolioTabOne />
                                </div>
                                <div className="tab-pane fade" id="brnad" role="tabpanel" aria-labelledby="brnad-tab">
                                    <PortfolioTabTwo />
                                </div>
                                <div className="tab-pane fade" id="project" role="tabpanel" aria-labelledby="project-tab">
                                    <PortfolioTabThree />
                                </div>
                                <div className="tab-pane fade" id="creative" role="tabpanel" aria-labelledby="creative-tab">
                                    <PortfolioTabFour />
                                </div>
                                <div className="tab-pane fade" id="mockup" role="tabpanel" aria-labelledby="mockup-tab">
                                    <PortfolioTabFive />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default MyWorks;