import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Cusines from './cusines';

const Body = () => {
  return (
    <div className='mt-2'>
      <Cusines />
    </div>
  );
};

export const FrontPage = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
