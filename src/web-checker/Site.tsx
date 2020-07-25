import React from "react";
import { List } from "antd";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

const Site: React.FC<Site> = ({ name, url }) => (
  <List.Item>
    <List.Item.Meta avatar={<StarOutlined />} title={name} description={url} />
  </List.Item>
);

export default Site;
