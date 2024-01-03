import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SliderImg1 from "../assets/images/web.p/SliderImg1.webp";
import SliderImg2 from "../assets/images/web.p/SliderImg2.webp";
import SliderImg3 from "../assets/images/web.p/SliderImg3.webp";
import SliderImg4 from "../assets/images/web.p/SliderImg4.webp";
import SliderImg5 from "../assets/images/web.p/SliderImg5.webp";
import SliderImg6 from "../assets/images/web.p/SliderImg6.webp";
import SliderImg7 from "../assets/images/web.p/SliderImg7.webp";
import SliderImg8 from "../assets/images/web.p/SliderImg8.webp";
import SliderImg9 from "../assets/images/web.p/SliderImg9.webp";
import SliderImg10 from "../assets/images/web.p/SliderImg10.webp";

const LeadingBrands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    rtl: true,
    speed: 5000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 473,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const myslider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 473,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="OurWorks" className=" py_brands">
        <Container>
          <div className=" d-flex flex-column justify-content-center align-items-center pb-4 mb-2 ">
            <p
              className=" text-uppercase text-center fw-bold lh_122 letter_spacing8 opacity_05 fs_2sm light_green"
              data-aos="fade-up"
            >
              BRANDS
            </p>
            <h2
              className=" text-center lh_122 fw-medium fs_8lg mw_897 dark_grey"
              data-aos="fade-up"
            >
              We work with thousands of the world’s leading brands
            </h2>
          </div>
          <div>
            {" "}
            <Slider {...myslider}>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg1}
                  alt="SliderImg1"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg2}
                  alt="SliderImg2"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg3}
                  alt="SliderImg3"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg4}
                  alt="SliderImg4"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg5}
                  alt="SliderImg5"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg3}
                  alt="SliderImg3"
                  className=" w-100 mw_143"
                />
              </div>
            </Slider>
          </div>
          <div className=" pt-4">
            {" "}
            <Slider {...settings}>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg6}
                  alt="SliderImg6"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg7}
                  alt="SliderImg7"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg8}
                  alt="SliderImg8"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg9}
                  alt="SliderImg9"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg10}
                  alt="SliderImg10"
                  className=" mw_143 w-100"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center gap_112">
                <img
                  src={SliderImg8}
                  alt="SliderImg8"
                  className=" w-100 mw_143"
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LeadingBrands;
