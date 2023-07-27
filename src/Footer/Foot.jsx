import React from "react";

function Foot() {
  return (
    <footer className="footer ">
      <div className="container p-5 pb-0">
        <div className="row p-5">
          <div className="col-md-3">
            <h5 className="footer-title fw-bold fs-4 pb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#innovations" className="nav-link pb-2 text-dark">
                  Innovations
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link pb-2 text-dark">
                  Services
                </a>
              </li>
              <li>
                <a href="#legiro" className="nav-link pb-2 text-dark">
                  Lejhro Recruiter
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link pb-2 text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#blogs" className="nav-link pb-2 text-dark">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footer-title fw-bold fs-4 pb-3">Programs</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#blogs" className="nav-link pb-2 text-dark">
                  Lejhro Bootcamp
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footer-title fw-bold fs-4 pb-3">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#blogs" className="nav-link pb-2 text-dark">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blogs" className="nav-link pb-2 text-dark">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#blogs" className="nav-link pb-2 text-dark">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footer-title fw-bold fs-4 pb-3">Connect with us</h5>
            <div className="social-icons ps-0 container d-flex justify-content-between ">
              <a className="nav-link" href="https://www.facebook.com/your-page">
                <i className=" text-dark fs-5 bi bi-facebook"></i>
              </a>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/your-profile"
              >
                <i className=" text-dark  fs-5 bi bi-linkedin"></i>
              </a>
              <a
                className="nav-link"
                href="https://www.twitter.com/your-handle"
              >
                <i className=" text-dark  fs-5 bi bi-twitter"></i>
              </a>
              <a
                className="nav-link"
                href="https://www.youtube.com/your-channel"
              >
                <i className=" text-dark  fs-5 bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row p-0">
          <div className="col-md-12 text-center">
            <p className="footer-copyright">
              © 2023 LEJHRO. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
