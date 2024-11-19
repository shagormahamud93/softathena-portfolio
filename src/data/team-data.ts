//Element style two img
import TanzilMia from "../../public/assets/imgs/team/team-05.png";
import ShagorAli from "../../public/assets/imgs/team/team-06.png";
import Istiak from "../../public/assets/imgs/team/team-07.png";

import { TTeam } from "@/interFace/type";

const team_data: TTeam[] = [
  //Team data
  {
    id: 1,
    image: TanzilMia,
    authorName: "Md Tanzil Mia",
    desination: "Founder & CEO",
    socialIcon: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/",
      },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      {
        id: 3,
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/",
      },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".3s",
  },
  {
    id: 2,
    image: ShagorAli,
    authorName: "Mahbub Hasan",
    desination: "Founder & CTO",
    socialIcon: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/",
      },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      {
        id: 3,
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/",
      },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".7s",
  },
  {
    id: 3,
    image: TanzilMia,
    authorName: "Istiak Ahmed",
    desination: "Co-Founder & Lead App Developer",
    socialIcon: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/",
      },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      {
        id: 3,
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/",
      },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".5s",
  },
  {
    id: 4,
    image: ShagorAli,
    authorName: "Md Sagar Ali",
    desination: "Co-Founder & Lead Software Developer",
    socialIcon: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/",
      },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      {
        id: 3,
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/",
      },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".3s",
  },

  {
    id: 5,
    image: TanzilMia,
    authorName: "Md. Tanver Ahmed Siyam",
    desination: "UI/UX Designer",
    socialIcon: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/",
      },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      {
        id: 3,
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/",
      },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".5s",
  },
];

export default team_data;
