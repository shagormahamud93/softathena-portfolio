import Link from 'next/link';
import React from 'react';
import { StaticImageData } from 'next/image';

type TBreadcrumb = {
    breadcrumbImg: StaticImageData;
    title: string;
    subTitle: string;
    rowWrapperClass: string;
    menuItem?: string;
    menuItemUrl?: string;
    textNotCenter?: string;
    justifyNotCenter?: string;
    spacingStyle?: string;
}

const BreadcrumbOne = ({ breadcrumbImg, title, subTitle, rowWrapperClass, menuItem, textNotCenter, justifyNotCenter, spacingStyle, menuItemUrl }: TBreadcrumb) => {
    return (
        <>
            <section className={`breadcrumb__area p-relative ${spacingStyle ? spacingStyle : "style-two"} is-breadcrumb-space`}>
                <div className="breadcrumb__thumb-bg include-bg bg__thumb-position"
                    style={{ backgroundImage: `url(${breadcrumbImg.src})` }}></div>
                <div className="container">
                    <div className={`row ${justifyNotCenter ? justifyNotCenter : "justify-content-center"}`}>
                        <div className={rowWrapperClass}>
                            <div className="breadcrumb__content-wrapper p-relative z-index-1">
                                <div className={`breadcrumb__title-wrapper ${textNotCenter ? textNotCenter : "text-center"}`}>
                                    <h1 className="breadcrumb__title mb-25">{title}</h1>
                                </div>
                                <div className={`breadcrumb__menu ${textNotCenter ? textNotCenter : "text-center"}`}>
                                    <nav>
                                        <ul>
                                            <li><span><Link href="/">Home</Link></span></li>
                                            {menuItem && menuItemUrl && <li><span><Link href={menuItemUrl}>{menuItem}</Link></span></li>}
                                            <li><span>{subTitle}</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreadcrumbOne;