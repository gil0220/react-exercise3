import React, { Component } from "react";
import Carts from "./components/Carts";
import Counters from "./components/Counters";
import { Badge, Menu } from "antd";
import { Route, Routes, Link } from "react-router-dom";
import {
  FileAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import Apps from "./components/AddProduct";
import AddProduct from "./components/AddProduct";
import AddProducts from "./components/AddProducts";

export default class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
        name: "Amethyst",
        image:
          "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
      },
      {
        id: 2,
        value: 1,
        name: "Cloud",
        image:
          "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
      },
      {
        id: 3,
        value: 1,
        name: "Serenity",
        image:
          "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
      },
      {
        id: 4,
        value: 1,
        name: "Euphoria",
        image:
          "https://www.diffusional.com.au/assets/alt_1/PB-G-CL.jpg?20211101135407",
      }
    ],
    carts: [],
  };

  handleDelete = (id) => {
    this.setState({
      carts: this.state.carts.filter((cart) => cart.id !== id),
    });
  };
  handleDeleteProduct = (id) => {
    this.setState({
      counters: this.state.counters.filter((counters) => counters.id !== id),
    });
  };

  handleReset = () => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        return {
          ...cart,
          value: 1,
        };
      }),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            value: cart.value + 1,
          };
        }
        return cart;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      carts: this.state.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            value: cart.value - 1,
          };
        }
        return cart;
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };
  getCartsWithValue = () => {
    return this.state.carts.filter((cart) => cart.value > 0).length;
  };

  addToCart = (info) => {
    let exists = false;
    this.state.carts.map((cart) => {
      if (cart.id === info.id) exists = true;
    });

    if (exists) {
      this.handleIncrement(info.id);
    } else {
      this.setState({
        cartProducts: (this.state.carts = [...this.state.carts, info]),
      });
    }
  };

  addProduct = (info) => {
    let exists = false;
    this.state.counters.map((counter) => {
      if (counter.id === info.id) exists = true;
    });

    if (exists) {
      this.handleIncrement(info.id);
    } else {
      this.setState({
        cartProducts: (this.state.counters = [...this.state.counters, info]),
      });
    }
  };

  componentDidMount() {
    // api calls
    console.log("didmount");
  }

  render() {
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Menu
            items={[
              {
                label: (
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                ),
                key: "/",
                icon: <HomeOutlined />,
              },
              {
                label: (
                  <Link to="/product" style={{ textDecoration: "none" }}>
                    Products
                    <Badge
                      count={this.getCountersWithValue()}
                      size="small"
                      className="ms-1"
                    />
                  </Link>
                ),
                icon: <UnorderedListOutlined />,
              },
              {
                label: (
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    Cart
                    <Badge
                      count={this.getCartsWithValue()}
                      size="small"
                      className="ms-1"
                    />
                  </Link>
                ),
                icon: <ShoppingCartOutlined />,
              },
              {
                label: (
                  <Link to="/add" style={{ textDecoration: "none" }}>
                    Add Product
                  </Link>
                ),
                icon: <FileAddOutlined />,
              },
            ]}
          ></Menu>

          <div>
            <Routes>
              <Route
                path="/"
                element={<><h3 className="m-5 " style={{ textAlign: 'center', fontStyle: 'italic'  }}>Smell O'Shoppe</h3><div><Counters
                  counters={this.state.counters}
                  addToCart={this.addToCart} 
                  /></div></>}
              />
              <Route
                path="/product"
                element={
                  <Counters
                    onDelete={this.handleDeleteProduct}
                    counters={this.state.counters}
                    addToCart={this.addToCart}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Carts
                    carts={this.state.carts}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onReset={this.handleReset}
                  />
                }
              />
              <Route
                path="/add"
                element={<AddProducts addProduct={this.addProduct} />}
              />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}
