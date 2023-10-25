import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import MissionList from './MissionList';
import ImgTitleText from './ImgTitleText';
import FounderBlock from './FounderBlock';
import CompanyInfo from './CompanyInfo';
import Slider from '../../components/Slider';
import Achievement from './Achievement';
import TeamCarousel from './TeamCarousel';
import LiveChatBtn from '../../components/LiveChatBtn';
import InquiryLink from '../../components/InquiryLink';
import img1 from '../../img/sidepage-help1.jpg';
import img2 from '../../img/contact-us-procedure-2.jpg';
import './style/about-us.scss';


const AboutUs = () => {
  return (
    <div>
      <LiveChatBtn />
      <NavBar />
      <Header />
      <CompanyInfo />
      <MissionList />
      <FounderBlock />
      <Slider items={[img1, img2, img1, img2, img1]} />
      <ImgTitleText />
      <TeamCarousel />
      <Achievement />
      <InquiryLink />
      <Footer />
    </div>
  );
};

export default AboutUs;
