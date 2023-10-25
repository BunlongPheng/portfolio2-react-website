import React from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';

const StyledSection = styled.section`
  .card {
    margin-top: 10rem;

    @include flex-row;

    &__group {
      border: 0.5px solid lightgray;
      border-radius: 0.5rem;
      height: 35rem;
      width: 30rem;
      text-align: center;

      &:not(:last-child) {
        margin-right: 5rem;
      }
    }

    &__container {
      height: 100%;
    }

    &__picture {
      background-size: cover;
      height: 50%;
    }

    &__btn {
      margin-top: 2rem;
      display: inline-block;
    }
  }
`;

const Card = () => {
  const cardGroup = [
    {
      backgroundPic: 'Grey',
      heading: 'Social Proof 1',
      description: 'Credibility, Serious Business 1',
    },
    {
      backgroundPic: 'Lightblue',
      heading: 'Social Proof 2',
      description: 'Credibility, Serious Business 2',
    },
    {
      backgroundPic: 'Blue',
      heading: 'Social Proof 3',
      description: 'Credibility, Serious Business 3',
    },
    {
      backgroundPic: 'Darkblue',
      heading: 'Social Proof 4',
      description: 'Credibility, Serious Business 4',
    },
    {
      backgroundPic: 'black',
      heading: 'Social Proof 5',
      description: 'Credibility, Serious Business 5',
    },
  ];

  const renderCardGroup = cardGroup.map((data, key) => {
    const cardPic = {
      backgroundImage: `linear-gradient(to right bottom, ${data.backgroundPic}, white)`,
    };

    return (
      <StyledSection>
        <div key={key} className="card__group">
          <div className="card__container">
            <div className="card__picture" style={cardPic}>
              picture
            </div>
            <h3 className="card__heading heading-tertiary-blue--main">
              {data.heading}
            </h3>
            <h3 className="card__description heading-tertiary-blue--sub">
              {data.description}
            </h3>
            <a href="#" className="btn card__btn">
              Button
            </a>
          </div>
        </div>
      </StyledSection>
    );
  });

  return <div className="card">{renderCardGroup}</div>;
};

export default Card;
