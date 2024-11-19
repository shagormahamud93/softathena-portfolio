import ContactMain from '@/components/contact-us/ContactMain';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

const contact = () => {
    return (
        <MetaData pageTitle="Home">
            <Wrapper>
                <HeaderMain/>
                <main>
                    <ContactMain />
                </main>
                <FooterSection />
            </Wrapper>
        </MetaData>
    );
};

export default contact;