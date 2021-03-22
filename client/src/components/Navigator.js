import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {HomeOutlined,YoutubeOutlined,ContainerOutlined} from '@ant-design/icons';
import './component-css/Navigator.css';

const Navigator = () => {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu className="navigator" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Trang Chủ
      </Menu.Item>
      <Menu.Item key="tintuc" icon={<ContainerOutlined />}>
        Tin Tức
      </Menu.Item>
      <Menu.Item key="video" icon={<YoutubeOutlined />}>
        Video
      </Menu.Item>
      <Menu.Item key="hinhanh">
        Hình Ảnh
      </Menu.Item>
      <Menu.Item key="blog">
        Bếp trưởng gia đình
      </Menu.Item>
    </Menu>
  );
};
export default Navigator;