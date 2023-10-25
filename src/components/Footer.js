import React from 'react';
import styled from 'styled-components';
import variables from '../abstracts/variables';
import logoFacebook from '../img/facebook.png';
import logoTwitter from '../img/twitter.png';
import logoLinkedin from '../img/linkedin-logo.png';
import { device } from '../abstracts/mediaQueries';

const StyledSection = styled.section`
  height: 50rem;
  margin-top: 10rem;
  background-image: linear-gradient(
    to top right,
    rgba(0, 13, 25, 1),
    rgba(0, 72, 140, 1)
  );
  background-size: cover;
  position: relative;

  @media ${device.tablet} {
    height: 80rem;
  }

  @media ${device.mobileXL} {
    height: 90rem;
  }

  .footer {
    &__top {
      height: 50%;
      width: 70%;
      position: absolute;
      top: 0;
      right: 0;

      @media ${device.laptopL} {
        width: 100%;
        position: relative;
        margin: 0 auto;
      }

      @media ${device.tablet} {
        height: 33%;
        width: auto;
      }

      @media ${device.mobileXL} {
        height: 50%;
      }
    }

    &__container {
      display: inline-block;
      margin-left: 10rem;
      margin-top: 5rem;

      @media ${device.laptopL} {
        margin: 5rem 5rem 0 5rem;
      }

      @media ${device.tablet} {
        margin: 5rem 1rem 0 1rem;
      }

      @media ${device.mobileXL} {
        margin: 2rem 1rem 0 1rem;
      }
    }

    &__bottom {
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 0;

      @media ${device.tablet} {
        height: 66%;
      }

      @media ${device.mobileXL} {
        height: 50%;
      }

      &--left {
        height: 100%;
        float: left;
        padding: 8rem 0 0 12rem;

        @media ${device.tablet} {
          height: 50%;
          width: 100%;
          padding: 8rem 0;
        }

        @media ${device.mobileXL} {
          height: 50%;
          padding: 0;
          margin: 2rem 0;
        }
      }

      &--right {
        float: right;
        margin: 8rem 12rem 8rem 0;
        text-align: right;

        @media ${device.tablet} {
          height: 50%;
          width: 100%;
          margin: 0;
        }
      }

      &--linkgroup {
        justify-content: center;
      }

      &--linkbox {
        display: inline-block;
        border: 1px solid ${variables.colorWhite};
        border-radius: 10rem;
        height: 6rem;
        width: 6rem;
        margin: 3rem 1rem 0 1rem;
        position: relative;
        cursor: pointer;
      }

      &--linkicon {
        height: 65%;
        width: 65%;
        object-fit: contain;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .list {
    &__item {
      
      text-align: right;
      display: block;
      font-size: 2rem;
      color: ${variables.colorWhite};

      &-link {
        &:link,
        &:visited {
          text-decoration: none;
          color: ${variables.colorWhite};
          font-weight: 400;
          padding: 1rem;
        }
      }
    }
  }

  .bottom-list__item {
    font-size: 2rem;
      text-align: right;
      display: block;
      color: ${variables.colorWhite};

      @media ${device.tablet} {
        text-align: center;
      }

      &-link {
        &:link,
        &:visited {
          text-decoration: none;
          color: ${variables.colorWhite};
          font-weight: 400;
          padding: 1rem;
        }
  }
`;

const Footer = () => {
  return (
    <StyledSection className="footer">
      <div className="footer__top flex-row">
        <div className="footer__container footer__container--1">
          <ul className="list list--1">
            <li className="list__item">
              <a className="list__item-link" href="#">
                Home
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                Our Services
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                Our Partners
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                Insights
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                Knowledge Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__container footer__container--2">
          <ul className="list list--2">
            <li className="list__item">
              <a className="list__item-link" href="#">
                Career Page
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                About Us
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                Login Portal
              </a>
            </li>
            <li className="list__item">
              <a className="list__item-link" href="#">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__container footer__container--3">
          <ul className="list list--3">
            <li className="list__item">Headquarters</li>
            <li className="list__item">Sydney, NSW 2000, AU</li>
            <br />
            <li className="list__item">Call us</li>
            <li className="list__item">0800 1234 5678</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--left">
          <p className="bottom-list__item">Follow Us On Social Media</p>
          <div className="footer__bottom--linkgroup flex-row">
            <div className="footer__bottom--linkbox">
              <a
                className="footer__bottom--link"
                href="https://www.facebook.com/MAPSSLINK"
              >
                <img
                  className="footer__bottom--linkicon"
                  src={logoFacebook}
                ></img>
              </a>
            </div>
            <div className="footer__bottom--linkbox">
              <a className="footer__bottom--link" href="#">
                <img
                  className="footer__bottom--linkicon"
                  src={logoTwitter}
                ></img>
              </a>
            </div>
            <div className="footer__bottom--linkbox">
              <a
                className="footer__bottom--link"
                href="https://au.linkedin.com/company/mapsslink"
              >
                <img
                  className="footer__bottom--linkicon"
                  src={logoLinkedin}
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom--right">
          <div>
            <ul className="list flex-row">
              <li className="bottom-list__item">
                <a className="list__item-link" href="#">
                  Privacy
                </a>
              </li>
              <li className="bottom-list__item">
                <a className="list__item-link" href="#">
                  T&amp;C
                </a>
              </li>
              <li className="bottom-list__item">
                <a className="list__item-link" href="#">
                  Disclaimer and Terms of Use
                </a>
              </li>
            </ul>
            <span className="bottom-list__item u-margin-top-medium">
              <a className="list__item-link" href="#">
                Copyright Information
              </a>
            </span>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default Footer;
