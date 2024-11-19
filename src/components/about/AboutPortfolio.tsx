"use client"
import React from 'react';
import image1 from '../../../public/assets/imgs/portfolio/large/portfolio-large-01.png';
import image2 from '../../../public/assets/imgs/portfolio/large/portfolio-large-02.png';
import image3 from '../../../public/assets/imgs/portfolio/large/portfolio-large-03.png';
import image4 from '../../../public/assets/imgs/portfolio/large/portfolio-large-04.png';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"
import Image from 'next/image';

const AboutPortfolio = () => {
    const aboutPortfolioData = [
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 },
        { id: 4, image: image4 },
    ]
    return (
        <>
            <div className="bd-portfoli-details-area section-space-bottom fix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="portfolio__wrapper style-six portfolio-details wow fadeInUp" data-wow-delay=".3s"
                                data-wow-duration="1s">
                                <div className="swiper portfolio-details__active">
                                    <Swiper
                                        modules={[Autoplay, Navigation, Pagination]}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        centeredSlides={true}
                                        speed={900}
                                        autoplay={{
                                            delay: 4500,
                                        }}
                                        navigation={{
                                            nextEl: ".portfolio__button-next",
                                            prevEl: ".portfolio__button-prev",
                                        }}
                                        pagination={{
                                            el: ".bd-swiper-dot",
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            1200: {
                                                slidesPerView: 1.3,
                                            },
                                            992: {
                                                slidesPerView: 1.1,
                                            },
                                            768: {
                                                slidesPerView: 1.3,
                                            },
                                            576: {
                                                slidesPerView: 1,
                                            },
                                            0: {
                                                slidesPerView: 1,
                                            },
                                        }}
                                        className='o-visible'
                                    >
                                        {
                                            aboutPortfolioData.map((item) => (
                                                <SwiperSlide key={item.id}>
                                                    <div className=" portfolio__item style-six portfolio-details">
                                                        <div className="portfolio__item-thumb">
                                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    {/* -- If we need navigation buttons -- */}
                                    <div className="portfolio__navigation d-none d-sm-block">
                                        <button
                                            className="portfolio__button-prev circle-btn is-bg-white slider__nav-btn is-hover-blue"><i
                                                className="fa-regular fa-arrow-left-long"></i></button>
                                        <button
                                            className="portfolio__button-next circle-btn is-bg-white slider__nav-btn is-hover-blue"><i
                                                className="fa-regular fa-arrow-right-long"></i></button>
                                    </div>
                                    {/* -- If we need pagination -- */}
                                    <div className="pagination__wrapper d-block d-sm-none">
                                        <div className="bd-swiper-dot text-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPortfolio;