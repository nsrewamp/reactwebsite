import React, { useState } from 'react';
import supportImg from '../assets/images/support_img.jpg';
function Support() {
  const [currData, formData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    formData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${currData.fullname}. My Email is ${currData.email}`);
  };
  return (
    <>
      <img className="img-fluid rounded" src={supportImg} alt="Support banner" />
      <div className="bg-white rounded shadow-sm p-4">
        <h1 className="text-center mb-4"><u>Sppout</u></h1>
        <div className="col-md-6 col-12 mx-auto">
          <form autoComplete="off" onSubmit={formSubmit} className="form-control-lg bg-light py-4">
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">FullName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="fullname"
                name="fullname"
                value={currData.fullname}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="jhon@example.com"
                id="email"
                name="email"
                value={currData.email}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your phone number"
                id="phone"
                name="phone"
                value={currData.phone}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="3"
                id="message"
                name="message"
                value={currData.message}
                onChange={InputEvent}
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-secondary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Support;