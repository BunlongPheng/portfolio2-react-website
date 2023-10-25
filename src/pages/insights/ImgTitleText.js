import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import ImgTitleTextCol from '../../components/ImgTitleTextCol';
import { content } from './CategoryData';

const StyledDiv = styled.div`
  width: 100%;
  height: 4rem;
  position: relative;

  .btns-box {
    position: absolute;
    right: 5rem;
  }

  .page-btn {
    height: 2.8rem;
    width: 2.8rem;
    text-align: center;
    color: ${variables.colorPrimary};
    display: inline-block;
    margin: 0.5rem;
    font-weight: 700;
    transition: all 0.2s;
    cursor: pointer;

    &--num {
      border: 0.1rem solid ${variables.colorPrimary};
      border-radius: 10rem;

      &--${(props) => props.curPageNum} {
        color: ${variables.colorWhite};
        background-color: ${variables.colorPrimary};
      }
    }

    &:hover {
      color: ${variables.colorWhite};
      background-color: ${variables.colorPrimary};
      border: 1px solid ${variables.colorPrimary};
      transform: translateY(-0.1rem);
    }

    &:active {
      transform: translateY(0.1rem);
    }
  }
`;

const ImgTitleText = (props) => {
  const [curPageNum, setCurPageNum] = useState(1);
  let category = content[props.category];

  useEffect(() => {
    setCurPageNum(1);
  }, [category]);

  const numOfPages = Math.ceil(category.length / 9);
  const contentOnDisplay = category.slice(curPageNum * 9 - 9, curPageNum * 9);

  const pageBtns = () => {
    let pageBtns = [];
    for (let i = 1; i <= numOfPages; i++) {
      // if (numOfPages === curPageNum) {
      //   pageBtns.push(
      //     <div
      //       key={i - 1}
      //       className={`page-btn page-btn--num page-btn--num--${i - 1}`}
      //       onClick={() => setCurPageNum(i - 1)}
      //     >
      //       {i - 1}
      //     </div>
      //   );
      // }

      pageBtns.push(
        <div
          key={i}
          className={`page-btn page-btn--num page-btn--num--${i}`}
          onClick={() => {
            setCurPageNum(i);
            document
              .getElementById('text')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {i}
        </div>
      );
    }

    // if (numOfPages > 3 && numOfPages - curPageNum >= 3) {
    //   pageBtns.push(
    //     <div
    //       key="lastPage"
    //       className="page-btn page-btn--num"
    //       onClick={() => setCurPageNum(numOfPages)}
    //     >
    //       ...
    //     </div>
    //   );
    // } else if (numOfPages - curPageNum < 2) {
    //   pageBtns.unshift(
    //     <div
    //       key="firstPage"
    //       className="page-btn page-btn--num"
    //       onClick={() => setCurPageNum(1)}
    //     >
    //       ...
    //     </div>
    //   );
    // }

    return pageBtns;
  };

  return (
    <>
      <ImgTitleTextCol
        items={contentOnDisplay}
        titleColor="blue"
        btnColor="white"
      />
      <StyledDiv curPageNum={curPageNum}>
        <div className="btns-box">
          <div
            className="page-btn"
            style={{ display: curPageNum === 1 ? 'none' : 'inline-block' }}
            onClick={() => {
              setCurPageNum(curPageNum - 1);
              document
                .getElementById('text')
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            &#9664;
          </div>
          {pageBtns()}
          <div
            className="page-btn"
            style={{
              display: curPageNum === numOfPages ? 'none' : 'inline-block',
            }}
            onClick={() => {
              setCurPageNum(curPageNum + 1);
              document
                .getElementById('text')
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            &#9654;
          </div>
        </div>
      </StyledDiv>
    </>
  );
};

export default ImgTitleText;
