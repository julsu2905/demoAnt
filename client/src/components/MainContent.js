import { Col, Row, Button} from "antd";
import "./component-css/MainContent.css";
import axios from "axios";
import { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ListCat from "./CategoriesList";
import SearchBar from "./SearchBar";
import CustomSelect from "./CustomSelect";
import {SearchOutlined} from '@ant-design/icons';


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      categories: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:2905/api/category")
      .then((res) => {
        this.setState({ categories: res.data.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const danhmucStyle = {
      marginRight: 10,
    };
    return (
      <Row className="content-wrapper">
        <Col className="category-wrapper" flex="280px">
          <Row className="category-heading">
            <h4>
              <FontAwesomeIcon icon={faBars} style={danhmucStyle} />
              DANH MỤC SẢN PHẨM
            </h4>
          </Row>
          <Row className="category-list">
            <ListCat {...this.state} />
          </Row>
        </Col>
        <Col className="main-content-wrapper" flex="auto">
          <Row className="control-wrapper" gutter="3">
            <Col span={14} className="search-bar-wrapper">
              <SearchBar {...this.state} />
            </Col>
            <Col span={5} className="select-box-wrapper">
              <CustomSelect {...this.state}/>
            </Col>
            <Col span={5}><Button type="submit" shape="round" icon={<SearchOutlined />} size='large' /></Col>
          </Row>
          <Row className="carousel">asdasda </Row>
        </Col>
      </Row>
    );
  }
}
export default MainContent;
