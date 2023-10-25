import React from 'react';
import ItemList from '../../components/ItemList';

const serviceList = [
  {
    picture: 'black',
    title: 'Business Analysis',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
        saepe ducimus cumque sapiente quas atque quia optio doloribus veritatis
        odit. Ad ab quod voluptatibus cupiditate id eum ipsam modi eligendi. Cras 
        sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante 
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra 
        turpis. Fusce condimentum nunc ac nisi vulputate fringilla.`,
  },
  {
    picture: 'lightblue',
    title: 'Project Coordination and Services',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
        saepe ducimus cumque sapiente quas atque quia optio doloribus veritatis
        odit. Ad ab quod voluptatibus cupiditate id eum ipsam modi eligendi. Cras 
        sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante 
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra 
        turpis. Fusce condimentum nunc ac nisi vulputate fringilla.`,
  },
  {
    picture: 'blue',
    title: 'Buisiness Development Services',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
        saepe ducimus cumque sapiente quas atque quia optio doloribus veritatis
        odit. Ad ab quod voluptatibus cupiditate id eum ipsam modi eligendi. Cras 
        sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante 
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra 
        turpis. Fusce condimentum nunc ac nisi vulputate fringilla.`,
  },
  {
    picture: 'darkblue',
    title: 'Technical Services',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
        saepe ducimus cumque sapiente quas atque quia optio doloribus veritatis
        odit. Ad ab quod voluptatibus cupiditate id eum ipsam modi eligendi. Cras 
        sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante 
        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra 
        turpis. Fusce condimentum nunc ac nisi vulputate fringilla.`,
  },
];

const ServiceList = () => {
  return <ItemList title="Our Services" itemList={serviceList} />;
};

export default ServiceList;
