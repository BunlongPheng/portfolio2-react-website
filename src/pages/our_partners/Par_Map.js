import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const MapContainer = () => {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: '70vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 13.218115,
    lng: 151.2099,
  };

  const locations = [
    {
      name: 'Sydney',
      location: {
        lat: -33.865143,
        lng: 151.2099,
      },
    },
    {
      name: 'OLD TOWN ROAD 2',
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCoXWXPja1-_LZh_ckh5lnLwgeWLhAFFzw">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={2.8}
        center={defaultCenter}
      >
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
