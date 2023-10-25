import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LiveChatBtn from '../../components/LiveChatBtn';
import InquiryLink from '../../components/InquiryLink';
import Content from './Content';

const Insights = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Content />
      <InquiryLink />
      <Footer />
      <LiveChatBtn />
    </div>
  );
};

export default Insights;
