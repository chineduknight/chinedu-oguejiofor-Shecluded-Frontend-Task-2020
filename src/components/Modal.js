import React from 'react';
import { Modal, Card, Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/cats/actions';
const { Meta } = Card;
const InfoModal = () => {
  const visible = useSelector(state => state.cats.showModal);
  const current = useSelector(state => state.cats.current);
  const dispatch = useDispatch();
  const handleOk = () => {
    dispatch(closeModal());
  };
  return (
    <div>
      <Modal
        visible={visible}
        title={current && current.name}
        onOk={handleOk}
        onCancel={handleOk}
        footer={null}
        className='custom-style'
      >
        {current && (
          <Card cover={<img alt='example' src={current.url} />}>
            <Meta title={current.name} description={current.description} />
            <div style={{ marginTop: '10px' }}>
              <p>Temperament: {current.temperament} </p>
              <p>Life Span:{current.life_span}</p>
              <p>
                Shedding Level:{'  '}
                <Rate disabled defaultValue={current.shedding_level} />
              </p>
              <p>
                Dog Friendly: {'  '}
                <Rate disabled defaultValue={current.dog_friendly} />
              </p>
              <p>
                Child Friendly:{' '}
                <Rate disabled defaultValue={current.child_friendly} />
              </p>
            </div>
          </Card>
        )}
      </Modal>
    </div>
  );
};

export default InfoModal;
