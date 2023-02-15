/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <Badge count={this.props.totalCount}>
              <Button type="primary" icon={<ShoppingCartOutlined />} >
                Cart
              </Button>
            </Badge>
          </span>
          
        </div>
      </nav>
    );
  }
}
