import React, { Component } from "react";
import Navigator from "./components/Navigator";
import { Layout } from "antd";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <Navigator />
          </Header>
          <Layout>
            <Sider></Sider>
            <Content>
            </Content>
            <Sider></Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
{/*         <Route path="/" exact component={Home}/>
 */}{/*        <Route path="/category/:id" component={Category}/>
 */} 
      </Router>
    );
  }
}

export default App;
