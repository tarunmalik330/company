import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "./CommonBtn";
import WorkingImg from "../assets/images/web.p/img.webp";
import PurpleVector from "../assets/images/web.p/purpleVector.webp";

const FasterToday = () => {
  return (
    <>
      <div id="StartProject" className="bg_faster py_working">
        <Container>
          <Row className=" d-flex justify-content-center align-items-center">
            <Col lg={4}>
              <p
                className=" text-white opacity_05 letter_spacing8 lh_122 text-uppercase fw-bold fs_2sm mb-0 pb-4"
                data-aos="fade-up-right"
              >
                start with us
              </p>
              <h2
                className=" text-white fs_8lg fw-medium lh_122 mb-0 pb-4"
                data-aos="fade-up-right"
              >
                Start working faster today
              </h2>
              <p
                className=" text-white fs_md lh_170 fw-normal mb-0 pb_30 mw_408"
                data-aos="fade-up-right"
              >
                We know the best solution for all of your business ideas and we
                can help you solve all business problems
              </p>
              <div data-aos="fade-up-right">
                <CommonBtn buttonName="Get started" />
              </div>
            </Col>
            <Col
              lg={8}
              className=" d-flex justify-content-center pt-5 pt-lg-0 mt-4 mt-lg-0"
            >
              <div className=" position-relative" data-aos="fade-up-left">
                <img
                  src={PurpleVector}
                  alt="PurpleVector"
                  className=" position-absolute w-100 mw_340 Vector_Img"
                />
                <img
                  src={WorkingImg}
                  alt="WorkingImg"
                  className="w-100 mw_624 position-relative z-1"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FasterToday;
