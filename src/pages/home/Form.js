import React from 'react';
import styled from 'styled-components';
import variables from '../../abstracts/variables';
import Form from '../../components/Form';
import { device } from '../../abstracts/mediaQueries';

const StyledSection = styled.section`
  margin-top: 10rem;
  height: 88.4rem;
  padding: 10rem;
  background-image: linear-gradient(
    to top right,
    rgba(0, 13, 25, 1),
    rgba(0, 72, 140, 1)
  );

  @media ${device.laptop} {
    height: 135rem;
    padding: 8rem;
  }

  @media ${device.mobileXL} {
    height: 135rem;
    padding: 5rem;
  }

  @media ${device.mobileXL} {
    height: 145rem;
    padding: 2rem;
  }

  .text-box {
    display: inline-block;
    padding-right: 10rem;
    width: 50%;
    color: white;
    vertical-align: top;

    @media ${device.laptop} {
      width: 100%;
      padding-right: 0;
      margin-bottom: 5rem;
    }

    &__text {
      margin-left: 2rem;
    }
  }

  .form-box {
    display: inline-block;
    width: 50%;
    vertical-align: top;

    @media ${device.laptop} {
      width: 100%;
    }
  }
`;

const ContactForm = () => {
  return (
    <StyledSection className="">
      <div className="text-box">
        <h3 className="heading-tertiary-white--main u-margin-bottom-medium">
          Timely service delivery &amp; inovative solutions!!!
        </h3>
        <p className="text-box__text u-margin-bottom-small">
          Nullam sed scelerisque nisl. Nunc sit amet feugiat mauris. Fusce porta
          turpis in velit auctor, tincidunt consectetur quam tempus. In hac
          habitasse platea dictumst. Duis nisi urna, auctor sit amet augue ut,
          consectetur lobortis orci. In ultrices tincidunt ex, a feugiat ante
          pellentesque at. Etiam semper consequat arcu nec fringilla. Duis vel
          est vehicula, convallis metus euismod, congue justo. Morbi quis
          fermentum tellus.
        </p>
        <p className="text-box-home__text u-margin-bottom-small">
          Ut dolor elit, tempor non venenatis ut, malesuada non quam. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Morbi elementum leo viverra, accumsan justo sodales, auctor
          lacus. Etiam malesuada malesuada nibh, a elementum nisl laoreet vitae.
          Nulla facilisi. In condimentum cursus tempus.
        </p>
        <h3 className="heading-tertiary-white--main">
          or call us 0800 1234 5678
        </h3>
      </div>
      <div className="form-box">
        <Form />
      </div>
    </StyledSection>
  );
};

export default ContactForm;
