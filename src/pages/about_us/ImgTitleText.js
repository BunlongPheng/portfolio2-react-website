import React from 'react';
import ImgTitleTextCol from '../../components/ImgTitleTextCol';
import img1 from '../../img/sidepage-help1.jpg';
import img2 from '../../img/contact-us-procedure-2.jpg';
import img3 from '../../img/sidepage-help2.jpg';

const content = [
  {
    titleSub: 'Team1',
    img: img1,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
scelerisque ante sollicitudin. Cras purus odio, vestibulum in
vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`,
  },
  {
    titleSub: 'Team2',
    img: img2,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
scelerisque ante sollicitudin. Cras purus odio, vestibulum in
vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`,
  },
  {
    titleSub: 'Team3',
    img: img3,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
scelerisque ante sollicitudin. Cras purus odio, vestibulum in
vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
nisi vulputate fringilla. Donec lacinia congue felis in faucibus.`,
  },
];

const ImgTitleText = () => {
  return (
    <div className="container-imgTitleText text-box-imgTitleText">
      <h1 className="heading-aboutUS">Our Team Leaders</h1>
      <ImgTitleTextCol items={content} titleColor="blue" btnColor="white" />
    </div>
  );
};

export default ImgTitleText;
