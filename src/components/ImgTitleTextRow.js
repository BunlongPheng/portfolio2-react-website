//ImgTitleTextRow takes titleMain, titleSub, img, text as props

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 5rem;

  .img-box {
    width: 50%;
    display: inline-block;
    padding: 2rem;

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }

  .text-box {
    width: 50%;
    display: inline-block;
    padding: 2rem;

    &__text {
      padding-left: 2rem;
    }
  }

  .btn {
    margin: 3rem 2rem;
  }
`;

const ImgTitleTextRow = (props) => {
  return (
    <StyledDiv className="container">
      <h2 className="heading-secondary--main">{props.titleMain}</h2>
      <div className="container__content flex-row">
        <div className="img-box">
          <img className="img-box__img" src={props.img}></img>
        </div>
        <div className="text-box">
          <h3 className="heading-tertiary-blue--main">{props.titleSub}</h3>
          <p className="text-box__text">{props.text}</p>
          <a className="btn btn--orange">Learn More</a>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ImgTitleTextRow;
