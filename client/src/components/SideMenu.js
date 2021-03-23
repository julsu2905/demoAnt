import React from "react";
import { Col, Row, Menu } from "antd";
import "./component-css/SideMenu.css";
import { MenuOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

const SideMenu = (props) => {
  return (
    <div>
      <Row className="category-heading">
        <Col>
          <h3>
            <MenuOutlined style={{ marginRight: 10, fontWeight: "bold" }} />
            DANH MỤC SẢN PHẨM
          </h3>
        </Col>
      </Row>
      <Row className="category-list-wrapper">
        <Menu className="category-list" mode="vertical">
          {props.categories.map((category) => {
            const { _id, name, products } = category;
            return (
              <SubMenu className="categories-item" key={_id} title={name}>
                {products.length > 0 &&
                  products.map((product) => {  
                    console.log(product);                
                    const { _id, name } = product;
                    return <Menu.Item key={_id}>{name} </Menu.Item>;
                  })}
              </SubMenu>
            );
          })}
        </Menu>
      </Row>
    </div>
  );
};
export default SideMenu;
