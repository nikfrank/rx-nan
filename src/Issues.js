import React, { Component } from "react";
import "./Issues.css";
import Sad from "./imgs/sad.svg";
class Issues extends Component {
  render() {
    return (
      <div className="page">
        <div className="about-tiles">
          <div className="about-issue1 about-tile">
            <h2>Patients need insulin tips</h2>
            <div>
              <p>
                Insulin pen tips are required for subcutaneous injection of
                insulin
              </p>
              <p>The recommended needle sizes are 4mm, 5mm or 6mm</p>
            </div>
          </div>

          <div className="about-page-border-1" />

          <div className="about-issue2 about-tile">
            <ul>
              <li>
                <h2> Why do we need coverage?</h2>
              </li>
              <li> Not covering tips leads to reuse and non-use</li>
            </ul>
            <div className="sadFace">
              <img src={Sad} />
            </div>
          </div>

          <div className="about-page-border-2" />

          <div className="about-issue3 about-tile">
            <div className="about-img-div" />
            <ul>
              <li>
                <h2>
                  {" "}
                  Why is using a clean needle for each injection important?
                </h2>
              </li>
              <li>To avoid clogging of the needle</li>
              <li> To avoid bending or damage to the needle</li>
              <li>For injection comfort</li>
              <li>To maintain healthy injection sites</li>
              <li>To potentially improve insuline absorption</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Issues;
