import React, { useEffect, useState } from 'react';
import { Col, Row, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCats, openModal, setCurrent } from '../redux/cats/actions';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';

const Cats = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCats());
    // eslint-disable-next-line
  }, []);
  const { cats, loading } = useSelector(state => state.cats);

  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(9);

  const indexOfLastPost = currentPage * catsPerPage;
  const indexOfFirstPost = indexOfLastPost - catsPerPage;

  const handleChange = pageNo => {
    setCurrentPage(pageNo);
  };
  const handleClick = cat => {
    dispatch(setCurrent(cat));
    dispatch(openModal());
  };

  return (
    <div style={{ padding: '20px 80px' }}>
      <Modal />
      <Row gutter={[8, 16]}>
        {cats &&
          cats.length > 0 &&
          cats.slice(indexOfFirstPost, indexOfLastPost).map(cat => {
            const {
              breeds: [catDetails]
            } = cat;

            return loading ? (
              <Spinner />
            ) : (
              <Col key={cat.id} className='gutter-row' span={8}>
                <div className='collection-item'>
                  <div
                    className='image'
                    style={{
                      backgroundImage: `url(${cat.url})`
                    }}
                  />
                  <div className='collection-footer'>
                    <span className='name'>{catDetails.name}</span>
                    <span className='price'>{catDetails.dog_friendly}</span>
                  </div>
                  <button
                    onClick={() => handleClick({ ...catDetails, url: cat.url })}
                    className='custom-button'
                  >
                    SEE MORE
                  </button>
                </div>
              </Col>
            );
          })}
      </Row>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={catsPerPage}
        onChange={handleChange}
        total={cats && cats.length}
      />
    </div>
  );
};

export default Cats;
