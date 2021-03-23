import React, { Component } from "react";
import { withRouter,Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;
class ListCat extends Component {
  handleClick = (id) =>{
    this.props.history.push(`/category/${id}`);
  }
  render() {
    console.log(this.props.categories);
    const { isLoading, categories } = this.props;
    return (
      <div className="category-list">
        <Menu mode="vertical">
          {isLoading &&
            categories.map((category) => {
              const { _id, name, products } = category;
              return (
                  <SubMenu onTitleClick={this.handleClick(_id)} key={_id} title={name}>
                    <Menu.Item key='1'> 1 </Menu.Item>
                  </SubMenu>
              );
            })}
        </Menu>
      </div>
    );
  }
}

export default withRouter(ListCat);
