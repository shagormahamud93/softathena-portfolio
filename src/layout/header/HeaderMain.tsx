"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import headerLogo from '../../../public/assets/imgs/logo/logo.svg';
import useScrollDirection from '@/hooks/sticky-header';
import Link from 'next/link';
import OffcanvasArea from '@/components/common/OffcanvasArea';


const HeaderMain = () => {
    const isSticky = useScrollDirection(null);
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const [isOpenInfoSidebarTwo, setIsOpenInfoSidebarTwo] = useState(false)
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)

    }
    return (
        <>
            <header>
                <div className={`header__area header-transparent is-border-bottom p-relative is-header-large
                 ${isSticky ? "bd-sticky" : ""}`}>
                    <div className="container">
                        <div className="mega__menu-wrapper p-relative z-index-1">
                            <div className="header__main">
                                <div className="header__left">
                                    <div className="header__logo">
                                        <Link href="/">
                                            <Image className="logo__white" priority src={headerLogo} style={{ width: "100%", height: "auto" }} alt="logo not found" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header__middle">
                                    <div className="mean__menu-wrapper d-none d-lg-block">
                                        <div className="main-menu is-menu-clr">
                                            <nav>
                                                <ul className="onepage-menu is-menu-clr">
                                                    <li>
                                                        <Link href="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about">About</Link>
                                                    </li>
                                                    <li><Link href="/service">Services</Link>
                                                    </li>
                                                    <li><Link href="/works">Works</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog">Blog</Link>
                                                    </li>
                                                    <li><Link href="/contact">Contact</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <div className="header__hamburger ml-20 d-none">
                                                <button type="button" className="hamburger-btn offcanvas-open-btn">
                                                    <span>01</span>
                                                    <span>01</span>
                                                    <span>01</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header__right">
                                    <div className="header__action d-flex align-items-center">
                                        <div
                                            className="header__btn-wrap d-none d-sm-inline-flex d-inline-flex align-items-center gap-5">
                                            <Link className="bd-btn is-btn-anim bordered-blue" href="/contact">
                                                <span className="bd-btn-inner">
                                                    <span className="bd-btn-normal">Contact me</span>
                                                    <span className="bd-btn-hover">Contact me</span>
                                                    <i className="contentHidden"></i>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="header__hamburger ml-20 d-lg-none">
                                            <div className="sidebar__toggle">
                                                <button onClick={handleInfoToggle} className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="header__hamburger ml-20 d-none">
                                            <button type="button" className="hamburger-btn offcanvas-open-btn">
                                                <span>01</span>
                                                <span>01</span>
                                                <span>01</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
            <div className="offcanvas__overlay-white"></div>
            <div onClick={() => setIsOpenInfoSidebarTwo(false)}
                className={isOpenInfoSidebarTwo ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
            <div className="offcanvas__overlay-white"></div>
        </>
    );
};

export default HeaderMain;