import React from 'react';
import styled from 'styled-components';
import variables from '../abstracts/variables';

const StyledForm = styled.div`
  .form {
    display: grid;
    grid-gap: 3rem;
    align-items: center;
    grid-template-columns: auto auto;
    background-color: ${variables.colorWhite};
    padding: 5rem;
    margin: 0 5rem;
    border-radius: 1rem;

    &__title {
      padding: 0;
      grid-column: 1 / span 2;
    }

    &__btnbox {
      width: 100%;
      grid-column: 1 / span 2;
    }

    &__btn {
      font-size: 1.5rem;
      width: 50%;
      padding: 1rem 0;
      color: ${variables.colorWhite};
      background-color: ${variables.colorSecondary};
      border: none;
    }
  }

  .input__group {
    display: inline-block;
    width: 100%;
    grid-column: 1 / span 2;
  }

  .label {
    display: block;
  }

  .input {
    width: 100%;
    height: 4.4rem;
    border: 1px solid ${variables.colorGreyDark};
    border-radius: 4px;

    &__form--details {
      width: 100%;
      height: 10rem;
    }

    &__form--label {
      display: block;
    }
  }
`;

const LiveChatForm = () => {
  return (
    <StyledForm>
      <form action="#" className="form">
        <div className="form__title heading-tertiary-blue--main">
          Live Chat now!
        </div>
        <div className="input__group">
          <label className="input__form--label" htmlFor="label name">
            Name
          </label>
          <input required className="input input__form--name" id="name"></input>
        </div>
        <div className="input__group">
          <label className="input__form--label" htmlFor="label type">
            Inquiry type
          </label>
          <select className="input input__form--type" id="type">
            <option value="A">AAAAAA</option>
            <option value="B">BBBBBB</option>
            <option value="C">CCCCCC</option>
          </select>
        </div>
        <div className="input__group">
          <label className="input__form--label" htmlFor="label type">
            How did you hear about us?
          </label>
          <select className="input input__form--type" id="type">
            <option value="A">AAAAAA</option>
            <option value="B">BBBBBB</option>
            <option value="C">CCCCCC</option>
          </select>
        </div>
        <div className="form__btnbox">
          <input
            type="submit"
            className="btn form__btn"
            value="Chat Now"
          ></input>
        </div>
      </form>
    </StyledForm>
  );
};

export default LiveChatForm;
