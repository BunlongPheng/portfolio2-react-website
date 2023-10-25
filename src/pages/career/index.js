import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LiveChatBtn from '../../components/LiveChatBtn';
import InquiryLink from '../../components/InquiryLink';
import CareerLink from './CareerLink';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import ImgTitleText from '../career/ImgTitleText';
import jobData from './testingData/dummyData';




const Career = () => {
  return (
    <div>

      <NavBar />
      <Header />
      <LiveChatBtn />
      <CareerLink />
        {jobData.map(job =>

      <JobCard key={job.id}{...job} />

    )}
      <JobDescription />
      <ImgTitleText />
      <InquiryLink />
      <Footer />

    </div>
  );
};

export default Career;
