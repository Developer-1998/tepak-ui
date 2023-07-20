import React from "react";
import '../../../App.css';
export default function LandingPage() {
  return (
    <div className="App">
      <div className="container-fluid gx-0">
        <div className="top-head"></div>
        <div className="hero-banner">
          <div className="dialogue-box">
            <p className="mb-0">What would you like to do?</p>
            <div className="d-flex">
              <div className="detail-box">
                <h4>I know the details</h4>
                <small
                >Select if you know the details of your tapes and all the
                  required information</small
                >
              </div>
              <div className="detail-box brd-color">
                <h4>I want TapeArk to assist</h4>
                <small
                >Select this if you want TapeArk to create your order
                  requirement for you</small
                >
              </div>
            </div>
            <div className="btn-next text-center">
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
