import React from 'react';

const partnerInfo = [
  {
    picture: 'lightblue',
    title: 'Why Partner With Us?',
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
  },
];

const renderPartnerList = partnerInfo.map((data, key) => {
  const picStyle = {
    backgroundColor: data.picture,
  };

  return (
    <div
      key={key}
      className="partner-description__item-box flex-row"
      style={{ flexDirection: `${key % 0 === 0 ? 'row' : 'row-reverse'}` }}
    >
      <div className="img-wrapper">
        <div className="partner-description__pic " style={picStyle}></div>
      </div>

      <div className="block__box partner-description__text-box">
        <h1 className="heading-tertiary-blue--main partner-description__title--small">
          {data.title}
        </h1>
        <div className="partner-description__text">{data.text}</div>
        <a href="#" className="btn btn--orange">
          Learn More
        </a>
      </div>
    </div>
  );
});

const PartnerList = () => {
  return (
    <div className="container-ParLists partner-description">
      <h1 className="heading-ourPartners--main">About Our Partners</h1>
      <div className="partner-description">{renderPartnerList}</div>
    </div>
  );
};

export default PartnerList;
