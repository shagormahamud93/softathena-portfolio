"use client"
import React from 'react';
import Image from 'next/image';
import TestimonialLineShape from '../../../public/assets/imgs/shape/four-line-shape-1.png';
import TestimonialLineShapeTwo from '../../../public/assets/imgs/shape/four-line-shape-2.png';
import testimonialQuote from '../../../public/assets/imgs/shape/testimonial-quote-small.png';
import GetRatting from '@/hooks/GetRatting';
import testimonial_data from '@/data/testimonial-data';
//swiper functionality
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import "swiper/css/bundle"



const ClientReview = () => {
    return (
        <>
          <section className="bd-testimonial__area section-space theme-bg-secondary p-relative">
                <div className="testimonial__shape">
                    <Image className="testimonial__shape-three" src={TestimonialLineShape} width={84} height={84}
                        alt="image not found" />
                    <Image className="testimonial__shape-four" src={TestimonialLineShapeTwo} width={85} height={85}
                        alt="image not found" />
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle bg-field">TESTIMONIALS </span>
                                <h2 className="section__title">Client Experiences and Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                <div className="testimonial__slider wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                    <div className="swiper testimonial__active-two">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={30}
                            loop={true}
                            roundLengths={true}
                            speed={700}
                            autoplay={{
                                delay: 4500,
                            }}
                            navigation={{
                                nextEl: ".testimonial__button-next",
                                prevEl: ".testimonial__button-prev",
                            }}
                            breakpoints={{
                                1400: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 2,
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
                            {
                                testimonial_data.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="testimonial__wrapper style-five">
                                            <div className="testimonial__top-item">
                                                <div className="testimonial__thumb-wrap">
                                                    <div className="testimonial__thumb">
                                                        <Image style={{ width: "100%", height: "auto" }} src={item.image} priority alt="image not found" />
                                                    </div>
                                                    <div className="testimonial__avatar-info">
                                                        <h6 className="testimonial__avatar-title">{item.userName}</h6>
                                                        <span className="testimonial__avatar-designation">{item.designation} /
                                                            <span className="testimonial__rating">{" "}
                                                                <GetRatting averageRating={item.rating} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="testimonial__shape">
                                                    <Image className="testimonial__shape-quote"
                                                        src={testimonialQuote} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                </div>
                                            </div>
                                            <div className="testimonial__item">
                                                <div className="testimonial__content">
                                                    <div className="testimonial__text">
                                                        <p>{item.description}</p>
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
                    <div className="testimonial__navigation">
                        <button className="testimonial__button-prev circle-btn slider__nav-btn"><i
                            className="fa-regular fa-arrow-left-long"></i></button>
                        <button className="testimonial__button-next circle-btn ml-5 slider__nav-btn"><i
                            className="fa-regular fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div >
                </div>
            </section>
        </>
    );
};

export default ClientReview;