import React, { Component } from "react";
import { Col, Divider, Row } from "antd";
import "./component-css/Navigator.css";

class Navigator extends Component {
  render() {
    return (
      <div>
        <div className="navigator">
          <Row>
            <Col span={10} offset={2}>
              <ul>
                <li>
                  <a>Trang Chủ</a>
                </li>
                <li>
                  <a>Tin Tức</a>
                </li>
                <li>
                  <a>Video</a>
                </li>
                <li>
                  <a>Hình ảnh</a>
                </li>
                <li>
                  <a>Bếp trưởng gia đình</a>
                </li>
              </ul>
            </Col>
            <Col span={10}>
              <ul>
                <li>
                  <a>Bảo hành</a>
                </li>
                <li>
                  <a>Kiểm tra đơn hàng</a>
                </li>
                <li>
                  <a>Đăng nhập</a>
                </li>
                <li>
                  <a>Giỏ hàng</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="header-main">
          <Divider style={{ background: "#fff" }} />
          <Row>
            <Col offset={2}>
              <div className="logo-cover">
                <img
                  alt="logo"
                  src="http://kimhangonline.vn/wp-content/uploads/2017/03/logo-kimhang-1.png"
                ></img>
              </div>
              <div className="banner">
                <div>
                  
                </div>
              </div>
            </Col>          
          </Row>
        </div>
{/*         <Divider style={{ background: "#000" }} /> */}
      </div>
    );
  }
}

export default Navigator;
