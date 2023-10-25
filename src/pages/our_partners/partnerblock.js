import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import leftArrow from '../../img/left-arrow.png';
import rightArrow from '../../img/right-arrow.png';

const StyledSection = styled.section`
  height: 60rem;
  background-image: linear-gradient(
    to top right,
    rgba(64, 176, 229, 1),
    rgb(39, 49, 107)
  );
  margin-top: 10rem;
  text-align: center;
  padding: 0.01rem;

  .block {
    &__box {
      display: inline-block;
      background-color: ${variables.colorWhite};
      height: 30rem;
      width: 30rem;
      margin: 5rem 2rem;
      border-radius: 0.5rem;
      overflow: hidden;
      transition: all 0.2s;
      position: relative;
      transform: translateX(${(props) => props.x}%);
      transition: all 1s;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0.2rem 1rem 0.1rem ${variables.colorBlack};
      }

      &:hover .block__picture {
        background-image: none !important;
        background-color: ${variables.colorPrimary};
        opacity: 0.9;
      }

      &:hover .block__text {
        color: ${variables.colorWhite};
        font-size: 2.8rem;
      }
    }

    &__picture {
      height: 30rem;
      width: 30rem;
      z-index: -20;
      transition: all 0.2s;
    }

    &__text {
      position: absolute;
      width: 30rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${variables.colorPrimary};
      font-size: 2.5rem;
      font-weight: 700;
      transition: all 0.2s;
    }
  }

`;

const Arrow = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  float: ${(props) => (props.left ? 'left' : 'right')};
  background-image: url(${(props) => (props.left ? leftArrow : rightArrow)});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  margin: 17.5rem 10rem;
  z-index: 50;
  transition: all 0.2s;

  &:hover {
    background-color: ${variables.colorGreyLight2};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(${variables.colorBlack}, 0.15);
    transform: translateY(2px);
  }
`;

const blockList = [
  {
    backgroundPic: 'black',
    text: 'APPY',
  },
  {
    backgroundPic: 'lightblue',
    text: 'MARCY',
  },
  {
    backgroundPic: 'blue',
    text: 'TELSA',
  },
  {
    backgroundPic: 'darkblue',
    text: 'ELSA',
  },

  {
    backgroundPic: 'darkblue',
    text: 'JERRY',
  },
];

const renderBlockList = blockList.map((data, key) => {
  const blockPic = {
    backgroundImage: `linear-gradient(to right bottom, white, white)`,
  };

  return (
    <div key={key} className="block__box">
      <div className="block__picture" style={blockPic}></div>
      <p className="block__text">{data.text}</p>
    </div>
  );
});

const PartnerLinks = () => {
  const [x, setX] = useState(0);
  const goLeft = () => {
    if (x <= (blockList.length / 3) * 100) {
      setX(x + 100);
    } else {
      setX(-x);
    }
  };
  const goRight = () => {
    if (x >= (blockList.length / 3) * -100) {
      setX(x - 100);
    } else {
      setX(-x);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      goRight();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [x]);

  return (
    <StyledSection x={x}>
      <h1 className="heading-tertiary-white--main">Our Business Partners</h1>
      <div className="carousel">
        <Arrow left onClick={goLeft}></Arrow>
        <div className="shade">
          <div className="container-partnerBlocks">{renderBlockList}</div>
        </div>

        <Arrow right onClick={goRight}></Arrow>
      </div>
    </StyledSection>
  );
};

export default PartnerLinks;
