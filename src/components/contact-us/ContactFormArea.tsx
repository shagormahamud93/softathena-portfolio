import React from 'react';
import ContactBg from '../../../public/assets/imgs/bg/contact-bg-01.png';
import Link from 'next/link';
import ContactForm from '@/form/contact-form';

const ContactFormArea = () => {
    return (
        <>
         <div className="bd-contact__area section-space p-relative">
                <div className="contact__bg include-bg" style={{ backgroundImage: `url(${ContactBg.src})` }}></div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay=".3s">
                            <div className="contact__wrapper">
                                <div className="section__title-wrapper mb-30">
                                    <span className="section__subtitle bg-field">GET IN TOUCH </span>
                                    <h2 className="section__title mb-20">Feel Free Contact me</h2>
                                    <p className="section__paragraph">{`I'm`} generally available during regular business hours
                                        Specify your working hours, but {`I'll`} make an effort to respond to your messages as
                                        soon as possible.</p>
                                </div>
                                <div className="contact__info-item style-two">
                                    <ul>
                                        <li>
                                            <div className="contact__info">
                                                <div className="contact__info-icon">
                                                    <span>
                                                        <i className="icon-phone"></i>
                                                    </span>
                                                </div>
                                                <div className="contact__info-content">
                                                    <p>Phone</p>
                                                    <h6><Link href="tel:+8801300272795">+8801300272795</Link></h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact__info">
                                                <div className="contact__info-icon">
                                                    <span>
                                                        <i className="icon-envelope"></i>
                                                    </span>
                                                </div>
                                                <div className="contact__info-content">
                                                    <p>Email</p>
                                                    <h6><Link href="mailto:softathena1@gmail.com">softathena1@gmail.com</Link></h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact__info">
                                                <div className="contact__info-icon">
                                                    <span>
                                                        <i className="icon-location"></i>
                                                    </span>
                                                </div>
                                                <div className="contact__info-content">
                                                    <p>Location</p>
                                                    <h6><Link target="_blank" href="https://www.google.com/maps">
                                                        Mirpur, Dhaka, Bangladesh</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay=".3s">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactFormArea;