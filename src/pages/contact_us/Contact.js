import React from 'react';
import Form from '../../components/Form';
//import LiveChatForm from '../../components/LiveChatForm';
import Map from './ContactMap';
import styled from 'styled-components';
import ContactProcedure from './ContactProcedure';
import { device } from '../../abstracts/mediaQueries';
import './style/contact-us.scss';


const Contact = () => {
  return (
    <div >
      <div className="text-box-contact">
        <h1 className="heading-tertiary-blue--main">
          Timely service delivery &amp; inovative solutions!!!
        </h1>
        <p className="text-contact">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus. Donec sed
          odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h1 className="heading-tertiary-blue--main">Call us</h1>
        <p className="text-contact">0800 1234 5678</p>
        <h1 className="heading-tertiary-blue--main">Email</h1>
        <p className="text-contact">mapss@mapss.com</p>
      </div>

      <div className="input-section flex-row">
        <div className="form-box">
          <Form />
        </div>

      </div>
      <ContactProcedure />
      <div className="map-box">
        <div className="text-box-contact">
          <h1 className="heading-tertiary-blue--main">Visit</h1>
          <p className="text-contact">MAPSS Link Sydney</p>
          <p className="text-contact">Address</p>
          <p className="text-contact">Address</p>
          <p className="text-contact">Address</p>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
