import React from "react";
import "../../Assets/style.css";
import "../../Assets/media.css";
import image from "../../Assets/Images/Tastes_on_way.png";
import google from "../../Assets/Images/google.png";
import facebook from "../../Assets/Images/facebook.png";
import apple from "../../Assets/Images/apple.png";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light NavHead NavbackWhite">
        <div className="container">
          <a href="#" className="navbar-brand BrandLogo">
            <img src={image} className="ImgWidthFix img-fluid" />
          </a>
          <ul className="navbar-nav DisplayHideResp">
            <li className="nav-item">
              <a
                className="nav-link NavLinkColor"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Login
              </a>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Login
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary PopupBtnLogin"
                          data-dismiss="modal"
                        >
                          <img src={google} className="PopupBtnWidth" />{" "}
                          Continue with google
                        </button>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn BtnFacebook PopupBtnLogin"
                          data-dismiss="modal"
                        >
                          <img src={facebook} className="PopupBtnWidth" />{" "}
                          Continue with facebook
                        </button>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn BtnApple PopupBtnLogin"
                          data-dismiss="modal"
                        >
                          <img src={apple} className="PopupBtnWidth" /> Continue
                          with Apple
                        </button>
                      </div>

                      <div
                        style={{ float: "left", width: "44%", marginTop: 6 }}
                      >
                        <hr />
                      </div>
                      <div
                        style={{ float: "right", width: "44%", marginTop: 6 }}
                      >
                        <hr />
                      </div>
                      <span className="LineHeightDivider TextColor">Or</span>

                      <form>
                        <div className="form-group mt-3 mb-0">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="TextColor"
                          >
                            Email Address Or Phone Number
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer ModalHomeFooter">
                      <button
                        type="button"
                        className="btn btn-danger WidthLoginBtn"
                        data-dismiss="modal"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link NavLinkColor"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal1"
              >
                Signup
              </a>
              <div
                className="modal fade"
                id="exampleModal1"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Signup
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary PopupBtnLogin"
                          data-dismiss="modal"
                        >
                          <img src={google} className="PopupBtnWidth" />{" "}
                          Continue with google
                        </button>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn BtnFacebook PopupBtnLogin"
                          data-dismiss="modal"
                        >
                          <img src={facebook} className="PopupBtnWidth" />{" "}
                          Continue with facebook
                        </button>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn BtnApple PopupBtnLogin"
                          data-dismiss="modal"
                        >
                          <img src={apple} className="PopupBtnWidth" /> Continue
                          with Apple
                        </button>
                      </div>

                      <div
                        style={{ float: "left", width: "44%", marginTop: 6 }}
                      >
                        <hr />
                      </div>
                      <div
                        style={{ float: "right", width: "44%", marginTop: 6 }}
                      >
                        <hr />
                      </div>
                      <span className="LineHeightDivider TextColor">Or</span>

                      <form>
                        <div className="form-group mt-3 mb-0">
                          <div className="row">
                            <div className="col-lg-6">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="TextColor"
                              >
                                First name
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="col-lg-6">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="TextColor"
                              >
                                Last name
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-12">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="TextColor"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                          </div>

                          <div className="row mt-3">
                            <div className="col-lg-12">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="TextColor"
                              >
                                Phone Number
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer ModalHomeFooter">
                      <button
                        type="button"
                        className="btn btn-danger WidthLoginBtn"
                        data-dismiss="modal"
                      >
                        Signup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
