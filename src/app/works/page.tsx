import WorksMainArea from '@/components/works/WorksMainArea';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

const WorksMain = () => {
    return (
        <>
             <MetaData pageTitle="Works">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <WorksMainArea />
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default WorksMain;