import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerSmallImgOne from "../../../public/assets/imgs/footer/small/footer-small-01.png";
import footerSmallImgTwo from "../../../public/assets/imgs/footer/small/footer-small-02.png";
import footerSmallImgThree from "../../../public/assets/imgs/footer/small/footer-small-03.png";
import footerSmallImgFour from "../../../public/assets/imgs/footer/small/footer-small-04.png";

const FooterSection = () => {
  return (
    <>
      <footer>
        <section className="footer__area style-two section-space-top">
          <div className="container">
            <div className="footer__bottom">
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h5>About us</h5>
                </div>
                <div className="footer__widget-content">
                  <p className="mb-30">
                    {`I'm`} generally available during to regular business
                    hours,
                  </p>
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
                            <h6>
                              <Link href="tel:+8801300272795">
                                +8801300272795
                              </Link>
                            </h6>
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
                            <h6>
                              <Link href="mailto:softathena1@gmail.com">
                                softathena1@gmail.com
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h5>Company</h5>
                </div>
                <div className="footer__links">
                  <ul>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Project</Link>
                    </li>
                    <li>
                      <Link href="/testimonial">Testimonial</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h5>Services</h5>
                </div>
                <div className="footer__links">
                  <ul>
                    <li>
                      <Link href="/personal-portfolio">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/minimal-portfolio-agency">UX/UI Design</Link>
                    </li>
                    <li>
                      <Link href=" /creative-agency">Custom Solutions</Link>
                    </li>
                    <li>
                      <Link href="/digital-agency">Mobile Application</Link>
                    </li>
                    <li>
                      <Link href="/corporate-business">Cloud Deployment</Link>
                    </li>
                    <li>
                      <Link href="/startup-business">Digital Consulting</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h5>Gallery</h5>
                </div>
                <div className="footer__widget-gallery">
                  <ul>
                    <li>
                      <Link href="/portfolio">
                        <Image
                          src={footerSmallImgOne}
                          style={{ width: "100%", height: "auto" }}
                          alt="image not found"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <Image
                          src={footerSmallImgTwo}
                          style={{ width: "100%", height: "auto" }}
                          alt="image not found"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <Image
                          src={footerSmallImgThree}
                          style={{ width: "100%", height: "auto" }}
                          alt="image not found"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <Image
                          src={footerSmallImgFour}
                          style={{ width: "100%", height: "auto" }}
                          alt="image not found"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* -- Section divider -- */}
          <div className="section__divider">
            <hr />
          </div>
          <div className="footer__copyright style-two">
            <div className="container">
              <div className="footer__copyright">
                <p>
                  Copyright @ 2024 <Link href="#">Soft Athena.</Link> All Right
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default FooterSection;
