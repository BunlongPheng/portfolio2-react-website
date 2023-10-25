import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/Header/NavBar';
import PartnerList from '../../pages/our_partners/Par_list';
import PartnerLinks from '../../pages/our_partners/partnerblock';
import EcoHead from '../../pages/our_partners/Ecosystem';
import MapContainer from '../../pages/our_partners/Par_Map';
import LiveChatBtn from '../../components/LiveChatBtn';
import './style/our-partners.scss';


const Partners = () => {
  return (
    <div>
      <LiveChatBtn />
      <NavBar />
      <Header />
      <PartnerList />
      <PartnerLinks />
      <EcoHead />
      <MapContainer />
      <Footer />
    </div>
  );
};

export default Partners;
