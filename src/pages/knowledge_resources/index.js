import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LiveChatBtn from '../../components/LiveChatBtn';
import InquiryLink from '../../components/InquiryLink';
import ResourcesLink from './ResourcesLink';

const KnowledgeResources = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <LiveChatBtn />
      <ResourcesLink />
      <InquiryLink />
      <Footer />
    </div>
  );
};

export default KnowledgeResources;
