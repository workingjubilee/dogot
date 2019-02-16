import React from 'react';
import DogStar from './DogStar';
import './StarWars.css';

const StarField = stars => {
  return (
    <ul className="StarField">
      {stars.incArray.map(dog => {
        return (
          <DogStar
            key={dog.name}
            name={dog.name}
          />
        );
      })}
    </ul>
  );
};

// hair_color": "blond",
// "skin_color": "fair",
// "eye_color": "blue",

export default StarField;
