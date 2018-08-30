import React, { Component } from "react";
import "./Issues.css";
import Sad from "./imgs/sad.svg";
class Issues extends Component {
  render() {
    return (
      <div className="page">
        <div className="about-tiles">
          <div className="about-issue1 about-tile">
            <div className="about-img-div" />
            <ul>
              <li>
                <h2>Patients need insulin tips</h2>
              </li>these tips get used 1-5 times daily 5 tips X 365 days a year
              =
              <li>
                <h3>1825 tips a year!</h3>
              </li>
            </ul>
          </div>

          <div className="about-page-border-1" />

          <div className="about-issue2 about-tile">
            <ul>
              <li>
                <h2> Why do we need coverage?</h2>
              </li>
              <li> not covering tips leads to reuse and non-use</li>
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
                <h2> What's the rest of Canada say?</h2>
              </li>
              <li>
                every other province funds these, only Ontario requires
                Exceptional Access Paperwork
                <h3 />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Issues;
