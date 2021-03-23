import React from "react";
import { Col, Row, Form, Button, AutoComplete, TreeSelect } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./component-css/SearchBar.css";
const { TreeNode } = TreeSelect;

const SearchBar = (props) => {
  const [form] = Form.useForm();

  return (
    <Row className="search-form-wrapper">
      <Form className="search-form" layout={"inline"} form={form}>
        <Col className="form-item" span={4} offset={2}>
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
        <Col className="form-item" span={7} offset={6}>
          <Form.Item>
            <TreeSelect
              style={{ width: "100%" }}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={props.categories}
              placeholder="Please select"
              treeDefaultExpandAll
            />
          </Form.Item>
        </Col>
        <Col className="form-item" span={1} offset={1}>
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
