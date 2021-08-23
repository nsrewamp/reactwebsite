import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
	const [isNavCollapsed, setIsNavCollapsed] = useState();
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-5">
				<NavLink exact activeClassName="" className="navbar-brand" to="/">
					KarBhalaTech
				</NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#karBhalaNavbar" aria-controls="karBhalaNavbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="karBhalaNavbar">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink exact activeClassName="active" className="nav-link" to="/">
								Dashboard
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact activeClassName="active" className="nav-link" to="/services">
								Services
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact activeClassName="active" className="nav-link" to="/support">
								Support
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact activeClassName="active" className="nav-link" to="/statewise">
								Covid Patient
							</NavLink>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-info" type="button">Search</button>
					</form>
				</div>
			</nav>
		</>
	);
}
export default Header;