import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
function Error() {
  return (
    <>
      <div className="bg-white rounded shadow-sm p-3 text-center">
        <h1>Oops!</h1>
        <h3>404 Not Found</h3>
        <p>Sorry, an error has occured, Requested page not found!</p>
        <NavLink to="/" class="btn btn-secondary" style={{ marginRight: "10px" }}><HomeOutlinedIcon /> Go Home</NavLink>
        <NavLink to="/support" class="btn btn-success"><EmailOutlinedIcon /> Contact Support</NavLink>
      </div>
    </>
  );
}
export default Error;