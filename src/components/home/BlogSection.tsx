import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSection = () => {
    return (
        <>
            <div id="homeblog" className="bd-blog__area section-space">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-7 col-md-8 col-sm-10">
                            <div className="section__title-wrapper text-center section__title-space">
                                <span className="section__subtitle bg-field">MY BLOG</span>
                                <h2 className="section__title mb-20">Read My Latest Blog</h2>
                                <p className="section__paragraph">Storytelling has long been a powerful tool in design, and {`it's`} taken to the next level in 2023. Designers are</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {
                            blog_data.map((item) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.wowDelay} key={item.id} data-wow-duration="1s">
                                    <section className="blog__wrap blog__item style-six">
                                        <div className="blog__thumb is-hover">
                                            <Link href={`/blog/blog-details/${item.id}`}>
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </Link>
                                            <div className="blog__tag">
                                                <Link href={`/blog/blog-details/${item.id}`}>{item.blogTag}</Link>
                                            </div>
                                        </div>
                                        <div className="blog__content bg-solid">
                                            <div className="blog__content-top">
                                                <div className="blog__tag">
                                                    <Link href={`/blog/blog-details/${item.id}`}>{item.blogTag}</Link>
                                                </div>
                                                <div className="blog__meta">
                                                    <span>
                                                        <i className="fa-light fa-calendar"></i>
                                                        {item.date}
                                                    </span>
                                                    <span>
                                                        <i className="fa-light fa-comment"></i>
                                                        {item.comment} Comments
                                                    </span>
                                                </div>
                                            </div>
                                            <h5 className="blog__title"><Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link></h5>
                                            <div className="blog__content-bottom">
                                                <div className="blog__author">
                                                    <div className="blog__author-thumb">
                                                        {item.authorImg &&
                                                            <Image src={item.authorImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                        }
                                                    </div>
                                                    <div className="blog__author-info">
                                                        <span className="blog__author-title">{item.authorName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSection;