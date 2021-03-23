import React, { Component } from "react";
import Navigator from "./components/Navigator";
import { Col, Layout, Row } from "antd";
import "./css/App.css";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderMain from "./components/HeaderMain";
import SideMenu from "./components/SideMenu";
import SearchBar from "./components/SearchBar";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      categories: [],
      user: null,
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:2905/api/category")
      .then((res) => {
        console.log(res.data.data);
        this.setState({ categories: res.data.data, isLoading: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err });
      });
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header className="custom-header">
            <Navigator />
            <HeaderMain />
          </Header>
          <Layout>
            <Sider></Sider>
            <Content className="content-wrapper">
              <Row className="content">
                <Col flex="280px" className="side-menu-wrapper">
                  <SideMenu {...this.state} className="side-menu" />
                </Col>
                <Col flex="auto" className="main-content">
                  <Row className="control-bar-wrapper">                  
                      <SearchBar />
                  </Row>
                </Col>
              </Row>
            </Content>
            <Sider></Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
