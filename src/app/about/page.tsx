import AboutMainArea from '@/components/about/AboutMainArea';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

const AboutMain = () => {
    return (
        <>
            <MetaData pageTitle="About">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <AboutMainArea />
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default AboutMain;