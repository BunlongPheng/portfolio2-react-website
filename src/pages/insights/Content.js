import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import ImgTitleText from './ImgTitleText';
import './style/insights.scss';

const StyledSection = styled.section`
  .btn {
    &--caltegory {
      color: ${variables.colorPrimary};
      background-color: ${variables.colorWhite};
      width: 23%;

      &:hover {
        color: ${variables.colorWhite};
        background-color: ${variables.colorSecondary};
        box-shadow: none;
        transform: translateY(0);
        opacity: 1;
      }

      &:active {
        transform: translateY(0);
      }
    }

    &--sort {
      margin: 2rem;
      color: ${variables.colorPrimary};
      background-color: ${variables.colorWhite};
      width: 20rem;
      float: right;
      border: 1px solid ${variables.colorPrimary};

      &:hover {
        box-shadow: none;
        transform: translateY(0);
        opacity: 1;
      }
      &:active {
        transform: translateY(0.1rem);
      }
    }
  }
`;

const Content = () => {
  const [category, setCategory] = useState(0);

  return (
<StyledSection>
    <div className="container-contentPage">
      <h1 className="heading-primary--sub">Insights</h1>
      <h2 className="heading-secondary--main">Company Resources</h2>
      <p id="text" className="text-content-insights">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus. Donec sed odio dui. Nullam quis
        risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Cras sit amet
        nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </p>
      <div className="nav-bar-insights">
        <div className="categoryBox-insights">
          <div className="btn btn--caltegory" onClick={() => setCategory(0)}>
            Industry Trends
          </div>
          <div className="btn btn--caltegory" onClick={() => setCategory(1)}>
            News
          </div>
          <div className="btn btn--caltegory" onClick={() => setCategory(2)}>
            Company Future Planning
          </div>
          <div className="btn btn--caltegory" onClick={() => setCategory(3)}>
            Emerging Technologies
          </div>
        </div>
        <div className="btn btn--sort">Sort: Date &#x25BC;</div>
      </div>
      <ImgTitleText category={category} />
    </div>
    </StyledSection>
  );
};

export default Content;
