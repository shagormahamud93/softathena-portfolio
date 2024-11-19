import services_data from '@/data/services-data';
import Link from 'next/link';
import React from 'react';

const AwardSection = () => {
    return (
        <>

            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="section__title-wrapper section__title-space">
                        <div className="section__title-wrapper">
                            <span className="section__subtitle bg-field">Achievement</span>
                            <h2 className="section__title">My Awards</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                {
                    services_data.slice(3, 7).map((item) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                            <div className="award__single-item style-two  wow fadeInUp" data-wow-delay={item.wowDelay}
                                data-wow-duration="1s">
                                <div className="award__icon">
                                    <span>
                                        <i className={item.icon}></i>
                                    </span>
                                </div>
                                <div className="award__content">
                                    <h5 className="award__title"><Link href={`/service/service-details/${item.id}`}>{item.title}</Link></h5>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="award__btn">
                                    <Link className="circle-btn" href={`/service/service-details/${item.id}`}> <span className="icon__box"> <i
                                        className="fa-regular fa-arrow-right-long"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default AwardSection;