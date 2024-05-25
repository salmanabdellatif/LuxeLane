import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import images from '../constants/images'

const MainSlider = ({ className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className='w-full md:w-3/4 md:pt-8 md:px-8 mb-8 lg:border-l border-[#9c9c9c] border-opacity-40'>
      <Slider {...settings}>
        <div>
          <img src={images.MainSlider} alt='Slide 1' />
        </div>
        <div>
          <img src={images.MainSlider} alt='Slide 2' />
        </div>
        <div>
          <img src={images.MainSlider} alt='Slide 3' />
        </div>
      </Slider>
    </div>
  )
}

export default MainSlider
