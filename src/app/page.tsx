//@refresh
import AthenaPortfolioMain from "@/components/home/PortfolioMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/Wrapper";
import FooterSection from "@/layout/footer/FooterSection";
import HeaderMain from "@/layout/header/HeaderMain";

const Home = () => {
  return (
    <>
         <MetaData pageTitle="Home">
            <Wrapper>
                <HeaderMain/>
                <main>
                    <AthenaPortfolioMain />
                </main>
                <FooterSection />
            </Wrapper>
        </MetaData>
    </>
  );
};

export default Home;
