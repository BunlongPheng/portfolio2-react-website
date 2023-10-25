import React, { useState } from 'react';
import styled from 'styled-components';
import leftArrow from '../../img/left-arrow.png';
import rightArrow from '../../img/right-arrow.png';
import img1 from '../../img/contact-us-procedure-2.jpg';
import { device } from '../../abstracts/mediaQueries';

const StyledSection = styled.section`
  height: 50rem;
  width: 100%;
  margin-top: 10rem;

  @media ${device.laptopXL} {
    height: 95rem;
  }

  @media ${device.mobileXL} {
    height: 100rem;
  }

  @media ${device.mobileL} {
    height: 110rem;
  }

  @media ${device.mobileM} {
    height: 120rem;
  }

  .heading-secondary--main {
    text-align: center;
  }

  .container {
    width: 100%;
    height: 80%;
    position: relative;
    margin: auto auto;
    padding: 0 5rem;

    @media ${device.mobileXL} {
      padding: 0 auto;
    }
    @media ${device.mobileM} {
      padding: 0 1rem;
    }
  }

  .flex-row {
    width: 90%;
    display: inline-flex;

    @media ${device.mobileXL} {
      width: 85%;
    }
  }

  .shlist-item {
    width: 50rem;
    height: 33.2rem;
    margin: 5rem 8rem;
    position: relative;

    @media ${device.mobileXL} {
      height: auto;
      margin: 2rem 5rem;
    }
  }

  .item-picture-box {
    height: 12rem;
    width: 18rem;
    position: relative;
    overflow: hidden;

    @media ${device.mobileXL} {
      width: 100%;
    }
  }

  .item-picture {
    height: auto;
    max-width: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .item-name {
    display: inline-block;
    position: absolute;
    padding: 0;
    top: 3rem;
    right: 0;

    @media ${device.mobileXL} {
      position: relative;
      display: block;
      top: 0;
    }
  }

  .item-title {
    display: inline-block;
    position: absolute;
    top: 8rem;
    right: 0;

    @media ${device.mobileXL} {
      position: relative;
      display: block;
      top: 0;
    }
  }

  .item-text {
    position: absolute;
    bottom: 2rem;

    @media ${device.mobileXL} {
      position: relative;
      display: block;
      bottom: 0;
    }
  }
`;

const Arrow = styled.div`
  display: inline-block;
  width: 3rem;
  height: 100%;
  background-image: url(${(props) => (props.left ? leftArrow : rightArrow)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.2s;
  vertical-align: top;

  @media ${device.mobileXL} {
    width: 2rem;
  }

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:active {
    transform: translateY(0.2rem);
  }
`;
const shList = [
  {
    picture: img1,
    name: '1 Barbara Domingos',
    title: 'UI | UX Designer Intern',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
  {
    picture: img1,
    name: '2 Barbara Domingos',
    title: 'UI | UX Designer Intern',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
  {
    picture: img1,
    name: '3 Barbara Domingos',
    title: 'UI | UX Designer Intern',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
  {
    picture: img1,
    name: '4 Barbara Domingos',
    title: 'UI | UX Designer Intern',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
  {
    picture: img1,
    name: '5 Barbara Domingos',
    title: 'UI | UX Designer Intern',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
  {
    picture: img1,
    name: '6 Barbara Domingos',
    title: 'UI | UX Designer Intern',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
];

const StakeholderList = () => {
  const [curPageNum, setCurPageNum] = useState(1);
  const pageNumTotal = shList.length / 2;
  const shOnDisplay = shList.slice(curPageNum * 2 - 2, curPageNum * 2);

  const renderShList = shOnDisplay.map((item, key) => {
    return (
      <div className="shlist-item" key={key}>
        <div className="item-picture-box">
          <img className="item-picture" src={item.picture}></img>
        </div>
        <h3 className="item-name heading-tertiary-blue--main">{item.name}</h3>
        <div className="item-title">{item.title}</div>
        <div className="item-text">{item.text}</div>
      </div>
    );
  });

  return (
    <StyledSection>
      <h1 className="heading-secondary--main">
        Some words from our stakeholders
      </h1>
      <div className="container">
        <Arrow
          left
          onClick={() =>
            curPageNum > 1
              ? setCurPageNum(curPageNum - 1)
              : setCurPageNum(pageNumTotal)
          }
        ></Arrow>
        <div className="flex-row">{renderShList}</div>
        <Arrow
          right
          onClick={() =>
            pageNumTotal > curPageNum
              ? setCurPageNum(curPageNum + 1)
              : setCurPageNum(1)
          }
        ></Arrow>
      </div>
    </StyledSection>
  );
};

export default StakeholderList;
