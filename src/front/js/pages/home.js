import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carrousel } from "../component/carrousel.jsx"
import { Articulos } from "../component/articulos.jsx"
import { Jumbotron } from "../component/jumbotron.jsx"

import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Jumbotron/>
			<Carrousel/>
			<Articulos/>
			
			</div>
	);
};
