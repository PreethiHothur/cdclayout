import React from "react";
import "./index.css";
import { Card } from "react-bootstrap";
import { CartPlusFill } from "react-bootstrap-icons";

function A2ZTests() {
  return (
    <div className=" container container-sm container-md container-lg container-xl container-xxl">
      <div className="d-flex">
        <div>
          <hr
            className="text-success  align-self-center "
            style={{ width: 100, height: 2, marginTop: 60 }}
          />
        </div>
        &nbsp;&nbsp;
        <div>
          <h5 className="text-danger mt-5 mb-3 fs-3">
            <b style={{ color: "#f52574" }}>A2Z TESTS</b>
          </h5>
        </div>
      </div>
      <nav className="border-0 col-md-26 ">
        <ul class="pagination pagination-sm text-dark fw-bold flex-wrap">
          <li class="page-item active p-2" aria-current="page">
            <span
              class="page-link text-dark rounded-circle border-0"
              style={{ backgroundColor: "pink" }}
            >
              A
            </span>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark  border-0" href="#">
              B
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              C
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              D
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              E
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              F
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              G
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              H
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              I
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              J
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              K
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              L
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              M
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              N
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              O
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              P
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              Q
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              R
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              S
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              T
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              U
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              V
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              W
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              X
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              Y
            </a>
          </li>
          <li class="page-item p-2">
            <a class="page-link text-dark rounded-circle border-0" href="#">
              Z
            </a>
          </li>
        </ul>
      </nav>
      <div className="row text-start ">
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3">
            <h5>
              <b>Absolute Eosinophil Count</b>
            </h5>
            <span
              className="badge p-2 rounded-pill border-0 w-25  text-white"
              style={{ backgroundColor: "orangered" }}
            >
              CDB765
            </span>
            <h5 className="mt-2">Hematology</h5>
            <div className="row">
              <p className="col">
                <b>Rs- 200.00</b>
              </p>
              <span className="col">
                <CartPlusFill className="text-danger offset-md-8 fs-3" />
              </span>
            </div>
          </Card>
        </div>

        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3">
            <h5>
              <b>Absolute Neutrophil Count</b>
            </h5>
            <span
              className="badge p-2 rounded-pill border-0 w-25 text-white"
              style={{ backgroundColor: "orangered" }}
            >
              CDB765
            </span>
            <h5 className="mt-2">Hematology</h5>
            <div className="row">
              <p className="col">
                <b>Rs- 200.00</b>
              </p>
              <span className="col">
                <CartPlusFill className="text-danger offset-md-8 fs-3" />
              </span>
            </div>
          </Card>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3 cardd">
            <h5>
              <b>Acute Lymphoblastic Leukemia</b>
            </h5>
            <span
              className="badge p-2 rounded-pill border-0 w-25 text-white"
              style={{ backgroundColor: "orangered" }}
            >
              CDB765
            </span>
            <h5 className="mt-2">Hematology</h5>
            <div className="row ">
              <p className="col ">
                <b>Rs- 13100.00</b>
              </p>
              <span className="col">
                <CartPlusFill className="text-danger offset-md-7 fs-3" />
              </span>
            </div>
          </Card>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3 cardd">
            <h5>
              <b>ADA: adenosine deaminase-CSF</b>
            </h5>
            <span
              className="badge p-2 rounded-pill border-0 w-25 text-white"
              style={{ backgroundColor: "orangered" }}
            >
              CDB765
            </span>
            <h5 className="mt-2">Hematology</h5>
            <div className="row">
              <p className="col">
                <b>Rs-600.00</b>
              </p>
              <span className="col">
                <CartPlusFill className="text-danger offset-md-8 fs-3" />
              </span>
            </div>
          </Card>
        </div>
      </div>
      <div className="row mt-3 text-start">
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3">
            <h5>
              <b>Absolute Eosinophil Count</b>
            </h5>
            <span
              className="badge p-2 rounded-pill border-0 w-25 text-white"
              style={{ backgroundColor: "orangered" }}
            >
              CDB765
            </span>
            <h5 className="mt-2">Hematology</h5>
            <div className="row">
              <p className="col">
                <b>Rs- 200.00</b>
              </p>
              <span className="col">
                <CartPlusFill className="text-danger offset-md-8 fs-3" />
              </span>
            </div>
          </Card>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3">
            <h5>
              <b>Absolute Neutrophil Count</b>
            </h5>
            <span
              className="badge p-2 rounded-pill border-0 w-25 text-white"
              style={{ backgroundColor: "orangered" }}
            >
              CDB765
            </span>
            <h5 className="mt-2">Hematology</h5>
            <div className="row">
              <p className="col">
                <b>Rs- 200.00</b>
              </p>
              <span className="col">
                <CartPlusFill className="text-danger offset-md-8 fs-3" />
              </span>
            </div>
          </Card>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3 cardd">
            <h5>
              <b>Acute Lymphoblastic Leukemia</b>
            </h5>
            <span
              className="badge rounded-pill w-25 p-2"
              style={{ backgroundColor: "orangered" }}
            >
              ERTYF43
            </span>
            {/* <button className="btn rounded-pill border-0 w-25 text-white" style={{backgroundColor:'orangered'}}>CDB765</button> */}
            <h5 className="mt-2">Hematology</h5>
            <div className="row">
              <p className="col">
                <b>Rs- 13100.00</b>
              </p>
              <span className="col">
                <CartPlusFill className="text-danger offset-md-7 fs-3 " />
              </span>
            </div>
          </Card>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3 col-xl-3">
          <Card className="shadow bg-white p-3 cardd">
            <h5>
              <b>ADA: adenosine deaminase-CSF</b>
            </h5>
            <span
              className="badge rounded-pill w-25 p-2"
              style={{ backgroundColor: "orangered" }}
            >
              ERTYF43
            </span>

            {/* <button type="button" class="btn rounded-pill" style={{backgroundColor:'orangered'}}>Primary</button> */}
            {/* <button className="btn rounded-pill border-0 w-25 text-white" style={{backgroundColor:'orangered'}}>CDB765</button> */}
            <h5 className="mt-2">Hematology</h5>
            <div className="row">
              <p className="col">
                <b>Rs- 600.00</b>
              </p>
              <span className="col mb-5">
                <CartPlusFill className="text-danger offset-md-8 fs-3" />
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default A2ZTests;
