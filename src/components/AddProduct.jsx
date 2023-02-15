/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Button, Input, Form } from "antd";
export default class AddProduct extends Component {
  render() {
    const { addProduct } = this.props;

    const onChangeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
      });
    };
    const { children } = this.props;
    return (
      <>
        {children}
        <Form
          labelCol={{
            span: 20,
          }}
          wrapperCol={{
            span: 20,
          }}
          layout="vertical"
          initialValues={{
            size: "default",
          }}
          className="m-5"
        >
          <Form.Item label="Product Name">
            <Input name="name" onChange={onChangeHandler} required />
          </Form.Item>
          <Form.Item label="Id No.">
            <Input name="id" onChange={onChangeHandler} required />
          </Form.Item>
          <Form.Item label="Quantity">
            <Input name="value" onChange={onChangeHandler} required />
          </Form.Item>
          <Form.Item label="Image source/url">
            <Input name="image" onChange={onChangeHandler} required />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {
                addProduct(this.state);
                console.log(this.state);
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
