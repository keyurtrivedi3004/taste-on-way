import React from "react";
import "../../Assets/style.css";
import "../../Assets/media.css";
import healthyFood from "../../Assets/Images/healthy-food-home.png";
import healthyFruitSalad from "../../Assets/Images/healthy-fruit-salad.png";

const HomeWidget2 = () => {
  return (
    <>
      <div className="container-fluid TopMargin HomeBackWhite">
        <div className="container">
          <div className="row PaddingHome">
            <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
              <h2>
                It’s all here.
                <br />
                All in one app.
              </h2>
              <div className="ContentText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </div>
              <button className="btn btn-danger mt-4 BtnViewMore">
                View More
              </button>
              <div />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src={healthyFood}
                className="card-img-top ContentImg img-fluid"
                alt="become a dasher"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row PaddingHome">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src={healthyFruitSalad}
                className="card-img-top ContentImgLeft img-fluid"
                alt="become a dasher"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
              <h2>
                Every Flavor
                <br />
                Welcome
              </h2>
              <div className="ContentText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </div>
              <button className="btn btn-danger mt-4 BtnViewMore">
                View More
              </button>
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWidget2;
