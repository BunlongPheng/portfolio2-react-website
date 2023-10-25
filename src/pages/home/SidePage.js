import React from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import NavBar from '../../components/Header/NavBar';
import Header from '../../components/Header/Header';
import ContactProcedure from '../contact_us/ContactProcedure';
import Form from '../../components/Form';
import LiveChatBtn from '../../components/LiveChatBtn';
import Footer from '../../components/Footer';
import ImgTitleTextCol from '../../components/ImgTitleTextCol';
import { type, content } from './SidePageContent';
import './style/home.scss';


const SidePage = () => {
  let contentOnDisplay = [];
  const path = window.location.pathname.split('/');
  const pathType = path[path.length - 1];

  switch (pathType) {
    case 'startup_founder':
      contentOnDisplay = [type[0], content[0]];
      break;
    case 'sme_business_owner':
      contentOnDisplay = [type[1], content[1]];
      break;
    case 'in-house_counsel':
      contentOnDisplay = [type[2], content[2]];
      break;
    case 'technology':
      contentOnDisplay = [type[3], content[3]];
      break;
  }

  return (
    <div>
      <NavBar />
      <Header />

      <div className="container-textBox-SlidePage">
        <h1 className="heading-secondary--main heading-slidePage">
          {contentOnDisplay[0].titleMain}
        </h1>
        <div className="text-box-slidePage__description">
          <h2 className="heading-tertiary-blue--main">
            {contentOnDisplay[0].titleSub}
          </h2>
          <p className="text-box-slidePage__text">{contentOnDisplay[0].text}</p>
        </div>
        <ImgTitleTextCol
          items={contentOnDisplay[1]}
          titleColor="blue"
          btnColor="orange"
        />
      </div>
      <div className="container-formBox-SlidePage">
        <div className="form-box-slidePage">
          <Form />
        </div>
      </div>
      <ContactProcedure />
      <LiveChatBtn />
      <Footer />
    </div>
  );
};

export default SidePage;
