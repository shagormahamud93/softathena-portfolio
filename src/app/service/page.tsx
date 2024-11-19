import ServiceMainArea from '@/components/service/ServiceMainArea';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

const ServiceMain = () => {
    return (
        <>
              <MetaData pageTitle="Service">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <ServiceMainArea />
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default ServiceMain;