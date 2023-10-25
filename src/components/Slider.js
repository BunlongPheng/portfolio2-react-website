import React, { useState } from 'react';
import styled from 'styled-components';
import leftArrow from '../img/left-arrow.png';
import rightArrow from '../img/right-arrow.png';

const StyledItemBox = styled.div`
  border: 1px solid white;
  position: relative;
  width: 100%;
  height: 20rem;
  box-sizing: border-box;
  margin: 5rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;

  .slider-items-box {
    position: relative;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    transition: 0.5s;
  }

  .slider-item {
    display: inline-block;
    position: relative;
    border: 10px solid whitesmoke;
    width: 20rem;
    height: 20rem;
    margin: 0 2rem;
    border-radius: ${(props) => props.borderRadius};
    transition: 0.5s;
    overflow: hidden;
  }

  .img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }

  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 20vh;
    background: none;
    border: none;
    outline: none;
    z-index: 50;
    transition: 0.5s;

    &:hover {
      background: none;
      cursor: pointer;
    }
    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }
`;

function Slider({ items, borderRadius }) {
  let sliderArr = items;
  const [x, setX] = useState(0);
  const goLeft = () => {
    if (x <= (sliderArr.length / 3) * 100) {
      setX(x + 100);
    } else {
      setX(-x);
    }
  };
  const goRight = () => {
    if (x >= (sliderArr.length / 3) * -100) {
      setX(x - 100);
    } else {
      setX(-x);
    }
  };

  const RenderItems = sliderArr.map((item, index) => {
    return (
      <div
        key={index}
        className="slider-item"
        style={{ transform: `translateX(${x}%)` }}
      >
        <img className="img" src={item}></img>
      </div>
    );
  });

  return (
    <StyledItemBox className="slider" borderRadius={borderRadius}>
      <button className="btn btn--left" onClick={goLeft}>
        <img src={leftArrow} alt="left-arrow" />
      </button>
      <div className="slider-items-box flex-row">{RenderItems}</div>
      <button className="btn btn--right" onClick={goRight}>
        <img src={rightArrow} alt="right-arrow" />
      </button>
    </StyledItemBox>
  );
}

export default Slider;
