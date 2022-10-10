import React from "react";
import "../../../style.css";
import "../../../media.css";
import dasher from "../../../Assets/Images/become a dasher.png";
import partner from "../../../Assets/Images/become a partner.png";
import app from "../../../Assets/Images/try an app.png";

const HomeWidget1 = () => {
  return (
    <>
      <div className="container">
        <div className="row TopMargin">
          <div className="col-sm-12 col-md-4 col-md-4">
            <div className="card BoxCard" style={{ width: "18rem" }}>
              <img
                src={dasher}
                className="card-img-top BoxImg"
                alt="become a dasher"
              />
              <div className="card-body BoxTextCenter">
                <h5 className="card-title">Become a Dasher</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="BoxLink">
                  View More
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-md-4 TopBoxmargin">
            <div className="card BoxCard" style={{ width: "18rem" }}>
              <img
                src={partner}
                className="card-img-top BoxImg"
                alt="become a dasher"
              />
              <div className="card-body BoxTextCenter">
                <h5 className="card-title">Become a Partner</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="BoxLink">
                  View More
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-md-4 TopBoxmargin">
            <div className="card BoxCard" style={{ width: "18rem" }}>
              <img
                src={app}
                className="card-img-top BoxImg"
                alt="become a dasher"
              />
              <div className="card-body BoxTextCenter">
                <h5 className="card-title">Try an App</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="BoxLink">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWidget1;
