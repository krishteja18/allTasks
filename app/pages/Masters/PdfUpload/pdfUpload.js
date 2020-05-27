import React, { Component } from "react";

import "antd/dist/antd.css";

import { Upload, message, Button } from "antd";

const beforeUpload = (file) => {
  console.log("type", file.type);

  const isPdf = file.type === "application/pdf";
  if (!isPdf) {
    message.error("You can only upload pdf file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error("File size  must be  smaller than 5MB!");
  }
  console.log("num", isPdf && isLt2M);
  return isPdf && isLt2M;
};

class PdfUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {filename:""};
  }
  onChange = (info) => {
    console.log(info, "info");

    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      this.setState({name:info.file.name})

    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  render() {
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

      beforeUpload: beforeUpload,
      onChange: this.onChange,
      showUploadList:false
    };
    return (
      <div style={{ marginTop: "100px" }}>
        <Upload {...props}>
          <Button>Click to Upload Pdf</Button>
    <p style={{marginLeft:"10px",marginTop:"20px"}}>{this.state.name}</p>
        </Upload>
      </div>
    );
  }
}
export default PdfUpload;
