import React from 'react';
import ItemList from '../../components/ItemList';
import img from '../../img/founder.jpg';

const founderBlock = [
  {
    picture: img,
    title: 'Words from Our Founder',
    role: 'Roles',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
];

const FounderBlock = () => {
  return (
    <div className="flex-row container-founderBlock">
      <div className="text-box-founderBlock">
        <h2 className="heading-tertiary-white--main">
          {founderBlock[0].title}
        </h2>
        <h2 className="heading-tertiary-white--sub">{founderBlock[0].role}</h2>
        <p className="text-box-founderBlock__text">{founderBlock[0].text}</p>
        <a href="#" className="btn btn--orange btn-founderBlock">
          Learn More
        </a>
      </div>
      <div className="img-box-founderBlock">
        <img
          className="img-box-founderBlock__img"
          alt="founder"
          src={founderBlock[0].picture}
        ></img>
      </div>
    </div>
  );
};

export default FounderBlock;
