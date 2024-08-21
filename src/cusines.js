import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images here
import Dosa from './images/cusines/dosa.jpg';
import Idly from './images/cusines/idly.jpg';
import biryani from './images/cusines/biryani.jpg';
import bonda from './images/cusines/bonda.jpg';
import kichidi from './images/cusines/kichidi.jpg';
import milkshakes from './images/cusines/milkshakes.jpg';
import vada from './images/cusines/vada.jpg';
import poori from './images/cusines/poori.jpg';
import omelete from './images/cusines/omelete.jpg';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className='custom-arrow custom-prev'>
      &#9664; {/* Left Arrow */}
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className='custom-arrow custom-next'>
      &#9654; {/* Right Arrow */}
    </button>
  );
};

const Cusines = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='box-border w-[900px] ml-[220px]'>
      <div>
        <h2 className='font-bold text-2xl p-[10px]'>What's on your mind?</h2>
      </div>
      <div className='slider-container relative ml-[5px]'>
        <Slider {...settings}>
          <div className='items-center box-border w-[150px] h-[170px] p-2'>
            <img
              src={Dosa}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Dosa</h4>
          </div>
          {/* second cusine */}
          <div className='items-center box-border w-[150px] h-[170px]  p-2'>
            <img
              src={Idly}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Idly</h4>
          </div>

          <div className='items-center box-border w-[150px] h-[170px] '>
            <img
              src={biryani}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Biryani</h4>
          </div>

          <div className='items-center box-border w-[150px] h-[170px] '>
            <img
              src={bonda}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Bonda</h4>
          </div>

          <div className='items-center box-border w-[150px] h-[170px] '>
            <img
              src={kichidi}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Kichidi</h4>
          </div>

          <div className='items-center box-border w-[150px] h-[170px] '>
            <img
              src={milkshakes}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>MilkShakes</h4>
          </div>

          <div className='items-center box-border w-[150px] h-[170px] '>
            <img
              src={vada}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Vada</h4>
          </div>

          <div className='items-center box-border w-[150px] h-[170px] '>
            <img
              src={poori}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Poori</h4>
          </div>

          <div className='items-center box-border w-[200px] h-[220px] '>
            <img
              src={omelete}
              alt=''
              className='w-[150px] h-[150px] rounded-full p-4'
            />
            <h4 className='text-base font-medium text-center'>Omelete</h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Cusines;
