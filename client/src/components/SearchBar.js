import React from "react";
import { Col, Row, Form, Input, Button, AutoComplete, TreeSelect } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./component-css/SearchBar.css";
const { TreeNode } = TreeSelect;

const SearchBar = () => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Form className="search-form" layout={"inline"} form={form}>
        <Col className="form-item" span={7} offset={2}>
          <Form.Item>
            <AutoComplete
              className="search-input"
              placeholder="Search..."
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </Form.Item>
        </Col>
        <Col className="form-item" span={7} offset={2}>
          <Form.Item>
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>
        <Col className="form-item" span={7} offset={2}>
          <Form.Item>
            <Button>
              <SearchOutlined />
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </Row>
  );
};
export default SearchBar;
