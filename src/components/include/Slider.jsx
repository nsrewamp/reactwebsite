import React from 'react';
import sdrImg1 from '../../assets/images/sdr1.jpg';
import sdrImg2 from '../../assets/images/sdr2.jpg';
import t1 from '../../assets/images/f1.jpg';
import t2 from '../../assets/images/f2.jpg';
import t3 from '../../assets/images/f3.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// const options = {
//   items: 1,
// };
function Slider() {
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      autoplayTimeout={1500}
      nav
      items={1}
      // navText={}
      navigation={false}
    >
      <div className="item"><img src={sdrImg1} alt="slider1" /></div>
      <div className="item"><img src={sdrImg2} alt="slider2" /></div>
      {/* <div className="item"><img src={sdrImg1} /></div> */}
      {/* <div className="item"><img src={sdrImg2} /></div> */}
      {/* <div className="item"><img src={sdrImg1} /></div> */}
    </OwlCarousel>
  )
}
// slider for testimonial //
function SliderForTestimonial() {
  return (
    <>
      <div className="bg-white rounded shadow-sm p-3 mt-5">
        <h1 className="text-center mb-4"><u>User Reviews</u></h1>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={25}
          stagePadding={15}
          nav
          items={4}
          autoplayTimeout={2000}
          navigation={false}
        >
          <div className="item">
            <div className="card">
              <img src={t1} className="card-img-top" alt="User Reviews" />
              <div className="card-body">
                <h5 className="card-title">What is Lorem Ipsum?</h5>
                <p className="card-text"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="https://www.lipsum.com/" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img src={t2} className="card-img-top" alt="User Reviews" />
              <div className="card-body">
                <h5 className="card-title">What is Lorem Ipsum?</h5>
                <p className="card-text"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="https://www.lipsum.com/" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img src={t3} className="card-img-top" alt="User Reviews" />
              <div className="card-body">
                <h5 className="card-title">What is Lorem Ipsum?</h5>
                <p className="card-text"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="https://www.lipsum.com/" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img src={t1} className="card-img-top" alt="User Reviews" />
              <div className="card-body">
                <h5 className="card-title">What is Lorem Ipsum?</h5>
                <p className="card-text"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="https://www.lipsum.com/" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img src={t2} className="card-img-top" alt="User Reviews" />
              <div className="card-body">
                <h5 className="card-title">What is Lorem Ipsum?</h5>
                <p className="card-text"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="https://www.lipsum.com/" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img src={t3} className="card-img-top" alt="User Reviews" />
              <div className="card-body">
                <h5 className="card-title">What is Lorem Ipsum?</h5>
                <p className="card-text"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="https://www.lipsum.com/" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  )
}
export { Slider, SliderForTestimonial };