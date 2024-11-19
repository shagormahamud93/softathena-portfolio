import { StaticImageData } from "next/image";
import bgImage1 from "../../public/assets/imgs/bg/banner-bg-03.png";
import bgImage2 from "../../public/assets/imgs/bg/banner-bg-04.png";
import bgImage3 from "../../public/assets/imgs/bg/banner-bg-05.png";
import bgImage4 from "../../public/assets/imgs/bg/banner-bg-06.png";

type TBanner = {
  id: number;
  bannerBg: StaticImageData;
  title: string;
  subTitle: string;
  desc: string;
  videoId: string;
};

const banner_data: TBanner[] = [
  // Enhanced descriptions for more impact
  {
    id: 1,
    bannerBg: bgImage1,
    title: "Web Development",
    subTitle: "Made Simple",
    desc: "Soft Athena specializes in creating custom websites designed to meet the unique needs of your business. From responsive designs to seamless user experiences, we focus on delivering solutions that enhance your online presence and help you stand out in a competitive digital landscape.",
    videoId: "8w6XpAGIh-U",
  },
  {
    id: 2,
    bannerBg: bgImage2,
    title: "Mobile Apps",
    subTitle: "That Engage",
    desc: "Our team at Soft Athena crafts intuitive and feature-rich mobile applications that prioritize user engagement and functionality. Whether you need an app for iOS, Android, or both, we ensure every solution is tailored to your audience, keeping innovation and user satisfaction at the forefront.",
    videoId: "DRNhsBjp4Lc",
  },
  {
    id: 3,
    bannerBg: bgImage3,
    title: "Complete Solutions",
    subTitle: "For Growth",
    desc: "From initial planning and design to development and deployment, Soft Athena provides comprehensive web and mobile solutions that are aligned with your business goals. We are your partners in digital transformation, offering expertise that helps your business grow and thrive in today's digital age.",
    videoId: "8w6XpAGIh-U",
  },
  {
    id: 4,
    bannerBg: bgImage4,
    title: "Digital Innovation",
    subTitle: "Unlocked",
    desc: "At Soft Athena, we blend creativity, technology, and strategy to craft digital solutions that drive success. By leveraging cutting-edge tools and innovative thinking, we deliver products that not only meet but exceed expectations, empowering your business to achieve its full potential.",
    videoId: "DRNhsBjp4Lc",
  },
];

export default banner_data;
