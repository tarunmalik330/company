import React from "react";
import { Container } from "react-bootstrap";
import FooterLogo from "../assets/images/web.p/FooterLogo.webp";
import { FacebookIcon } from "./IconImage";
import { InstagramIcon } from "./IconImage";
import { TwitterIcon } from "./IconImage";

const Footer = () => {
  return (
    <>
      <div className=" bg-black">
        <Container className="custom_container">
          <div className=" d-flex flex-xl-row flex-column justify-content-between align-items-center pb-4 pt_footer">
            <div className=" pb-4 pb-xl-0">
              <a href="">
                <img
                  src={FooterLogo}
                  alt="FooterLogo"
                  className=" w-100 h-100 mw_176"
                />
              </a>
            </div>
            <div className=" pb-5 pb-xl-0">
              {" "}
              <ul className="flex_flow_wrap justify-content-center list-unstyled d-flex gap_32 align-items-center mb-0">
                <li>
                  <a
                    className="text_white fs_6sm text-nowrap fw-medium lh_100  nav_link position-relative"
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text_white fs_6sm fw-medium text-nowrap lh_100  nav_link position-relative"
                    href="#YourBenefits"
                  >
                    Your benefits
                  </a>
                </li>
                <li>
                  <a
                    className="text_white fs_6sm fw-medium text-nowrap lh_100  nav_link position-relative"
                    href="#OurProcess"
                  >
                    Our process
                  </a>
                </li>
                <li>
                  <a
                    className="text_white fs_6sm fw-medium text-nowrap lh_100  nav_link position-relative"
                    href="#OurWorks"
                  >
                    Our works
                  </a>
                </li>
                <li>
                  <a
                    className="text_white fs_6sm fw-medium text-nowrap lh_100  nav_link position-relative"
                    href=""
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="text_white fs_6sm fw-medium text-nowrap lh_100  nav_link position-relative"
                    href="#StartProject"
                  >
                    Start a project
                  </a>
                </li>
              </ul>
            </div>
            <div className=" d-flex gap_20">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className=" border-bottom border_color"></div>
          <div className=" mt-4 pt-1 d-flex justify-content-between align-items-center pb_38">
            <p className=" mb-0 text-white opacity_80 lh_166 fw-normal fs_5sm">
              © 2021 Company
            </p>
            <div className=" d-flex gap-4">
              <p className=" mb-0 lh_133 fs_5sm fw-normal text_white opacity_80">
                Privacy policy
              </p>
              <p className=" mb-0 lh_133 fs_5sm fw-normal text_white opacity_80">
                Term of service
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
