import React from "react";
import Logo from "../assets/images/web.p/logo.webp";

const Loader = () => {
  return (
    <>
      <div className="loading min-vh-100 body_bg d-flex position-fixed flex-column justify-content-center align-items-center start-0 end-0">
        <div>
          <div>
            <img src={Logo} alt="Logo" className=" w-100 mw_259 py-1" />
          </div>
          <span className="d-inline-block align-middle preloader_circle mx-1"></span>
          <span className="d-inline-block align-middle preloader_circle mx-1"></span>
          <span className="d-inline-block align-middle preloader_circle mx-1"></span>
          <span className="d-inline-block align-middle preloader_circle mx-1"></span>
          <span className="d-inline-block align-middle preloader_circle mx-1"></span>
          <span className="d-inline-block align-middle preloader_circle mx-1"></span>
          <span className="d-inline-block align-middle preloader_circle mx-1"></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
