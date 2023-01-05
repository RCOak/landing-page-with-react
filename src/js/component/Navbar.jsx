import React from "react";

const Navbar = () => {
	return (
        <nav className="navbar-expand navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: 'gainsboro' }}>Start Bootstrap</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'gainsboro' }}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'gainsboro' }}>Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'gainsboro' }}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" style={{ color: 'gainsboro' }}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    	);
    };
    
    export default Navbar;