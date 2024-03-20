import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
		<div className="container-fluid">
		  <a className="navbar-brand" href="#"></a>
		  <Link className="navbar-brand" to="/">
          <img className="img-fluid" src={logo} height={20} width={60} />
        </Link>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
			  <li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">Accesorios</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Vestidos</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Shorts</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Zapatos</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
};
