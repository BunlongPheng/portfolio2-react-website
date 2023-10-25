//ImgTitleTextCol must take titleColor, btnColor, items as props
// items = [{titleMain, titleSub, img, text}]

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .img-box {
    margin-top: 5rem;

    &__group {
      height: 100%;
      width: 30%;
      margin: 5rem 2rem;
    }

    &__container {
      width: 40rem;
      height: 45rem;
      margin: 0 auto;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }

    &__text {
      height: 20rem;
      color: ${(props) => (props.titleColor === 'white' ? 'white' : 'black')};
      padding: 0 2rem;
      line-height: 2.8rem;
      max-height: 8.4rem; /* line-height * 3 */
      overflow: hidden;
    }
  }
  .btn {
    margin: 3rem 2rem;
  }
`;

const ImgTitleTextCol = (props) => {
  const RenderItems = props.items.map((data, key) => {
    return (
      <div className="img-box__group" key={key}>
        <h3 className={`heading-tertiary-${props.titleColor}--main`}>
          {data.titleMain}
        </h3>
        <div className="img-box__container">
          <img className="img-box__img" src={data.img}></img>
        </div>
        <h3 className={`heading-tertiary-${props.titleColor}--main`}>
          {data.titleSub}
        </h3>
        <p className="img-box__text">{data.text}</p>
        <a href="#" className={`btn btn--${props.btnColor}`}>
          Learn More
        </a>
      </div>
    );
  });

  return (
    <StyledDiv className="img-box flex-row" titleColor={props.titleColor}>
      {RenderItems}
    </StyledDiv>
  );
};

export default ImgTitleTextCol;
