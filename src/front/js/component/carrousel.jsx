import React from "react";

export const Carrousel = () =>{
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/16136054/pexels-photo-16136054/free-photo-of-rojo-verano-mono-vestido.jpeg?auto=compress&cs=tinysrgb&w=600" className="img1" alt="..."/>
      </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/506317910/es/foto/hermosa-ni%C3%B1a-peque%C3%B1a-modelo-usa-un-vestido-y-gafas-de-sol-leopardo.jpg?s=612x612&w=0&k=20&c=5PKpp1dhCtz3SJBDIiP_SMCXc6LfekSnp3xM9h2Kj3g=" className="img2" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1152823482/es/foto/ni%C3%B1o-con-estilo-sonriendo-y-bailando.jpg?s=612x612&w=0&k=20&c=lsAfV3Nw9ypLLcdq5JL7oiiUw27TF-Vjyen1mqHeGkY=" className="img3" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};