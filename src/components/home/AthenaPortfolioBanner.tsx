"use client"
import banner_data from '@/data/banner-data';
import React, { useState } from 'react';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import "swiper/css/bundle"
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const AthenaPortfolioBanner = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [videoUrl, setVideoUrl] = useState(" ")
    const openVideoModal = (id: string) => {
        setIsOpen(!isOpen)
        setVideoUrl(id)
    }
    return (
        <>
            <section className="banner__area banner-height style-seven p-relative fix">
                {/* -- wave style -- */}
                <div className="bd-wave-wrapper">
                    <div className="bd-wave bd-wave-2"></div>
                    <div className="bd-wave bd-wave-2"></div>
                </div>
                {/* -- when slide active remove this class -- */}
                <div className="swiper slider__active">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, EffectFade]}
                        // Optional parameters
                        slidesPerView={1}
                        fadeEffect={{
                            crossFade: true,
                        }}
                        loop={true}
                        effect="fade"
                        autoplay={{
                            delay: 5000,
                        }}
                        navigation={{
                            nextEl: ".slider__button-prev",
                            prevEl: ".slider__button-next",
                        }}
                        pagination={{
                            el: ".bd-slider-dot",
                            clickable: true,
                        }}
                    >
                        {
                            banner_data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="banner_more_item">
                                        <div className="banner__single-slide">
                                            <div className="bg__thumb-position include-bg is-overlay"
                                                style={{ backgroundImage: `url(${item.bannerBg.src})` }}>
                                            </div>
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col-xl-8 col-lg-9 ">
                                                        <div className="banner__content text-center">
                                                            <h1 className="banner__title xlarge" data-animation="fadeInUp" data-delay=".3s">
                                                                {item.title} {" "}<span className="bd-text-primary">{item.subTitle}</span></h1>
                                                            <p className="banner__text" data-animation="fadeInUp" data-delay=".5s">{item.desc}</p>
                                                            <div className="banner__btn-wrap justify-content-center"
                                                                data-animation="fadeInUp" data-delay=".7s">
                                                                <Link className="bd-btn is-btn-anim" href="/portfolio">
                                                                    <span className="bd-btn-inner">
                                                                        <span className="bd-btn-normal">Get our work</span>
                                                                        <span className="bd-btn-hover">Get our work</span>
                                                                        <i className="contentHidden"></i>
                                                                    </span>
                                                                </Link>
                                                                <button onClick={() => { openVideoModal(item.videoId) }} className="play__btn popup-video animate-play"><span><i
                                                                    className="icon-play"></i></span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                </div>
                {/* -- If we need navigation buttons -- */}
                <div className="banner__navigation d-none d-md-block">
                    <button className="slider__button-prev circle-btn slider__nav-btn is-btn-large"><i
                        className="fa-regular fa-arrow-left-long"></i></button>
                    <button className="slider__button-next circle-btn slider__nav-btn is-btn-large"><i
                        className="fa-regular fa-arrow-right-long"></i></button>
                </div>
            </section>
            <ModalVideo isOpen={isOpen} videoId={videoUrl} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default AthenaPortfolioBanner;