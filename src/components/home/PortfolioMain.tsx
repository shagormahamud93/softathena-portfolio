import React from 'react';
import PortfolioService from '@/components/home/PortfolioService';
import PortfolioAbout from '@/components/home/About';
import TrustClientCounter from '@/components/home/TrustClientCounter';
import TeamSection from '@/components/home/TeamSection';
import BlogSection from '@/components/home/BlogSection';
import PortfolioCta from '@/components/home/PortfolioCta';
import AthenaPortfolioBanner from './AthenaPortfolioBanner';
import VideoAreaSection from './VideoAreaSection';
import FeatureWork from './FeatureWork';
import ClientReview from './ClientReview';

const AthenaPortfolioMain = () => {
    return (
        <>
            <AthenaPortfolioBanner />
            <PortfolioAbout />
            <TrustClientCounter />
            <PortfolioService />
            <FeatureWork />
            <TeamSection />
            <VideoAreaSection />
            <ClientReview />
            <BlogSection />
            <PortfolioCta />
        </>
    );
};

export default AthenaPortfolioMain;