import BlogMainArea from '@/components/blog/BlogMainArea';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

const BlogMain = () => {
    return (
        <>
           <MetaData pageTitle="Service">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <BlogMainArea />
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default BlogMain;