import React from "react";
import "./index.css";
import Cardcarousel from "../Cardcarousel";

function CarouselTwo() {
  return (
    <div className="container container-sm container-md container-lg container-xl container-xxl">
      <div className="d-flex m-3">
        <div>
          <hr
            className="text-success align-self-center"
            style={{ width: 50, height: 2 }}
          />
        </div>
        &nbsp;&nbsp;
        <div>
          <h5 className="text-danger text-nowrap mt-1">
            <b>HEALTH PACKAGES</b>
          </h5>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Cardcarousel />
          </div>
          <div class="carousel-item">
            <Cardcarousel />
          </div>
          <div class="carousel-item">
            <Cardcarousel />
          </div>
        </div>
        <button
          class="carousel-control-prev bg-dark prevbtn"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next bg-dark nextbtn"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarouselTwo;
