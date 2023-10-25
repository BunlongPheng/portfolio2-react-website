import React from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import img1 from '../../img/contact-us-procedure.png';
import img2 from '../../img/contact-us-procedure-2.jpg';

const StyledDiv = styled.div`
  height: 70rem;
  background-image: linear-gradient(
    to top right,
    rgba(0, 13, 25, 1),
    rgba(0, 72, 140, 1)
  );
  margin-top: 15rem;
  padding: 5rem 10rem;

  .img-box {
    margin: 5rem auto;
  }

  .img-left {
    height: 40rem;
    width: 50%;
  }

  .img-right {
    height: 40rem;
    width: 50%;
    border-radius: 3rem;
    object-fit: cover;
  }
`;

const ContactProcedure = () => {
  return (
    <StyledDiv className="procedure-box">
      <h1 className="heading-tertiary-white--main">
        What happens after you contact us?
      </h1>
      <div className="img-box">
        <img className="img-left" src={img1} alt="consult procedure"></img>
        <img className="img-right" src={img2} alt="consult procedure"></img>
      </div>
    </StyledDiv>
  );
};

export default ContactProcedure;
