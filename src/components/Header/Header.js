import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import variables from '../../abstracts/variables';
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';

const StyledSection = styled.section`
  margin-top: 15rem;
  position: relative;

  .header {
    &__picture {
      background-image: url(${(props) => props.backgroundImg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 50rem;
      position: relative;
    }

    &__text-box {
      width: 25%;
      padding: 10rem 10rem 2rem 10rem;
      position: relative;
      z-index: 2;
    }
  }

  .heading-primary {
    &--main {
      color: ${variables.colorPrimary};
      padding: 0;
    }
  }

  .text {
    color: ${variables.colorPrimary};
    padding: 0;
    padding-bottom: 3rem;
    font-size: 1rem;
    max-width: 25rem;
  }

  .heading-tertiary-blue {
    &--main {
      color: ${variables.colorPrimary3};
      padding: 0;
      font-size: 2rem;
      font-weight: 900;
    }
  }

  .dot__container {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 2;
  }

  .dot {
    height: 2rem;
    width: 2rem;
    border-radius: 30rem;
    background-color: ${variables.colorGreyLight2};
    display: inline-block;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &--${(props) => props.curImgNum + 1} {
      background-color: ${variables.colorGreyDark};
    }
  }

  .btn {
    margin-left: 10rem;
    position: relative;
    z-index: 2;
  }
`;

const backgroundImgs = [
  {
    img: banner1,
  },
  {
    img: banner2,
  },
  {
    img: banner3,
  },
];

const Header = () => {
  const [curImgNum, setCurImgNum] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (curImgNum >= backgroundImgs.length - 1) {
        setCurImgNum(0);
      } else {
        setCurImgNum(curImgNum + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [curImgNum]);

  return (
    <StyledSection
      className="header"
      backgroundImg={backgroundImgs[curImgNum].img}
      curImgNum={curImgNum}
    >
      <div className="header__picture">
        <div className="header__text-box flex-column">
          <h1>
            <span className="heading-tertiary-blue--main">
              Why are we different?
            </span>
            <span className="heading-primary--main">IDEAS</span>
            <p className="text">
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cumilation sociis natoque penatibus.
            </p>
          </h1>
        </div>
        <a href="#" className="btn btn--white">
          Learn More
        </a>
      </div>
      <div className="dot__container">
        <div
          className="dot dot--1"
          onClick={() => {
            setCurImgNum(0);
          }}
        ></div>
        <div
          className="dot dot--2"
          onClick={() => {
            setCurImgNum(1);
          }}
        ></div>
        <div
          className="dot dot--3"
          onClick={() => {
            setCurImgNum(2);
          }}
        ></div>
      </div>
    </StyledSection>
  );
};

export default Header;
