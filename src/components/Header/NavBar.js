import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mapssLogo from '../../img/MAPSS-Logo.png';
import variables from '../../abstracts/variables';
import { device } from '../../abstracts/mediaQueries';
import magnifierIcon from '../../img/magnifier.png';

const StyledSection = styled.section`
  background-color: ${variables.colorWhite};
  position: fixed;
  width: 100%;
  height: 15rem;
  top: 0;
  z-index: 100;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  .navigation {
    &__logo-box {
      position: absolute;
      left: 5rem;
      top: 50%;
      transform: translateY(-50%);
      height: 12rem;
      width: 10rem;
      display: block;

      &-img {
        height: 100%;
        object-fit: cover;
      }
    }

    &__container-1 {
      height: 50%;
      max-width: 75%;
      position: absolute;
      right: 5rem;
      align-items: flex-start;
      justify-content: flex-end;
      z-index: 200;

      @media ${device.tablet} {
        height: 30%;
      }

      & > * {
        margin-top: 2rem;
        margin-left: 2rem;
      }
    }

    &__language-dropdown {
      display: inline-block;
      color: ${variables.colorPrimary};
    }

    &__language-list {
      width: 90%;
      margin: auto auto;
      display: ${(props) => (props.dropdownOpen ? 'block' : 'none')};
      background-color: ${variables.colorWhite};
      text-align: center;
      overflow: hidden;
      box-shadow: 0 0 1rem 0.1rem ${variables.colorGreyDark};
      border-radius: 1rem;
      transform: translateY(0.5rem);
    }

    &__language-selected {
      //border-radius: 1rem; !important;
    }

    &__search-box {
      display: inline-block;
      position: relative;

      &-input {
        display: inline-block;
        width: 25rem;
        height: 4rem;
        margin-right: 1.5rem;
        border: 1px solid ${variables.colorPrimary};
        border-radius: 3rem;
        font-size: 1.5rem;

        @media ${device.tablet} {
          height: 3rem;
          width: 15rem;
        }

        &[type='text'] {
          padding-left: 4rem;

          @media ${device.tablet} {
            padding-left: 3rem;
          }
        }

        &:focus {
          outline: none;
          border: 2px solid ${variables.colorPrimary};
        }
      }
    }

    &__navlist {
      max-width: 75%;
      height: 50%;
      display: block;
      position: absolute;
      right: 5rem;
      bottom: 0;

      @media ${device.tablet} {
        height: 70%;
      }
    }

    &__list {
      margin-top: 1rem;
      list-style: none;
      align-items: center;
      justify-content: flex-end;
    }

    &__item {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 3rem;

        @media ${device.laptopL} {
          margin-right: 2rem;
        }
      }
    }

    &__link {
      &:link,
      &:visited {
        color: ${variables.colorPrimary};
        text-decoration: none;
        font-size: ${variables.defaultFontSize};
        font-weight: 700;
        padding: 1rem;
      }

      &:hover,
      &:active {
        color: ${variables.colorSecondary};
      }
    }
  }

  .lan-option {
    cursor: pointer;
    border-bottom: 0.1rem solid ${variables.colorGreyLight2};
    padding: 0.5rem 0;
  }

  .btn {
    display: inline-block;
    margin: 0 1rem;

    &--search {
      width: 3rem;
      height: 3rem;
      margin: 0;
      border-radius: 50rem;
      position: absolute;
      top: 50%;
      left: 0.5rem;
      transform: translateY(-50%);
      cursor: default;

      @media ${device.tablet} {
        width: 2.5rem;
        height: 2.5rem;
        left: 0.4rem;
      }
    }
  }

  .magnifier {
    width: 50%;
    height: 50%;
    display: block;
    z-index: 10;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


// const renderListItems = () => {
//   return (
//       <li className="navigation__item">
//         <Link to='/' className="navigation__link">
//           Home
//         </Link>
//         <Link to='/our_services' className="navigation__link">
//           Our Services
//         </Link>
//         <Link to='/our_partners' className="navigation__link">
//           Our Partners
//         </Link>
//         <Link to='/insights' className="navigation__link">
//           Insights
//         </Link>
//         <Link to='/knowledge_resources' className="navigation__link">
//           Knowledge Resouces
//         </Link>
//         <Link to='/career' className="navigation__link">
//           Career
//         </Link>
//         <Link to='/about_us' className="navigation__link">
//           About Us
//         </Link>
//
//       </li>
//     );
// };

const listItems = [
  {
    page: 'Home',
    url: '/',
  },
  {
    page: 'Our Services',
    url: '/our_services',
  },
  {
    page: 'Our Partners',
    url: '/our_partners',
  },
  {
    page: 'Insights',
    url: '/insights',
  },
  {
    page: 'Knowledge Resources',
    url: '/knowledge_resources',
  },
  {
    page: 'Career',
    url: '/career',
  },
  {
    page: 'About Us',
    url: '/about_us',
  },
];

const renderListItems = listItems.map((item, key) => {
  return (
    <React.Fragment key={key}>
      <li className="navigation__item">
        <Link to={item.url} className="navigation__link">
          {item.page}
        </Link>
      </li>
    </React.Fragment>
  );
});

const dropdownOptions = ['English', 'Chinese', 'Spanish'];

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(dropdownOptions[0]);

  const renderOptions = dropdownOptions.map((item, key) => {
    return (
      <div
        key={key}
        className="lan-option"
        onClick={() => {
          setSelected(dropdownOptions[key]);
          setDropdownOpen(!dropdownOpen);
        }}
      >
        {item}
      </div>
    );
  });

  return (
    <StyledSection className="navigation" dropdownOpen={dropdownOpen}>
      <div className="navigation__logo-box">
        <a href="/">
          <img
            className="navigation__logo-box-img"
            src={mapssLogo}
            alt="company-logo"
          />
        </a>
      </div>
      <div className="navigation__container-1 flex-row">
        <div className="navigation__language-dropdown">
          <div
            className="btn btn--white navigation__language-selected"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selected} &#x25BC;
          </div>
          <div className="navigation__language-list">{renderOptions}</div>
        </div>
        <div className="navigation__search-box">
          <div className="btn--blue btn--search">
            <img
              className="magnifier"
              src={magnifierIcon}
              alt="magnifierIcon"
            ></img>
          </div>
          <input
            className="navigation__search-box-input"
            placeholder="Search"
            type="text"
          />

          <Link to="/login" className="btn btn--blue">
            Login
          </Link>
        </div>
      </div>
      <nav className="navigation__navlist">
        <ul className="navigation__list  flex-row">
          {renderListItems}
          <div className="navigation__btn-box">
            <a href="/contact_us" className="btn btn--bluelight">
              Contact Us
            </a>
          </div>
        </ul>
      </nav>
    </StyledSection>
  );
};

export default NavBar;
