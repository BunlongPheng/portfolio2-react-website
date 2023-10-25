import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/Header/NavBar';
import LiveChatBtn from '../../components/LiveChatBtn';
import Description from '../../pages/our_services/description';
import InquiryLink from '../../components/InquiryLink';
import './style/our-services.scss';

const OurServices = () => {
  return (
    <div>
      <LiveChatBtn />
      <NavBar />
      <Header />
      <Description />
      <InquiryLink />
      <Footer />
    </div>
  );
};

export default OurServices;
