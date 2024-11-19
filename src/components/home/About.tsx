"use client";
import CountUpContent from "@/elements/counter/CountUpContent";
import AboutImg from "../../../public/assets/imgs/about/about-03.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageLoader } from "@/hooks/ImageLoader";

const PortfolioAbout = () => {
  return (
    <>
      <section
        id="homeabout"
        className="bd-about__area section-space theme-bg-secondary about-space"
      >
        <div className="container">
          <div className="row g-5 align-items-lg-center">
            <div className="col-xl-6 col-lg-7 col-md-6 order-md-0 order-1">
              <div
                className="about__content style-three  wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="section__title-wrapper mb-25">
                  <div className="section__title-wrapper">
                    <span className="section__subtitle sec-border">
                      Who We Are
                    </span>
                    <h2 className="section__title">
                      Building Digital Experiences That Matter
                    </h2>
                  </div>
                </div>
                <p>
                  At Soft Athena, we are a team of innovators, designers, and
                  developers dedicated to crafting exceptional digital
                  solutions. With expertise in web development, mobile
                  application development, and UI design, we are committed to
                  turning ideas into impactful digital realities. Whether it’s
                  building robust websites or intuitive mobile apps, we aim to
                  empower businesses to thrive in the digital age.
                </p>
                <p>
                  Our mission is simple: create cutting-edge solutions that
                  align with your business goals while delivering seamless user
                  experiences. From concept to deployment, we provide a
                  collaborative approach to ensure your vision comes to life.
                </p>
                <div className="about__info-list">
                  <div className="info__list">
                    <ul>
                      <li>
                        <i className="fa-regular fa-check"></i>
                        Expertise in Web and Mobile Development
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                        Seamless Deployment on AWS, Digital Ocean, and More
                      </li>
                      <li>
                        <i className="fa-regular fa-check"></i>
                        Bespoke UI Design for Exceptional User Experiences
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about__btn">
                  <Link className="bd-btn is-bg-gradient" href="/about">
                    <span className="">
                      Learn More
                      <i className="contentHidden"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6 order-md-1 order-0">
              <div
                className="about__thumb-wrapper style-three wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="about__thumb">
                  <Image
                    loader={imageLoader}
                    loading="lazy"
                    placeholder="blur"
                    src={AboutImg}
                    style={{ width: "100%", height: "auto" }}
                    alt="Soft Athena Team"
                  />
                </div>
                <div className="counter__wrap">
                  <h2 className="counter__title">
                    <span className="counter">
                      <CountUpContent number={4} />
                    </span>
                  </h2>
                  <div className="counter__details">
                    <p>
                      Years <br /> Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAbout;
