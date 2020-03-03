import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharaters } from '../redux/lotr/actions';
import CardList from '../components/CardList';

const LOTR = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharaters());
    //eslint-disable-next-line
  }, []);

  const [searchField, setSearchField] = useState('');
  const { lotr } = useSelector(state => state.lotr);

  const firstItem = lotr && lotr.slice(1, 20);
  const filteredCharacters =
    firstItem &&
    firstItem.filter(charater =>
      charater.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className='mb'>
      <h1 className='lot-title'>LORD OF THE RINGS</h1>
      <input
        className='search'
        placeholder='search Characters'
        onChange={e => setSearchField(e.target.value)}
      />
      <CardList charaters={filteredCharacters} />
    </div>
  );
};

export default LOTR;
