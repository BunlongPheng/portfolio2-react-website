import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
//import Card from './Card';
import ImgSlide from './ImgSlide';
import BlockLinks from './BlockLinks';
import ServiceList from './ServiceList';
import StakeholderList from './StakeholderList';
import LiveChatBtn from '../../components/LiveChatBtn';
import ContactForm from './Form';

const Home = () => {
  return (
    <div>
      <NavBar />
      <LiveChatBtn />
      <Header />
      <ImgSlide />
      <BlockLinks />
      <ServiceList />
      <StakeholderList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
