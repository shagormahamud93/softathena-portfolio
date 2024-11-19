import { StaticImageData } from "next/image";
import React from "react";
// context api data type
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  dynamicId: number;
  setDynamicId: React.Dispatch<React.SetStateAction<number>>;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  modalId: number;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
}

//home one future data type
export type TFuture = {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
  tagName: string;
  color: string
}
//personal-portfolio pricing-type
type TPricingList = {
  id: number;
  listName: string;
}
export type TPricing = {
  id: number;
  pricingTitle: string;
  desc: string;
  price: number;
  pricingList: TPricingList[];
  activeClass?: string;
  btnColor?: string;
}
//blog data type 
export type TBlog = {
  id: number;
  image: StaticImageData;
  date: string;
  month?: string;
  blogTitle: string;
  desc?: string;
  blogTag?: string;
  authorName?: string;
  desination?: string;
  wowDelay?: string;
  authorImg?: StaticImageData;
  comment?: number;
  videoId?:string;
}
//brand data type
export type TBrand = {
  id: number;
  image: StaticImageData,
  wowDelay?: string;
  imageWidth?: number;
  imageHeight?: number;
}
//Team data type
type TSocial = {
  id: number;
  icon: string;
  url: string
}
export type TTeam = {
  id: number;
  image: StaticImageData;
  authorName: string;
  desination: string;
  socialIcon: TSocial[];
  wowDelay?: string;
}
// element service data type 
export type TService = {
  id: number;
  wowDelay: string;
  icon: string;
  title: string;
  desc: string;
}
//portfolio element data type 
export type TPortfolio = {
  id: number;
  image: StaticImageData;
  tagName: string;
  title: string;
  style?: string;
  wowDelay?: string;
}
//counter data type
export type TCounter = {
  id: number;
  cunterNum: number;
  image?: StaticImageData;
  skillName?: string;
  bgColor?: string;
  wowDelay?: string;
  text?: string;
  icon?: string;
  desc?: string
}
export interface IBlogDataType {
  id: number;
  img: StaticImageData;
  smallImg: StaticImageData;
  largeImg: StaticImageData;
  isModal?: boolean;
  date: number;
  month: string;
  author: string;
  comment: number;
  blogTitle: string;
  details: string;
}

interface IcandidateSortDetails {
  id: number;
  icon: string;
  title: string;
  value: string;
}
interface IcandidateProfile {
  label: string;
  value: string | number;
}

export interface IeducationData {
  degree: string;
  duration: string;
  university?: string;
  conservatory?: string;
  lawSchool?: string;
  businessSchool?: string;
  description: string;
}
export interface IworkExperienceData {
  companyName: string;
  duration: string;
  position: string;
  description: string;
  icon: string;
}

export interface IcadidateData {
  id: number;
  img: StaticImageData;
  title: string;
  subTitle: string;
  location: string;
  sallaryStart: number;
  sallaryEnd: number;
  tags: string[];
  candidateSortDetails: IcandidateSortDetails[];
  candidateProfile: IcandidateProfile[];
  educationData: IeducationData[]
  workExperienceData: IworkExperienceData[]
}

// team interface

interface SocialMedia {
  icon: string;
  links: string;
}

export interface ITeamInterface {
  id: number;
  img: StaticImageData;
  name: string;
  title: string;
  social: SocialMedia[];
}

// faq interface
export interface IFaqInterface {
  id: number;
  title: string;
  detaiils: string;
}
// pricing data

interface PricingItem {
  class: string;
  tite: string; // Note: It seems like there's a typo in the property name, correcting it to "title"
}

export interface IPricingPlan {
  id: number;
  pack: "monthly" | "yearly";
  plan: string;
  price: number;
  offer: string;
  pricingList: PricingItem[];
  fullPack?: boolean;
}


// 