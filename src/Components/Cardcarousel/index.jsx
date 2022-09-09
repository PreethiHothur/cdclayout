import React from "react";
import "./index.css";
import { Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

function Cardcarousel() {
  return (
    <div className="container container-sm container-md container-lg container-xl container-xxl">
      <div className="row text-start">
        <div className="col-sm-1 col-md-5 col-lg-3   col-xl-3 ">
          <Card className="p-3 shadow cards  ">
            <h6 className="text-nowrap">
              <b>Infertility Health Check up</b>
            </h6>
            <span className="badge bg-danger rounded-pill w-50 p-2">
              IFBCO1
            </span>
            <h6>
              <b>HBsAg HIV-1&2</b>
            </h6>
            <div className="text">
              <p>FSH + LH + PROLACTIN</p>
              <p>TSH- Thyroid Stimulating</p>
              <p>Harmone- Serum</p>
              <p>
                Chromosomal Analysis / kKaryo <br />
                typing-Bone marrow
              </p>
            </div>
            <hr className="hr " />
            <div className="row">
              <div className="col">
                <h6>
                  <b>Rs-5500.00</b>
                </h6>
              </div>
              <div className="col text-end">
                <ArrowRight className="fs-4 " />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-sm-1 col-md-5 col-lg-3   col-xl-3 mb-5">
          <Card className="p-3 shadow cards">
            <h6>
              <b>Arthritis Health Package</b>
            </h6>
            <span className="badge bg-danger rounded-pill w-50 p-2 m-2">
              AR01
            </span>
            <h6>
              <b>ASO TITRE</b>
            </h6>
            <div className="text">
              <p>Anti Nuclear Anti Body-ELISA</p>
              <p>Complement Level-C3 + C4</p>
              <p>C-Reactive Protine(CRP)</p>
              <p>Calcium-Serum</p>
            </div>
            <hr className="hr " />
            <div className="row">
              <div className="col">
                <h6>
                  <b>Rs-2000.00</b>
                </h6>
              </div>
              <div className="col text-end">
                <ArrowRight className="fs-4 " />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-sm-1 col-md-5 col-lg-3   col-xl-3 mb-5">
          <Card className="p-3 shadow cards">
            <h6>
              <b>Arthritis Health Package</b>
            </h6>
            <span className="badge bg-danger rounded-pill w-50 p-2 m-2">
              AR01
            </span>
            <h6>
              <b>ASO TITRE</b>
            </h6>
            <div className="text">
              <p>Anti Nuclear Anti Body-ELISA</p>
              <p>Complement Level-C3 + C4</p>
              <p>C-Reactive Protine(CRP)</p>
              <p>Calcium-Serum</p>
            </div>
            <hr className="hr " />
            <div className="row">
              <div className="col">
                <h6>
                  <b>Rs-2000.00</b>
                </h6>
              </div>
              <div className="col text-end">
                <ArrowRight className="fs-4 " />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-sm-1 col-md-5 col-lg-3   col-xl-3  mb-5">
          <Card className="p-3 shadow cards">
            <h6 className="text-nowrap">
              <b>Infertility Health Check up</b>
            </h6>
            <span className="badge bg-danger rounded-pill w-50 p-2">
              IFBCO1
            </span>

            <h6>
              <b>HBsAg HIV-1&2</b>
            </h6>
            <div className="text">
              <p>FSH + LH + PROLACTIN</p>
              <p>TSH- Thyroid Stimulating</p>
              <p>Harmone- Serum</p>
              <p>
                Chromosomal Analysis / kKaryo <br />
                typing-Bone marrow
              </p>
            </div>

            <hr className="hr " />
            <div className="row">
              <div className="col">
                <h6>
                  <b>Rs-5500.00</b>
                </h6>
              </div>
              <div className="col text-end">
                <ArrowRight className="fs-4 " />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cardcarousel;
