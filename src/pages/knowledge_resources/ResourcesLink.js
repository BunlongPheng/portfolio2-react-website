import React from 'react';
import ImgTitleTextRow from '../../components/ImgTitleTextRow';
import img1 from '../../img/founder.jpg';
import './style/knowledge-resources.scss';

const content = [
  {
    titleMain: 'Case Studies',
    titleSub: 'Featured1',
    img: img1,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
      eu leo. Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus.`,
  },
  {
    titleMain: 'Human Resources',
    titleSub: 'Featured2',
    img: img1,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
      eu leo. Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus.`,
  },
  {
    titleMain: 'Material Resources',
    titleSub: 'Featured3',
    img: img1,
    text: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
      eu leo. Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus.`,
  },
];

const renderContent = content.map((data, key) => {
  return (
    <ImgTitleTextRow
      key={key}
      titleMain={data.titleMain}
      titleSub={data.titleSub}
      img={data.img}
      text={data.text}
    />
  );
});

const ResourcesLink = () => {
  return (
    <div className="container-resourceLink">
      <h1 className="heading-primary--sub">Knowledge Resources</h1>
      <p className="text">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus. Donec sed odio dui. Nullam quis
        risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Cras sit amet
        nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </p>
      {renderContent}
    </div>
  );
};

export default ResourcesLink;
