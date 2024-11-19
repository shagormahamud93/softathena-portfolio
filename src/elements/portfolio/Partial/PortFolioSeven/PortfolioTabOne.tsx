'use client'
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import portfolio_data from '@/data/portfolio-data';
import Link from 'next/link';

const PortfolioTabOne = () => {
    return (
        <>
            <div className="row  g-5">
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) =>
                        type === 2
                            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }
                >
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry gutter='30px'>
                            {
                                portfolio_data.slice(0, 3).map((item) => (
                                    <div className="portfolio-item" key={item.id}>
                                        <div className=" portfolio__item style-seven full-height">
                                            <div className="portfolio__item-thumb">
                                                <Image
                                                    src={item.image}
                                                    style={{ width: "100%", height: "auto" }}
                                                    alt="image not found"
                                                    className="portfolio-image"
                                                />
                                                <div className="portfolio__item-btn">
                                                    <span className="icon__box">
                                                        <PhotoView src={item.image.src}>
                                                            <button className="popup-image circle-btn is-bg-white is-btn-large">
                                                                <i className="icon-plus"></i>
                                                            </button>
                                                        </PhotoView>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="portfolio__item-content">
                                                <div className="portfolio__item-info">
                                                    <div className="portfolio__tag">
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__item-title underline"><Link
                                                        href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                        <Masonry gutter='30px'>
                            {
                                portfolio_data.slice(3, 5).map((item) => (
                                    <div className="portfolio-item" key={item.id}>
                                        <div className=" portfolio__item style-seven full-height">
                                            <div className="portfolio__item-thumb">
                                                <Image
                                                    src={item.image}
                                                    style={{ width: "100%", height: "auto" }}
                                                    alt="image not found"
                                                    className="portfolio-image"
                                                />
                                                <div className="portfolio__item-btn">
                                                    <span className="icon__box">
                                                        <PhotoView src={item.image.src}>
                                                            <button className="popup-image circle-btn is-bg-white is-btn-large">
                                                                <i className="icon-plus"></i>
                                                            </button>
                                                        </PhotoView>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="portfolio__item-content">
                                                <div className="portfolio__item-info">
                                                    <div className="portfolio__tag">
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__item-title underline"><Link
                                                        href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry gutter='30px'>
                            {
                                portfolio_data.slice(5, 8).map((item) => (
                                    <div className="portfolio-item" key={item.id}>
                                        <div className=" portfolio__item style-seven full-height">
                                            <div className="portfolio__item-thumb">
                                                <Image
                                                    src={item.image}
                                                    style={{ width: "100%", height: "auto" }}
                                                    alt="image not found"
                                                    className="portfolio-image"
                                                />
                                                <div className="portfolio__item-btn">
                                                    <span className="icon__box">
                                                        <PhotoView src={item.image.src}>
                                                            <button className="popup-image circle-btn is-bg-white is-btn-large">
                                                                <i className="icon-plus"></i>
                                                            </button>
                                                        </PhotoView>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="portfolio__item-content">
                                                <div className="portfolio__item-info">
                                                    <div className="portfolio__tag">
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__item-title underline"><Link
                                                        href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </PhotoProvider>
            </div>
        </>
    );
};

export default PortfolioTabOne;