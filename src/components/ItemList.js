import React from 'react';
import styled from 'styled-components';
import variables from '../abstracts/variables';

const StyledSection = styled.section`
  background-color: $color-white;
  margin-top: 10rem;

  .img-wrapper {
    background-color: $color-white;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    padding: 0 5rem;
  }

  .service-description {
    &__pic {
      height: 40rem;
      width: 40rem;
      z-index: -20;
      opacity: 0.8;
      border-radius: 1rem;
    }

    &__item-box {
      &:not(:last-child) {
        margin-bottom: 15rem;
      }
    }

    &__title--img {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-75%, -50%);
      width: 50%;
    }

    &__text-box {
      width: 85rem;
      padding: 0 5rem;
    }

    &__text {
    }
  }

  .heading-secondary {
    &--main {
      text-align: center;
      margin-bottom: 5rem;
    }
  }

  .heading-tertiary-blue {
    &--main {
      color: ${variables.colorPrimary4};
      padding: 0;
      margin-bottom: 2rem;
    }
  }

  .btn {
    display: inline-block;
    margin-top: 3rem;
  }
`;

const renderList = (itemList) =>
  itemList.map((data, key) => {
    const picStyle = {
      backgroundColor: data.picture,
    };

    return (
      <div
        key={key}
        className="service-description__item-box flex-row"
        style={{ flexDirection: `${key % 2 === 1 ? 'row' : 'row-reverse'}` }}
      >
        <div className="img-wrapper">
          <div className="service-description__pic" style={picStyle}></div>
          <h2 className="heading-tertiary-white--main service-description__title--img">
            {data.title}
          </h2>
        </div>
        <div className="service-description__text-box">
          <h2 className="heading-tertiary-blue--main">{data.title}</h2>
          <div className="service-description__text">{data.text}</div>
          <a href="#" className="btn btn--white">
            Learn More
          </a>
        </div>
      </div>
    );
  });

const ItemList = ({ title, itemList }) => {
  return (
    <StyledSection className="service-description" title={title}>
      <h1 className="heading-secondary--main">{title}</h1>
      {renderList(itemList)}
    </StyledSection>
  );
};

export default ItemList;
