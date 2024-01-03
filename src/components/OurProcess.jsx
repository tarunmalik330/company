import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BusinessAudit from "../assets/images/web.p/BussinessImg.webp";
import { SearchIcon } from "./IconImage";
import { DataSvg } from "./IconImage";
import { ResultsSvg } from "./IconImage";
import DataTracking from "../assets/images/web.p/DataTracking.webp";
import Results from "../assets/images/web.p/ResultsImg.webp";

const OurProcess = () => {
  return (
    <>
      <div id="OurProcess" className="bg_process pt_process">
        <Container className="custom_container">
          <div className=" d-flex justify-content-center align-items-center flex-column">
            <p
              className=" text-white text-center opacity_05 lh_122 fw-bold letter_spacing8 fs_2sm mb-0 pb-3 text-uppercase"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              how it works
            </p>
            <h2
              className=" text-white text-center lh_122 fs_8lg fw-medium mb-0 pb-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Our Process
            </h2>
            <p
              className=" text-white text-center fw-normal fs_md lh_170 mw_718 mb-2 pb-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              We know the best solution for all of your business ideas and we
              can help you solve all business problems
            </p>
          </div>
          <div
            className=" process_card h-100 cursor_pointer d-flex mb_40"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Row className=" d-flex justify-content-around align-items-center">
              <Col lg={6}>
                <div className="">
                  <img
                    src={BusinessAudit}
                    alt="BusinessAudit"
                    className=" w-100 h-100 processcard_img"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="">
                  <SearchIcon />
                  <h3 className=" dark_grey fs_2md fw-bold lh_136 mb-0 pb-3 pt-3 mt-1">
                    Business Audit
                  </h3>
                  <p className=" mb-0 fs_6sm lh_150 fw-normal text_black1 mw_530">
                    An audit examines your business's financial records to
                    verify they are accurate. This is done through a systematic
                    review of your transactions.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div
            className=" process_card cursor_pointer mb_40"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Row className=" d-flex justify-content-around align-items-center">
              <Col lg={6}>
                <div className="">
                  <img
                    src={DataTracking}
                    alt="DataTracking"
                    className=" w-100 h-100 processcard_img"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="">
                  <DataSvg />
                  <h3 className=" dark_grey fs_2md fw-bold lh_136 mb-0 pb-3 pt-3 mt-1">
                    Data tracking
                  </h3>
                  <p className=" mb-0 fs_6sm lh_150 fw-normal text_black1 mw_530">
                    The hardware and software, which when used together allows
                    you to know where something is at any point in time
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div
            className=" process_card cursor_pointer"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Row className=" d-flex justify-content-around align-items-center">
              <Col lg={6}>
                <div className="">
                  <img
                    src={Results}
                    alt="Results"
                    className=" w-100 h-100 mw_488"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="">
                  <ResultsSvg />
                  <h3 className=" dark_grey pt-3 mt-1 fs_2md fw-bold lh_136 mb-0 pb-3">
                    Results
                  </h3>
                  <p className=" mb-0 fs_6sm lh_150 fw-normal text_black1 mw_530">
                    An audit examines your business's financial records to
                    verify they are accurate. This is done through a systematic
                    review of your transactions.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurProcess;
