import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from '../abstracts/variables';

const StyledDiv = styled.div`
  background-image: linear-gradient(
    to right,
    #40b0e5,
    #2f84b9,
    #2b4c83,
    #27316b
  );
  width: 60%;
  text-align: center;
  border-radius: 1rem;
  margin: 10rem 0 10rem -3rem;
  transition: all 0.3s;
  padding: 2rem;

  .heading-secondary--main {
    width: 100%;
    color: ${variables.colorWhite};
    padding-left: 3rem;
    cursor: pointer;
  }
  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 6px, rgba(0, 0, 0, 0.23) 2px 3px 6px;
    margin: 10rem 0 10rem -1rem;
  }
`;

const InquiryLink = () => {
  return (
    <StyledDiv>
      <Link to="/contact_us" style={{ textDecoration: 'none' }}>
        <h3 className="heading-secondary--main">
          Click here to send an inquiry!
        </h3>
      </Link>
    </StyledDiv>
  );
};

export default InquiryLink;
