import React from 'react';
import BreadcrumbOne from '../common/Breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../public/assets/imgs/breadcrumb/breadcrumb-bg-05.png';
import BlogSection from '../home/BlogSection';
import PortfolioCta from '../home/PortfolioCta';

const BlogMainArea = () => {
    return (
        <>
             <BreadcrumbOne title="Blog Standard" subTitle='Blog'
              menuItem='Blog' menuItemUrl='/blog' breadcrumbImg={breadcrumbBg} spacingStyle='style-one' 
             rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' />
             {/* blog list */}
             <BlogSection/>
             <PortfolioCta/>
        </>
    );
};

export default BlogMainArea;