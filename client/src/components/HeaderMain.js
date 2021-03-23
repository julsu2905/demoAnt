import React from "react";
import { Col, Row } from "antd";
import './component-css/HeaderMain.css';
const HeaderMain = () => {
  return (
    <Row className="header-main">
      <Col className="logo-cover" offset={2}>
        <img
          alt="logo"
          src="http://kimhangonline.vn/wp-content/uploads/2017/03/logo-kimhang-1.png"
        ></img>
      </Col>
      <Col className="banner-cover">
        <Row className="top-banner-cover">
          <Col className="top-left-banner-cover">
            <img
              alt="banner-left"
              src="http://kimhangonline.vn/wp-content/uploads/2017/04/KENH-PHAN-PHOIhhh.png"
            ></img>
          </Col>
          <Col className="top-right-banner-cover">
            <img
              alt="banner-right"
              src="http://kimhangonline.vn/wp-content/uploads/2017/04/HINH-THUC-THANH-hhTOAN-png.png"
            ></img>
          </Col>
        </Row>
        <Row className="banner">
          Hàng Việt Nam Chất Lượng Cao 21 Năm Liên Tục
        </Row>
      </Col>
      <Col>
        <img
          alt="banner-right"
          src="http://kimhangonline.vn/wp-content/uploads/2017/04/TTBH-CSKH-12.png"
        ></img>
      </Col>
    </Row>
  );
};

export default HeaderMain;
