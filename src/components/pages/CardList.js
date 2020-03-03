import React from 'react';
import Card from './Card';
const CardList = ({ charaters }) => {
  return (
    <div className='card-list '>
      {charaters && charaters.map(item => <Card item={item} />)}
    </div>
  );
};

export default CardList;
