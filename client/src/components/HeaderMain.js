import React from "react";
import { Col, Row } from "antd";
import "./component-css/HeaderMain.css";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  return (
    <Row className="header-main">
      <Col className="logo-cover" offset={3}>
        <Link to="/home">
          <img
            alt="logo"
            src="http://kimhangonline.vn/wp-content/uploads/2017/03/logo-kimhang-1.png"
          ></img>
        </Link>
      </Col>
      <Col className="banner-cover">
        <Row className="top-banner-cover">
          <Col className="top-left-banner-cover">
            <Link to="/kenh-phan-phoi">
              <img
                alt="banner-left"
                src="http://kimhangonline.vn/wp-content/uploads/2017/04/KENH-PHAN-PHOIhhh.png"
              ></img>
            </Link>
          </Col>
          <Col className="top-right-banner-cover">
            <Link to="/phuong-thuc-thanh-toan">
              <img
                alt="banner-right"
                src="http://kimhangonline.vn/wp-content/uploads/2017/04/HINH-THUC-THANH-hhTOAN-png.png"
              ></img>
            </Link>
          </Col>
        </Row>
        <Row className="banner">
          Hàng Việt Nam Chất Lượng Cao 21 Năm Liên Tục
        </Row>
      </Col>
      <Col>
        <Link to="/policy"> 
          <img
            alt="banner-right"
            src="http://kimhangonline.vn/wp-content/uploads/2017/04/TTBH-CSKH-12.png"
          ></img>
        </Link>
      </Col>
    </Row>
  );
};

export default HeaderMain;
