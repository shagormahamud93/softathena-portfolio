import { one_page_menu } from '@/data/menu/menu-data';
import Link from 'next/link';
import React from 'react';

const OnePageMobileMenu = () => {
    return (
        <>
                <div className='mean-bar'>
                <Link className='meanmenu-reveal' href="#nav"></Link>
                <nav className='mean-nav'>
                    <ul className='onepage-menu'>
                        {
                            one_page_menu?.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link as string}>{item?.label as string}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default OnePageMobileMenu;