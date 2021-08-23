import React from 'react';
function Footer() {
	const currYear = new Date().getFullYear();
	return (
		<footer className="text-center bg-secondary f_btm text-white">
			<div className="text-center p-3">
			This is footer
				© {currYear} Copyright : <a href="#!" className="text-info">karbhala.com</a>
			</div>
		</footer>
	);
}
export default Footer;