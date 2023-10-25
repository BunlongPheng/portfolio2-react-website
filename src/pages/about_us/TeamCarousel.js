import React from 'react';
import Slider from '../../components/Slider';
import img1 from '../../img/sidepage-help1.jpg';
import img2 from '../../img/contact-us-procedure-2.jpg';

function TeamCarousel() {
  return (
    <>
      <h1 className="heading-aboutUS">
        The Whole Team :)
      </h1>
      <Slider borderRadius="10rem" items={[img1, img2, img1, img2, img1]} />
    </>
  );
}

export default TeamCarousel;
