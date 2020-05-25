import React from "react";
import { MDBDatePicker } from "mdbreact";
import { DatePicker } from "antd";

import moment from "moment-timezone/builds/moment-timezone-with-data";

class DatePickerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      utc: "",
      tz: "Asia/Shanghai",
      date: "",
      pickedDate: "",
    };
  }

  getPickerValue = (value) => {
    this.setState({
      utc: moment.utc(value).valueOf(),
      pickedDate: value,
      date: moment.tz(value, `${this.state.tz}`).format("YYYY/MM/DD  HH:mm a"),
    });
  };
  handleChange = (e) => {
    this.setState({
      date: moment
        .tz(this.state.pickedDate, `${e.target.value}`)
        .format("YYYY/MM/DD  HH:mm a"),
      tz: e.target.value,
    });
  };

  render() {
    const { RangePicker } = DatePicker;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "108px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <p>Select Date:</p>
          <MDBDatePicker
            disablePast
            format="zz"
            getValue={this.getPickerValue}
          />
          <br />
          <p>UTC Time:</p>
          <input
            value={this.state.utc}
            style={{ border: "2px solid grey", marginTop: "15px" }}
          />
          <br />
          <p>Select Time Zone:</p>
          <select
            style={{ border: "2px solid grey", marginTop: "5px" }}
            onChange={this.handleChange}
          >
            <option value="America/Chicago">CST</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">PDT</option>
            <option value="Asia/Calcutta">IST</option>
          </select>
        </div>
        <div style={{ position: "relative", top: "40px", left: "-351px" }}>
          {this.state.date}
        </div>
        <div>
          <p>Date Range Picker:</p>
          <RangePicker />
        </div>
      </div>
    );
  }
}

export default DatePickerPage;
