import React, { useState, useEffect } from "react";
import logo1 from "../Images/lejhro_logo.png";
import logo2 from "../Images/lejhro_blue.png";
function NavTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 50 to the number of pixels you want to scroll before applying the "fixed-top" class
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg p-5 ${
          isScrolled ? "fixed-top bg-light pt-0 pb-0 " : ""
        }`}
        style={{
          backgroundColor: "#D6932C",
          boxShadow: isScrolled ? "1px 0.5px 5px black" : "",
        }}
      >
        <div className="container-lg px-5 d-flex justify-content-between">
          <div className="container">
            <a href="#">
              <img
                src={isScrolled ? logo2 : logo1}
                alt="CompanyLogo"
                style={{
                  width: "220px",
                }}
              />
            </a>
          </div>
          <div className="container d-flex justify-content-around text-light">
            <ul
              className={`navbar-nav  list-unstyled d-none d-lg-flex justify-content-around align-items-center mb-0 ${
                isScrolled ? "d-none" : ""
              }`}
            >
              <li className="nav-item text-light mx-3">
                <a href="#" className=" nav-link  text-capitalize">
                  innovations
                </a>
              </li>
              <li className="nav-item mx-3">
                {" "}
                <a href="#" className=" nav-link  text-capitalize">
                  services
                </a>
              </li>
              <li className="nav-item mx-3">
                {" "}
                <a href="#" className=" nav-link  text-capitalize">
                  Bootcamp
                </a>
              </li>
            </ul>
            <div
              className={`justify-content-end d-flex align-items-center ${
                isScrolled ? "" : "d-none"
              }`}
            >
              <span className="text-primary fs-6 fw-bold pe-1">Let's Talk</span>
              <i class="fs-5 fw-bold text-primary bi bi-arrow-right"></i>
            </div>
            <div className="navbar-text text-dark d-flex justify-content-end">
              <a
                class="btn border-0"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <span
                  className={`material-symbols-outlined bg-light px-2 py-2 rounded-5 justify-content-center align-items-center d-flex ${
                    isScrolled ? "bg-dark text-light" : ""
                  }`}
                >
                  menu
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#D6932C",
        }}
      >
        <div
          className="p-5 container text-light p-3 pt-0"
          style={{ fontSize: "50px" }}
        >
          <div className="container">Blogs</div>
        </div>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header px-5">
            <div class="offcanvas-title" id="offcanvasExampleLabel">
              <img src={logo2} alt="logo" style={{ width: "70%" }} />
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div class="offcanvas-body">
            <div>
            <nav className=" container mt-0  d-block">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><a className="nav-link fs-5 fw-bold text-dark" href="#innovations">Innovations</a></li>
        <li className="nav-item"><a className="nav-link fs-5 fw-bold text-dark" href="#bootcamp">Bootcamp</a></li>
        <li className="nav-item"><a className="nav-link fs-5 fw-bold text-dark" href="#services">Services</a></li>
        <li className="nav-item"><a className="nav-link fs-5 fw-bold text-dark" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link fs-5 fw-bold text-dark" href="#contact">Contact Us</a></li>
        <li className="nav-item"><a className="nav-link fs-5 fw-bold text-dark" href="#blogs">Blogs</a></li>
      </ul>
      <div className="social-icons container ps-0 d-flex justify-content-around ">
        <a className="nav-link" href="https://www.facebook.com/your-page"><i className=" text-dark  fs-2 bi bi-facebook"></i></a>
        <a className="nav-link" href="https://www.linkedin.com/in/your-profile"><i className=" text-dark  fs-2 bi bi-linkedin"></i></a>
        <a className="nav-link" href="https://www.twitter.com/your-handle"><i className=" text-dark  fs-2 bi bi-twitter"></i></a>
        <a className="nav-link" href="https://www.youtube.com/your-channel"><i className=" text-dark  fs-2 bi bi-youtube"></i></a>
      </div>
    </nav>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default NavTop;
