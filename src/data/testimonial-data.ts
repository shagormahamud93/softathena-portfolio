import { StaticImageData } from 'next/image';
//testimonial element style one, four and seven img
import clientImgOne from '../../public/assets/imgs/user/user-02.png';
import clientImgTwo from '../../public/assets/imgs/user/user-01.png';
import clientImgThree from '../../public/assets/imgs/user/user-08.png';
import clientImgFour from '../../public/assets/imgs/user/user-09.png';
import clientImgFive from '../../public/assets/imgs/user/user-10.png';

type TTestimonial = {
    id: number;
    rating?: number;
    description: string;
    image: StaticImageData;
    userName: string;
    designation: string
}
const testimonial_data: TTestimonial[] = [
//testimonial data
{
    id: 1,
    description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
    image: clientImgOne,
    userName: "Chamain Louis",
    designation: "Creative Strategist",
    rating: 5,
},
{
    id: 2,
    description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
    image: clientImgTwo,
    userName: "Henry Marker",
    designation: "Innovation Architect",
    rating: 4,
},
{
    id: 3,
    description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
    image: clientImgThree,
    userName: "Morish Lemon",
    designation: "Experience Engineer",
    rating: 5,
},
{
    id: 4,
    description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
    image: clientImgFour,
    userName: "Louis Bentek",
    designation: "User Journey Orchestrator",
    rating: 4,
},
{
    id: 5,
    description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
    image: clientImgFive,
    userName: "Alexa Louis",
    designation: "Designer & Davelopment",
    rating: 5,
},
//testimonial data end

]
export default testimonial_data;