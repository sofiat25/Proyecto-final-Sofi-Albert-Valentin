import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carrousel } from "../component/corrousel.jsx"
import { Articulos } from "../component/articulos.jsx"
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Carrousel/>
			<Articulos/>
			
			</div>
	);
};
