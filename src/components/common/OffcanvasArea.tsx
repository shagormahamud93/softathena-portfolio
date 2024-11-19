import Link from 'next/link';
import React from 'react';
import headerLogo from '../../../public/assets/imgs/logo/logo.svg';
import Image from 'next/image';
import SocialIcon from './social-icon/SocialIcon';
import OnePageMobileMenu from '@/layout/OnePageMobileMenu/OnePageMobileMenu';

type TSideInfoProps = {
    isOpenInfoSidebar: boolean;
    setIsOpenInfoSidebar: React.Dispatch<React.SetStateAction<boolean>>
    megaMenu?: string;
}

const OffcanvasArea = ({ isOpenInfoSidebar, setIsOpenInfoSidebar, megaMenu }: TSideInfoProps) => {
    return (
        <>
            <div className="fix">
                <div className={`offcanvas__area ${isOpenInfoSidebar ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <Image className="logo__white" priority src={headerLogo} style={{ width: "100%", height: "auto" }} alt="logo not found" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={() => setIsOpenInfoSidebar(!isOpenInfoSidebar)} className="offcanvas-close-icon animation--flip">
                                        <span className="offcanvas-m-lines">
                                            <span className="offcanvas-m-line line--1"></span><span
                                                className="offcanvas-m-line line--2"></span><span
                                                    className="offcanvas-m-line line--3"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="mobile-menu fix mean-container">
                                <OnePageMobileMenu />
                            </div>
                            <div className="offcanvas__social">
                                <h4 className="offcanvas__title mb-20">Subscribe & Follow</h4>
                                <div className="theme__social">
                                    <SocialIcon />
                                </div>
                            </div>
                            <div className="offcanvas__btn">
                                <div className="header__btn-wrap">
                                    <Link className="bd-btn is-btn-anim" href="#">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">Purchase now</span>
                                            <span className="bd-btn-hover">Purchase now</span>
                                            <i className="contentHidden"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default OffcanvasArea;