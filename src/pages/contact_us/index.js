import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Header from '../../components/Header/Header';
import Contact from './Contact';
import Footer from '../../components/Footer';
import LiveChatBtn from '../../components/LiveChatBtn';

const contactUs = () => {
  return (
    <div>
      <LiveChatBtn />
      <NavBar />
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default contactUs;
