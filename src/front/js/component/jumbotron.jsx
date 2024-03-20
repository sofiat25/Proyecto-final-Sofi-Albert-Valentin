import React from "react";
import "../../styles/jumbotron.css";





export const Jumbotron = () =>{
    return (
        <div className="container-jumbotron">
  <h1 className="display-4">Welcome to La tiendita de Nati!</h1>
  <p className="lead">Tu estilo, tu moda, tu tiendita de Nati.</p>
  <hr className="my-4"/>
  
  <p className="lead">
  <button type="button" class="btn btn-light">Compra ahora!</button>
  </p>
</div>
    )
}