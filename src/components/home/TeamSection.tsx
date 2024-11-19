"use client";
import Link from "next/link";
import React from "react";
//swiper
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import team_data from "@/data/team-data";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";

const TeamSection = () => {
  return (
    <>
      <section className="bd-team__area team-section-space">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="section__title-wrapper text-center section__title-space">
                <span className="section__subtitle bg-field">OUR TEAM</span>
                <h2 className="section__title mb-20">Leadership & Expertise</h2>
                <p className="section__paragraph is-br-none">
                  Meet the innovators at Soft Athena, committed to
                  collaboration, creativity, and delivering exceptional results.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="swiper team__active-two">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  slidesPerView={1}
                  spaceBetween={30}
                  autoplay={{
                    delay: 4500,
                  }}
                  navigation={{
                    nextEl: ".team__button-next",
                    prevEl: ".team__button-prev",
                  }}
                  pagination={{
                    el: ".bd-swiper-dot-5",
                    clickable: true,
                  }}
                  breakpoints={{
                    1400: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {team_data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="team__wrap team__item text-center style-five  wow fadeInUp"
                        data-wow-delay={item.wowDelay}
                      >
                        <div className="team__thumb bg-solid">
                          <Link href={`/team/team-details/${item.id}`}>
                            <Image
                              src={item.image}
                              loader={imageLoader}
                              width={300}
                              height={372}
                              alt="image not found"
                            />
                          </Link>
                          <div className="team__social">
                            <ul>
                              <li>
                                <Link href="#">
                                  <i className="fa-sharp fa-regular fa-share-nodes"></i>
                                </Link>
                                <div className="team__social-inner">
                                  <ul>
                                    {item.socialIcon.map((social) => (
                                      <li key={social.id}>
                                        <Link href={social.url}>
                                          <i className={social.icon}></i>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="team__content">
                          <h6 className="team__title">
                            <Link href={`/team/team-details/${item.id}`}>
                              {item.authorName}
                            </Link>
                          </h6>
                          <span className="team__designation">
                            {item.desination}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* -- If we need pagination -- */}
              <div className="pagination__wrapper">
                <div className="bd-swiper-dot-5 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
