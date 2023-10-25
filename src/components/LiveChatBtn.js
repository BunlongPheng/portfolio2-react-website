import React from 'react';
import styled from 'styled-components';
import variables from '../abstracts/variables';

const StyledBtn = styled.div`
  position: fixed;
  height: 25rem;
  width: 25rem;
  border-radius: 30rem;
  bottom: 10rem;
  right: -15rem;
  z-index: 100;
  background-image: linear-gradient(
    to top,
    rgba(153, 63, 8, 1),
    rgba(255, 98, 0, 1),
    rgba(255, 170, 0, 1)
  );
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) -3px 3px 6px,
      rgba(0, 0, 0, 0.23) -3px 3px 6px;
    transform: translateX(-1.5rem);
  }

  .text {
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    display: inline-block;
    transfrom: translate(-6rem, 10rem) rotate(-90deg);
    -webkit-transform: translate(-6rem, 10rem) rotate(-90deg);
    -moz-transform: translate(-6rem, 10rem) rotate(-90deg);
    cursor: pointer;
  }
`;

const popup = () => {
  window.open('/live_chat', 'live-chat', 'width=400,height=500,scrollbars=no');
};

const LiveChatBtn = () => {
  return (
    <StyledBtn onClick={popup}>
      <label className="text">Live Chat</label>
    </StyledBtn>
  );
};

export default LiveChatBtn;
