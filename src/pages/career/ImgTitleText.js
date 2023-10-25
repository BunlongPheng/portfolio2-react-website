import React from 'react';
import styled from 'styled-components';
import ImgTitleTextCol from '../../components/ImgTitleTextCol';
import img1 from '../../img/sidepage-help1.jpg';
import img2 from '../../img/contact-us-procedure-2.jpg';
import img3 from '../../img/sidepage-help2.jpg';

const StyledDiv = styled.div`
  margin-top: 15rem;
  background-image: linear-gradient(
    to top right,
    rgba(0, 13, 25, 1),
    rgba(0, 72, 140, 1)
  );

  .container {
    width: 80%;
    margin: 0 auto;
  }

`;

const content = [
  {
    titleMain: 'Keep up to date',
    img: img1,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
  nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`,
  },
  {
    titleMain: 'Knowledge Resources',
    img: img2,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
  nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`,
  },
  {
    titleMain: 'Stay Connected',
    img: img3,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
  nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`,
  },
];

const ImgTitleText = () => {
  return (
    <StyledDiv>
      <div className="container">
        <ImgTitleTextCol items={content} titleColor="white" btnColor="orange" />
      </div>
    </StyledDiv>
  );
};

export default ImgTitleText;
