import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";
import _ from "lodash";

import { FormItem } from "../../../common/AntdConst/AntdConst";

import { Form, Input, Select, Button, Radio, Checkbox } from "antd";
import { connect } from "react-redux";

class FormTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        console.log("values", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 34 },
        sm: { span: 28 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 50 },
      },
    };

    return (
      <Fragment>
        <Form  style={{ marginTop:"200px",marginLeft:"400px" }} onSubmit={this.handleSubmit} >
          <div style={{ display: "flex" }}>
            <FormItem
              {...formItemLayout}
              label="Name"
              hasFeedback
              style={{ width: "270px" }}
            >
              {getFieldDecorator("Name", {
                rules: [
                  {
                    required: false,
                    message: "Please add Other Organization Type",
                  },
                ],
                initialValue: "",
              })(
                <Input
                  style={{ width: "270px", paddingLeft: "32px" }}
                  type="text"
                  name="otherorganizationtype"
                />
              )}
            </FormItem>
          </div>

          <div style={{ display: "flex" }}>
            <FormItem
              {...formItemLayout}
              label="Mail Id"
              hasFeedback
              style={{ width: "300px", paddingLeft: "1px" }}
            >
              {getFieldDecorator("mailId", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please add Mail Id",
                  },
                ],
                initialValue: "",
              })(
                <Input
                  type="text"
                  style={{ width: "270px", paddingLeft: "32px" }}
                  name="mailId"
                  // placeholder="Mail Id"
                />
              )}
            </FormItem>
          </div>
          <FormItem
            {...formItemLayout}
            label="phone"
            hasFeedback
            style={{ width: "270px" }}
          >
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "Please enter valid Phone number",
                },
                {
                  pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "please enter only digits",
                },
                {
                  min: 10,
                  message: "please enter only 10 digits",
                },
              ],
              initialValue: "",
            })(
              <Input
                type="text"
                style={{ width: "270px", paddingLeft: "32px" }}
                name="phone"
                // placeholder="Phone Number"
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Country"
            hasFeedback
            style={{ width: "270px" }}
          >
            {getFieldDecorator("country", {
              rules: [
                {
                  required: true,
                  message: "Please add Country",
                },
              ],
              initialValue: "",
            })(
              <Select
                placeholder="Please select  country"
                style={{ width: "240px" }}
              >
                <Option value="India">India</Option>
                <Option value="Australia">Australia</Option>
                <Option value="America">America</Option>
                <Option value="England">England</Option>
                <Option value="Japan">Japan</Option>
              </Select>
            )}
          </FormItem>

          <div style={{ display: "flex" }}>
            <FormItem
              {...formItemLayout}
              // hasFeedback
              style={{ width: "270px" }}
            >
              {getFieldDecorator("Gender", {
                rules: [
                  {
                    message: "",
                  },
                ],
                initialValue: "",
              })(
                <Radio.Group name="radiogroup">
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </div>
          <FormItem {...formItemLayout} style={{ width: "270px" }}>
            {getFieldDecorator("Agree", {
              rules: [
                {
                  required: true,
                },
              ],
              initialValue: "",
            })(<Checkbox>Agree</Checkbox>)}
          </FormItem>

          <FormItem {...formItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Fragment>
    );
  }
}

FormTask.propTypes = {
  dataById: PropTypes.any,
  form: PropTypes.object,
  currentAction: PropTypes.string,
};

export default Form.create()(
  connect(({roles }) => ({
    roles,
  }))(FormTask)
);