
import counter_data from '@/data/counter_data';
import CountUpContent from '@/elements/counter/CountUpContent';
import React from 'react';

const TrustClientCounter = () => {
    return (
        <>
            {/* -- counter area start -- */}
            <section className="bd-counter__area section-space-bottom counter-space creative-counter">
                <div className="container">
                    <div className="counter__wrapper style-two">
                        <div className="counter__shape">
                            <span className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s"></span>
                            <span className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".7s"></span>
                            <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s"></span>
                            <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"></span>
                        </div>
                        <div className="row g-5">
                            {
                                counter_data.map((item) => (
                                    <div className="col-lg-4 col-md-4" key={item.id}>
                                        <div className="counter__item">
                                            <div className="counter__content">
                                                <h2 className="counter__title"><span className="counter"><CountUpContent number={item.cunterNum} text='+' /></span></h2>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* -- counter area end -- */}

        </>
    );
};

export default TrustClientCounter;