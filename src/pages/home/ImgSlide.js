import React from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import BackgoundImg from '../../img/Path-big.png';
import { device } from '../../abstracts/mediaQueries';

const StyledSection = styled.section`
  margin-top: 10rem;
  height: 38rem;
  position: relative;
  overflow: hidden;

  @media ${device.laptopXL} {
    height: 25rem;
  }
  @media ${device.laptop} {
    height: 20rem;
  }
  @media ${device.tablet} {
    height: 15rem;
  }

  @media ${device.tablet} {
    height: 15rem;
  }

  @media ${device.mobileXL} {
    display: none;
  }

  .container {
    display: inline-block;
    height: 0;
    width: 70%;
    padding-top: 70%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .background {
    object-fit: contain;
    height: auto;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .item {
    display: inline-block;
    height: 0;
    width: 11%;
    padding-top: 11%;
    border-radius: 30rem;
    position: absolute;
    text-align: center;
    background-color: ${variables.colorGreyLight1};

    &--0 {
      left: 1.7%;
      top: 1.6%;
    }
    &--1 {
      left: 36%;
      top: 1.6%;
    }
    &--2 {
      left: 70.2%;
      top: 1.6%;
    }
    &--3 {
      left: 18.8%;
      top: 9.5%;
    }
    &--4 {
      left: 53.1%;
      top: 9.5%;
    }
    &--5 {
      left: 87.4%;
      top: 9.5%;
    }
  }

  .text {
    width: 90%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-wrap: break-word;
  }
`;

const circles = [
  {
    text: 'Startup',
    color: 'white',
  },
  {
    text: 'Business',
    color: 'grey',
  },
  {
    text: 'Technology',
    color: 'lightblue',
  },
  {
    text: 'Analysis',
    color: 'blue',
  },
  {
    text: 'Planning',
    color: 'darkblue',
  },
  {
    text: 'Development',
    color: 'black',
  },
];

const renderCircles = circles.map((item, key) => {
  return (
    <div className={`item item--${key}`} key={key}>
      <h3 className="text">{item.text}</h3>
    </div>
  );
});

const ImgSlide = () => {
  return (
    <StyledSection>
      <div className="container">
        <img className="background" src={BackgoundImg}></img>
        {renderCircles}
      </div>
    </StyledSection>
  );
};

export default ImgSlide;
