import React from 'react';
import errorImg from '../../../public/assets/imgs/error/error.png';
import errorShape from '../../../public/assets/imgs/shape/error-shape-01.png';
import errorShapeTwo from '../../../public/assets/imgs/shape/error-shape-02.png';
import errorShapeThree from '../../../public/assets/imgs/shape/error-shape-03.png';
import errorShapeFour from '../../../public/assets/imgs/shape/error-shape-04.png';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
    return (
        <>
               <main>
                <section className="bd-error__area section-space">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="error__thumb-wrapper p-relative wow fadeInUp" data-wow-delay=".3s"
                                    data-wow-duration=".7s">
                                    <div className="error__thumb">
                                    <Image src={errorImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                    </div>
                                    <div className="error__shape-wrapper">
                                        <div className="error__shape-one">
                                        <Image src={errorShape} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="error__shape-two">
                                        <Image src={errorShapeTwo} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="error__shape-three">
                                        <Image src={errorShapeThree} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="error__shape-four"> 
                                        <Image src={errorShapeFour} width={36} height={36} alt="image not found" />
                                        </div>
                                    </div>
                                </div>
                                <div className="error__content wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">
                                    <h2 className="error__title mb-15">Opps! Page Not Found</h2>
                                </div>
                                <div className="error__btn wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1.1s">
                                    <Link className="bd-btn is-btn-anim" href="/">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">Back to home</span>
                                            <span className="bd-btn-hover">Back to home</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ErrorPage;