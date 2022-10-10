import React from "react";
import "../../Assets/style.css";
import "../../Assets/media.css";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid HomeBackBlack">
        <div className="container PaddingHome">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-md-4">
              <ul className="ListUlFooter">
                <span className="FontTitle">Top Cities</span>
                <li>
                  <a className="ListFooter" href="#">
                    Ahmedabad
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Vadodara
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Surat
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Anand
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-md-4">
              <ul className="ListUlFooter">
                <span className="FontTitle">Top Cuisines</span>
                <li>
                  <a className="ListFooter" href="#">
                    Pizza near me
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Chinese food near me
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Sushi near me
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Cafe near me
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-md-4">
              <ul className="ListUlFooter">
                <span className="FontTitle">Get to Know Us</span>
                <li>
                  <a className="ListFooter" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Investors
                  </a>
                </li>
                <li>
                  <a className="ListFooter" href="#">
                    Company Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="PaddingFooter">
        <div className="container">
          <div className="Copyleft">
            <span>© 2022,Tastes On Way. All rights Reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
