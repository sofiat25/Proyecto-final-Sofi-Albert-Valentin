import React from "react";
import "../../styles/articulos.css";

export const Articulos = () =>{
    return (
      <div className="container-art">
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://bit.ly/490DMVe" className="card-img-top" alt="..." height={400} width={90}/>
      <div className="card-body">
        <h5 className="card-title">Vestidos</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://bit.ly/49ZD0sR" className="card-img-top" height={400} width={90} />
      <div className="card-body">
        <h5 className="card-title">Zapatos</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://bit.ly/3ILziao" className="card-img-top" height={400} width={90}/>
      <div className="card-body">
        <h5 className="card-title">Accesorios</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
</div>
    );
};