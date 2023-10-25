import React from 'react';
import styled from 'styled-components';
import variables from '../abstracts/variables';

const StyledForm = styled.form`
  height: 100%;
  display: grid;
  grid-gap: 3rem;
  align-items: center;
  grid-template-columns: auto auto;
  background-color: ${variables.colorWhite};
  padding: 5rem;
  border-radius: 1rem;

  .form {
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

      width: 100%;
      padding: 2rem 0;
      color: ${variables.colorWhite};
      background-color: ${variables.colorPrimary2};
      border: none;
    }
  }

  .input__group {
    display: inline-block;
    width: 100%;

    &:nth-last-child(3) {
      width: 100%;
      grid-column: 1 / span 2;
    }
  }

  .label {
    display: block;
  }

  .input {
    width: 100%;
    height: 4.4rem;
    border: 1px solid ${variables.colorGreyDark};
    border-radius: 4px;
    padding-left: 0.5rem;
    font-size: 1.5rem;

    &:focus {
      outline: none;
      border: 2px solid ${variables.colorPrimary};
    }

    &__form--details {
      width: 100%;
      height: 10rem;
    }

    &__form--label {
      display: block;
    }
  }
`;

const StyledCheckbox = styled.div`
  paddiing-left: 3rem;
  grid-column: 1 / span 2;

  .form {
    &__checkbox {
      display: none;

      &:checked ~ .form__checkmark-label {
        color: ${variables.colorPrimary2};
        font-weight: 700;

        & .form__checkmark {
          background-color: ${variables.colorPrimary2};
          border: 1.5px solid ${variables.colorPrimary2};

          &::after {
            opacity: 1;
          }
        }
      }
    }

    &__checkmark-label {
      position: relative;
      padding-left: 3rem;
      display: inline-block;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${variables.colorPrimary2};
        font-weight: 700;
      }

      &:hover .form__checkmark {
        border: 1.5px solid ${variables.colorPrimary2};
      }
    }

    &__checkmark {
      height: 1.5rem;
      width: 1.5rem;
      border: 1.5px solid ${variables.colorBlack};
      display: inline-block;
      background-color: ${variables.colorWhite};
      position: absolute;
      left: 0;
      top: 0.5rem;
      transition: all 0.2s;

      &::after {
        content: '';
        position: absolute;
        display: block;
        opacity: 0;
        left: 3px;
        top: -1px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
`;

const Form = () => {
  return (
    <StyledForm action="#" className="form">
      <div className="form__title heading-tertiary-blue--main">
        Leave your inquiry
      </div>
      <div className="input__group">
        <label className="input__form--label" htmlFor="name">
          Name
        </label>
        <input required className="input input__form--name" id="name"></input>
      </div>
      <div className="input__group">
        <label className="input__form--label" htmlFor="email">
          Email
        </label>
        <input
          required
          type="email"
          className="input input__form--email"
          id="email"
        ></input>
      </div>
      <div className="input__group">
        <label className="input__form--label" htmlFor="type">
          Inquiry type
        </label>
        <select className="input input__form--type" id="type">
          <option value="A">AAAAAA</option>
          <option value="B">BBBBBB</option>
          <option value="C">CCCCCC</option>
        </select>
      </div>
      <div className="input__group">
        <label className="input__form--label" htmlFor="phone">
          Phone
        </label>
        <input
          required
          type="tel"
          pattern="[0-9]{10}"
          className="input input__form--phone"
          id="phone"
        ></input>
      </div>
      <div className="input__group">
        <label className="input__form--label" htmlFor="details">
          Additional details
        </label>
        <input className="input input__form--details" id="details"></input>
      </div>

      <StyledCheckbox className="form__checkbox-group">
        <input
          required
          type="checkbox"
          className="form__checkbox"
          id="checkbox"
        ></input>
        <label htmlFor="checkbox" className="form__checkmark-label">
          <span className="form__checkmark"></span>I accept the privacy and
          terms
        </label>
      </StyledCheckbox>
      <div className="form__btnbox">
        <input
          type="submit"
          className="btn form__btn"
          value="Submit Request"
        ></input>
      </div>
    </StyledForm>
  );
};

export default Form;
