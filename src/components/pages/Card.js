import React from 'react';

const Card = ({ item }) => {
  return (
    <div key={item.id} className='card-container'>
      <img
        src={`https://robohash.org/${Math.ceil(
          Math.random() * 10
        )}?set=set2&size=180x180`}
        alt=''
      />
      <h2>{item.name}</h2>
      <h2>{item.race}</h2>
    </div>
  );
};

export default Card;
