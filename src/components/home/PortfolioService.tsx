import services_data from "@/data/services-data";
import Link from "next/link";
import React from "react";

const PortfolioService = () => {
  return (
    <>
      <section
        id="homeservices"
        className="bd-service__area section-space theme-bg-secondary z-index-1 p-relative"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section__title-wrapper text-center section__title-space">
                <span className="section__subtitle bg-field">OUR SERVICES</span>
                <h2 className="section__title mb-20">
                  Expert Digital Solutions
                </h2>
                <p className="section__paragraph is-br-none">
                  At Soft Athena, we deliver tailored solutions in web
                  development, mobile apps, UI/UX design, and product deployment
                  to empower businesses and drive growth.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            {services_data.map((item) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={item.wowDelay}
                data-wow-duration="1s"
                key={item.id}
              >
                <div className="service__wrapper service__item style-five bg-solid bordered-style">
                  <div className="contentHidden"></div>
                  <div className="contentHidden"></div>
                  <span className="service__icon-wrap">
                    <i className={item.icon}></i>
                  </span>
                  <div className="service__content">
                    <h5 className="service__title">
                      <Link href={`/service/service-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h5>
                    <p>{item.desc}</p>
                    <div className="service__more">
                      <Link
                        className="bd-text-btn style-one"
                        href={`/service/service-details/${item.id}`}
                      >
                        {" "}
                        <span className="icon__box">Read More</span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioService;
