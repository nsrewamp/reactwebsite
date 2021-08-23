import React from 'react';
import IMAGES from './images';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
  items: 4,
};
function Slider() {
    return(
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      nav
    >
      <div className="item"><img src={IMAGES.ftrImg1} /></div>
      <div className="item"><img src={IMAGES.ftrImg2} /></div>
      <div className="item"><img src={IMAGES.ftrImg3} /></div>
      <div className="item"><img src={IMAGES.ftrImg1} /></div>
      <div className="item"><img src={IMAGES.ftrImg2} /></div>
    </OwlCarousel>
  )
}

export default Slider;