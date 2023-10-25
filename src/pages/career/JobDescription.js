import React from 'react';
import './style/career.scss';
import {Card, Button, Form} from 'react-bootstrap';

const JobDescription = () => {
  return (

<div className="container-Jobdescription">
  <div className="header-jobTitle">
    <h1>Front End Developer</h1>
  </div>
  <div className="container-description-page">


    <div className="container-jobBox container-jobBox--description">
      <div className="typography-jobDescription typography-jobDescription--header-box ">Job Decription</div>

        <Card>
          <Card.Body>
            <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">The Role</Card.Title>
              <p>
              As one of our frontend developers, you will work alongside our design and development teams to produce high-impact eCommerce websites built on the Shopify platform, and be exposed to exciting and industry-leading web development, and user experience and interface design. This ranges from developing Shopify hosted websites utilizing AJAX for maximised performance, to robust web applications using React.js and various API’s to deliver content to users on the fly.

              If you’re interested in working with Australia’s most dynamic eCommerce businesses, then this might be the role for you.
              </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">REQUIREMENTS</Card.Title>
            <p>
            Minimum two years of experience developing rich client-side web applications with HTML, CSS, and vanilla JS.
            Experience with React.js required. Gatsby or Next experience not required however preferred.
            Expertise in GIT and experience with CI/CD tools.
            Knowledge of preprocessors and build tools; LESS, SASS, Webpack, Gulp.
            Great understanding of responsive development and cross browser/device compatibility.
            Experience with Asynchronous Javascript (AJAX) and data processing.
            Excellent comprehension of JSON and similar data structures.
            Can work independently within a team.
            Excellent verbal and written communication skills.
            An eye for detail and UI/UX design from a developer perspective.
            Writing well documented, reusable, scalable, and easy to read code.
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">NOT REQUIRED, BUT ANY EXPERIENCE PREFERRED</Card.Title>
              <p>
              Experience with Shopify
              Experience with WebGL/Three.js
              Experience with CDNs for hosting client applications; Netlify.
              Experience with API driven CMS; Contentful or Prismic
              Understanding of Web Accessibility and SEO
              Experience with serverless architectures; AWS or Google Cloud Platform
              Experience with Node.js
              </p>
          </Card.Body>
        </Card>


    </div>

    <div className="container-jobBox container-jobBox--appInfo ">
      <div className="typography-jobDescription typography-jobDescription--header-box ">Application information</div>
      <div className="container-appInfo">
      <Card>
        <Card.Body>
          <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">Opportunity Type</Card.Title>
          <Card.Text>Graduate</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">Contract Type</Card.Title>
          <Card.Text>Permanent</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">Contract Hours</Card.Title>
          <Card.Text>Full Time</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">Annual Salary</Card.Title>
          <Card.Text>70K + Super </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">Commencement Date</Card.Title>
          <Card.Text>December 2021</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className="typography-jobDescription typography-jobDescription--descriptionTitle">Residency Requirement</Card.Title>
          <Card.Text>International Student</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>Posted on 25 December 2021</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Button>Apply</Button>
      </Card>
      </div>
    </div>
  </div>
  </div>
  )
};

export default JobDescription;
