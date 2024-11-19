import React from 'react';
import BreadcrumbOne from '../common/Breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../public/assets/imgs/breadcrumb/breadcrumb-bg-06.png';
import MyWorks from './MyWorks';
import PortfolioCta from '../home/PortfolioCta';

const WorksMainArea = () => {
    return (
        <>
            <BreadcrumbOne title="Easy Solutions for Your Business" subTitle='SERVICE STANDARD' breadcrumbImg={breadcrumbBg}
                rowWrapperClass='col-xxl-5 col-xl-6 col-lg-8 col-md-8' menuItem='Service'
                menuItemUrl='/service' justifyNotCenter='justify-start' textNotCenter='text-start' />
            {/* works area */}
            <MyWorks />
            <PortfolioCta />
        </>
    );
};

export default WorksMainArea;