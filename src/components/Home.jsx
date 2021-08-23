import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Slider, SliderForTestimonial } from './include/Slider';
import rightImg from '../assets/images/f2.jpg';
function Home(props) {
  return (
    <>
      <Slider />
      <div className="bg-white rounded shadow-sm p-3 mt-4">
        {/* <h4 className="text-center">Home</h4> */}
        <div className="row featurette">
          <div className="col-md-7 d-flex justify-content-center flex-column">
            <h1 className="featurette-heading text-center">Why do we use it?</h1>
            <p className="lead p-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto rounded-circle" data-src={rightImg} alt="Right Banner" style={{ width: "500px", height: "500px" }} src={rightImg} data-holder-rendered="true" />
          </div>
        </div>
      </div>
      <SliderForTestimonial />
    </>
  );
}
export default Home;