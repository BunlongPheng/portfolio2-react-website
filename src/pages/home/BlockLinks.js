import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import { device } from '../../abstracts/mediaQueries';


//all @media cannot put in saas as it is derived from JS file
const StyledSection = styled.section`
  height: 60rem;
  background-image: linear-gradient(
    to top right,
    rgba(64, 176, 229, 1),
    rgb(39, 49, 107)
  );
  margin-top: 10rem;
  text-align: center;

  @media ${device.laptop} {
    height: 85rem;
  }

  @media ${device.tablet} {
    height: 60rem;
  }

  @media ${device.mobileXL} {
    height: 45rem;
  }

  @media ${device.mobileL} {
    height: 30rem;
  }

  .block {
    &__box {
      margin-top: 5rem;
      margin-right: 3rem;
      height: 25rem;
      width: 25rem;
      position: relative;
      border-radius: 0.5rem;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s;

      @media ${device.tablet} {
        height: 15rem;
        width: 20rem;
        margin-top: 2rem;
        margin-right: 2rem;
      }

      @media ${device.mobileXL} {
        height: 10rem;
        width: 15rem;
        margin-top: 2rem;
        margin-right: 2rem;
      }

      @media ${device.mobileL} {
        height: 5rem;
        width: 10rem;
      }

      &:hover {
        box-shadow: 0 0.2rem 1rem 0.1rem ${variables.colorBlack};
      }

      &:hover .block__picture {
        background-image: none !important;
        background-color: ${variables.colorPrimary};
        opacity: 0.6;
      }

      &:hover .block__text {
        color: ${variables.colorWhite};
        font-size: 2.8rem;

        @media ${device.mobileXL} {
          font-size: 1.6rem;
        }
      }
    }

    &__picture {
      height: 30rem;
      width: 30rem;
      z-index: -20;
      transition: all 0.3s;
    }

    &__text {
      position: absolute;
      width: 18rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${variables.colorPrimary};
      font-size: 2.5rem;
      font-weight: 700;
      transition: all 0.3s;

      @media ${device.mobileXL} {
        width: 10rem;
        font-size: 1.4rem;
      }
    }
  }

  .flex-row {
    margin: auto 0;
    justify-content: space-evenly;

    @media ${device.laptop} {
      margin: auto auto;
      width: 65%;
    }
  }
`;

const blockList = [
  {
    backgroundPic: 'black',
    text: 'Startup Founder',
    url: '/sp/startup_founder',
  },
  {
    backgroundPic: 'lightblue',
    text: 'SME Business Owner',
    url: '/sp/sme_business_owner',
  },
  {
    backgroundPic: 'blue',
    text: 'In-house Counsel',
    url: '/sp/in-house_counsel',
  },
  {
    backgroundPic: 'darkblue',
    text: 'Technology',
    url: '/sp/technology',
  },
];

const renderBlockList = blockList.map((data, key) => {
  const blockPic = {
    backgroundImage: `linear-gradient(to right bottom, white, white)`,
  };

  return (
    <Link to={data.url} key={key}>
      <div className="block__box">
        <div className="block__picture" style={blockPic}></div>
        <p className="block__text">{data.text}</p>
      </div>
    </Link>
  );
});

const BlockLinks = () => {
  return (
    <StyledSection>
      <h1 className="heading-tertiary-white--main">
        Learn how we can help your business
      </h1>
      <h1 className="heading-tertiary-white--main">
        Select what best describes you:
      </h1>
      <div className="flex-row">{renderBlockList}</div>
    </StyledSection>
  );
};

export default BlockLinks;
