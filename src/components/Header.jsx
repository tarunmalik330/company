import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/images/web.p/logo.webp";
import CommonBtn from "./CommonBtn";
import Dashboard from "../assets/images/web.p/DashboardImg.webp";
import { DashboardIcon, CardArrow, CurveSvg } from "./IconImage";
import UXResearch from "../assets/images/web.p/ResearchImg.webp";
import {
  TelegramIcon,
  PlayIcon,
  StartIcon,
  CommentIcon,
  HeartIcon,
} from "./IconImage";
import MessageNortification from "../assets/images/web.p/MessagesNortification.webp";

const Header = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div id="Home" className=" bg_header">
        <Container fluid className="px_nav">
          <div className="d-flex justify-content-between align-items-center">
            <div className="cursor_pointer">
              <img src={Logo} alt="Logo" className=" w-100 mw_259 py-3" />
            </div>
            <ul
              className={`${
                show
                  ? "list-unstyled mb-0 left_100"
                  : "left_0 list-unstyled mb-0"
              } nav_bar`}
            >
              <li onClick={() => setshow(!show)}>
                <a
                  className=" fs_6sm text-white fw-medium lh_100 text-nowrap nav_link position-relative "
                  href="#Home"
                >
                  Home
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" fs_6sm text-white fw-medium lh_100 text-nowrap nav_link position-relative"
                  href="#YourBenefits"
                >
                  Your benefits
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" fs_6sm text-white fw-medium lh_100 text-nowrap nav_link position-relative"
                  href="#OurProcess"
                >
                  Our process
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" fs_6sm text-white fw-medium lh_100 text-nowrap nav_link position-relative"
                  href="#OurWorks"
                >
                  Our works
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" fs_6sm text-white fw-medium lh_100 text-nowrap nav_link position-relative"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" fs_6sm text-white fw-medium lh_100 text-nowrap nav_link position-relative"
                  href="#StartProject"
                >
                  Start a project
                </a>
              </li>
              <li className=" d-xl-none d-block">
                {" "}
                <CommonBtn buttonName="Get started" />
              </li>
            </ul>
            <div className="d-xl-block d-none">
              <CommonBtn buttonName="Get started" />
            </div>
            <div
              onClick={() => setshow(!show)}
              className={`${show ? "cross" : ""} nav_line`}
            >
              <span className="crl-1"></span>
              <span className="w-50 crl-2"></span>
              <span className="crl-3"></span>
            </div>
          </div>
        </Container>
        <Container className="pt_header mt-md-1 mt-0">
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <h1
              className=" text-white text-center lh_120 fw-medium fs_8xl mb-0 pb-2"
              data-aos="zoom-in"
            >
              A Digital Product Design Agency
            </h1>
            <p
              className=" text-white text-center fs_md fw-normal opacity_08 lh_170 mb-0 pb_41"
              data-aos="zoom-in"
            >
              We are Creative and Professional Digital Agency
            </p>
            <div data-aos="zoom-in">
              {" "}
              <CommonBtn buttonName="Get started" />
            </div>
          </div>
          <div className="dashboard_img position-relative">
            <div
              className=" d-flex justify-content-center align-items-center"
              data-aos="zoom-in-up"
            >
              <img
                src={Dashboard}
                alt="Dashboard"
                className=" w-100 mw_1044 dash_img"
              />
            </div>
            <div
              className=" dashboard_box position-absolute cursor_pointer d-flex gap-4 align-items-center justify-content-center"
              data-aos="zoom-in-right"
            >
              <DashboardIcon />
              <p className=" fw-medium lh_136 fs_2sm text_purple m-0">
                Dashboard
              </p>
            </div>
            <div
              className=" dashboard_card1 position-absolute cursor_pointer"
              data-aos="zoom-in-right"
            >
              <div className=" card1_content">
                <p className="ff_nunito fw-semibold text_purple fs_4sm mb-0 pb-2">
                  Total time
                </p>
                <div className=" d-flex gap-2 gap-sm-3 pb-sm-4 pb-2  mb-sm-1 mb-0">
                  <div className=" d-flex align-items-center gap-1">
                    <p className="text_grey fs_sm fw-normal ff_nunito mb-0">
                      Ring ratio
                    </p>
                    {/* <div className=" d-flex align-items-center"> */}
                    <CardArrow />
                    <p className=" text_orange mb-0 ff_nunito fw-normal fs_sm">
                      60.59%
                    </p>
                    {/* </div> */}
                  </div>
                  <div className=" d-flex align-items-center gap-1">
                    <p className="text_grey fs_sm fw-normal ff_nunito mb-0">
                      Ring ratio
                    </p>
                    {/* <div className=" d-flex align-items-center"> */}
                    <CardArrow />
                    <p className=" text_orange mb-0 ff_nunito fw-normal fs_sm">
                      60.59%
                    </p>
                    {/* </div> */}
                  </div>
                </div>
                <p className=" ff_nunito fs_sm fw-normal mb-0 text_lightblue mb-0 pb-2">
                  today
                </p>
                <div className=" d-flex align-items-end gap_55">
                  <p className=" mb-0 ff_nunito fw-bold fs_3md light_purple">
                    32,021
                  </p>
                  <div className=" d-md-block d-none">
                    <CurveSvg />
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" research_card d-sm-block d-none position-absolute cursor_pointer"
              data-aos="zoom-in-up"
            >
              <img src={UXResearch} alt="UXResearch" className=" w-100 br_10" />
              <p className=" pt-2 mb-0 fs_2sm lh_136 fw-medium text_purple pb-1">
                UX Research
              </p>
              <div className=" d-flex align-items-center gap-1 pb-2">
                <p className="light_grey fs_9sm fw-normal lh_180 mb-0">
                  Project January |
                </p>
                <p className="light_grey fs_9sm fw-normal lh_180 mb-0">
                  {" "}
                  by Michael Miles
                </p>
              </div>
              <div className=" d-flex gap_12">
                <div className=" icon_circle d-flex justify-content-center align-items-center">
                  <TelegramIcon />
                </div>
                <div className=" icon_circle d-flex justify-content-center align-items-center">
                  <PlayIcon />
                </div>
                <div className=" icon_circle d-flex justify-content-center align-items-center">
                  <StartIcon />
                </div>
              </div>
              <div className=" d-flex justify-content-between align-items-center">
                <div className=" d-flex align-items-center gap-1 pt-2 mt-1">
                  <CommentIcon />
                  <p className=" fs_9sm light_grey lh_180 fw-normal mb-0">
                    14 Comments
                  </p>
                </div>
                <HeartIcon />
              </div>
            </div>
            <div
              className=" position-absolute nortification_img"
              data-aos="zoom-in-left"
            >
              <img
                src={MessageNortification}
                alt="MessageNortification"
                className=" mw_277 w-100"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
