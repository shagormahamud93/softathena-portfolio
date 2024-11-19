
import blogImgOne from '../../public/assets/imgs/blog/blog-15.png';
import blogImgTwo from '../../public/assets/imgs/blog/blog-16.png';
import blogImgThree from '../../public/assets/imgs/blog/blog-17.png';

//user-image
import userOne from '../../public/assets/imgs/user/user-03.png';
import userTwo from '../../public/assets/imgs/user/user-08.png';
import userThree from '../../public/assets/imgs/user/user-09.png';
import { TBlog } from '@/interFace/type';



const blog_data: TBlog[] = [
    {
        id: 1,
        image: blogImgOne,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Feb 12, 2023",
        comment: 10,
        blogTitle: "The Role of interactions in User Agency Work",
        authorName: "Annte",
        authorImg: userOne
    },
    {
        id: 2,
        image: blogImgTwo,
        wowDelay: ".5s",
        blogTag: "Design",
        date: "Mar 20, 2023",
        comment: 20,
        blogTitle: "Tech Tricks A Chronicle of Our Agency World",
        authorName: "Yanky",
        authorImg: userTwo
    },
    {
        id: 3,
        image: blogImgThree,
        wowDelay: ".7s",
        blogTag: "Project",
        date: "Apr 10, 2023",
        comment: 12,
        blogTitle: "Creativity Dive into the Digital World Agency",
        authorName: "Alexa",
        authorImg: userThree
    },
] 

export default blog_data;