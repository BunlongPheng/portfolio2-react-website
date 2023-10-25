import React, { Fragment } from 'react';
import { content } from './content';


const renderContent = content.map((data, key) => {
  const contentText = data.content.map((element, ekey) => {
    const textJsx = () => {
      let jsx;
      if (Array.isArray(element.text)) {
        jsx = element.text.map((e, i) => {
          return (
            <p key={i} className="text-description">
              {e}
            </p>
          );
        });
      } else {
        jsx = <p className="text-description">{element.text}</p>;
      }

      return jsx;
    };

    return (
      <React.Fragment key={ekey}>
        <h3 className="heading-tertiary-blue--main">{element.title}</h3>
        {textJsx()}
      </React.Fragment>
    );
  });

  return (
    <div key={key} className="category-box-description">
      <h2 className="heading-tertiary-blue--main title-services">{data.category}</h2>
      <div className="img-box-description">
        <img className="img-description" src={data.img}></img>
      </div>
      <div className="contentBox-description">
        <div className="text-box-description">{contentText}</div>
      </div>
    </div>
  );
});

const Description = () => {
  return (
    <div className="container-ourServices">
      <div className="heading-primary--sub">Our Services</div>
      <p className="text-description">
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
      <div className="container-description flex-row">{renderContent}</div>
    </div>
  );
};

export default Description;
