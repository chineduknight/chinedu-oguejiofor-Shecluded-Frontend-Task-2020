import React from 'react';

const Register = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      {' '}
      I am register {process.env.ABC} here is the key{' '}
      {process.env.REACT_APP_FIREBASE_API_KEY}
    </div>
  );
};

export default Register;
