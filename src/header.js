import React from 'react';
import ReactDOM from 'react-dom';
import IconSearch from './svg-logos/searchLogo';
import IconBxsOffer from './svg-logos/offerLogo';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full flex shadow-lg '>
      <div className='flex items-center ml-[200px] mr-[80px] '>
        <>
          <Link to='/'>
            <img
              className='w-[50px] h-[50px] mr-[390px]'
              src='https://thumbs.dreamstime.com/b/print-270061976.jpg'
              alt='broken'
            />
          </Link>
        </>
        <>
          <ul className='flex justify-center m-[auto] '>
            <li className='m-[30px]  hover:text-orange-500'>
              <button className='flex items-center'>
                {<IconSearch />} search
              </button>
            </li>
            <li className='m-[30px] p-[2px] flex  hover:text-orange-500'>
              {<IconBxsOffer />}Offers
            </li>
            <li className='m-[30px] p-[2px] hover:text-orange-500'>Help</li>
            <li className='m-[30px] p-[2px] hover:text-orange-500'>Sign In </li>
            <li className='m-[30px] p-[2px] hover:text-orange-500'>Cart</li>
          </ul>
        </>
      </div>
    </div>
  );
};

export default Header;
