import React from "react";
import img1 from "../Pictures/img1.jpg";
import img2 from "../Pictures/img2.jpg";
import img3 from "../Pictures/img3.jpg";
import img7 from "../Pictures/img7.jpg";
import img8 from "../Pictures/img8.jpg";
import img9 from "../Pictures/img9.jpg";

function Organbased() {
  return (
    <>
      <div className="bg-primary ">
        <div className="d-flex">
          <div>
            <hr
              className="text-white align-self-center ms-5  "
              style={{ width: 100, height: 2, marginTop: 80, padding: "2px" }}
            />
          </div>
          &nbsp;&nbsp;
          <div>
            <h5 className="text-danger mb-3 mt-5 p-3 fs-3 text-white ">
              ORGAN BASED TESTS
            </h5>
          </div>
        </div>

        <div class="container organs row d-flex  text-center mt-2 ms-5  ">
          {/* <div className="diseases  "> */}
          <div className="col mb-5 ">
            <img src={img1} className=" rounded-circle" style={{ width: 80 }} />
            <p className="ms-3 fw-bold text-light">HEART</p>
          </div>
          <div className="col">
            <img src={img2} className=" rounded-circle" style={{ width: 90 }} />
            <p className="ms-3 mt-3 fw-bold text-light">LIVER</p>
          </div>
          <div className="col">
            <img src={img3} className=" rounded-circle" style={{ width: 80 }} />
            <p className="ms-3 fw-bold text-light">LUNGS</p>
          </div>
          <div className="col ">
            <img src={img1} className=" rounded-circle" style={{ width: 80 }} />
            <p className="ms-3 fw-bold text-light ">INFERTILITY</p>
          </div>
          <div className="col">
            <img src={img7} className=" rounded-circle" style={{ width: 80 }} />
            <p className="ms-3 fw-bold text-light">KIDNEY</p>
          </div>
          <div className="col">
            <img
              src={img8}
              className=" rounded-circle"
              style={{ width: 84, height: 70 }}
            />
            <p className="ms-3 fw-bold text-light p-3 h-25">ALLERGY</p>
          </div>
          <div className="col">
            <img
              src={img9}
              className=" rounded-circle"
              style={{ width: 80, height: 75 }}
            />
            <p className="ms-3 fw-bold text-light">CBC</p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Organbased;
