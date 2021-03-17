import React, { Component } from "react";
import Navigator from "./components/Navigator";
import { Layout } from "antd";
import "./css/App.css";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header><Navigator/></Header>
        <Layout>
          <Sider>Left</Sider>
          <Content>Content</Content>
          <Sider>Right</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
