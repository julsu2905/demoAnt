import React from "react";
import { Col, Row, Menu } from "antd";
import "./component-css/SideMenu.css";
import { MenuOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
const { SubMenu } = Menu;

const SideMenu = (props) => {
  const history = useHistory();
  const handleClick = (e) => {
    console.log(e);
  };
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
        <Menu onClick={handleClick} className="category-list" mode="vertical">
          {props.categories.map((category) => {
            const { _id, name, productGroups } = category;
            return (
              <SubMenu
                onTitleClick={handleClick}
                className="product-group-list"
                key={_id}
                title={name}
              >
                {productGroups.length > 0 &&
                  productGroups.map((productGroup) => {
                    const { _id, name } = productGroup;
                    return (
                      <Menu.Item
                        key={_id}
                        className="product-group-item"
                      >{name}</Menu.Item>
                    );
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
