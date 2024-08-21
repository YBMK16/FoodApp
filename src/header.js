import React from 'react';
import ReactDOM from 'react-dom';
import IconSearch from './svg-logos/searchLogo';

const Header = () => {
  return (
    <>
      <div className='flex items-center ml-7 mr-7'>
        <img
          className='w-[50px] h-[50px] m-2'
          src='https://thumbs.dreamstime.com/b/print-270061976.jpg'
          alt='broken'
        />
        <ul className='flex justify-center '>
          <li className='m-[30px] p-[20px] flex items-center'>
            {<IconSearch />}search
          </li>
          <li className='m-[30px] p-[20px]'>Offers</li>
          <li className='m-[30px] p-[20px]'>Help</li>
          <li className='m-[30px] p-[20px]'>Sign In </li>
          <li className='m-[30px] p-[20px]'>Cart</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
