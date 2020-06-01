import React from "react";
import Websocket from "react-websocket";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  componentDidMount() {
    let socket = new WebSocket(
      "wss://javascript.info/article/websocket/demo/hello"
    );

    socket.onopen = function(e) {
      alert("[open] Connection established");
      alert("Sending to server");
      socket.send("My name is John");
    };

    socket.onmessage = function(event) {
      
      alert(`[message] Data received from server: ${event.data}`);
      
    };

    socket.onclose = function(event) {
      if (event.wasClean) {
        alert(
          `[close] Connection closed cleanly, code=${event.code} reason=${
            event.reason
          }`
        );
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        alert("[close] Connection died");
      }
    };

    socket.onerror = function(error) {
      alert(`[error] ${error.message}`);
    };
  }
  handleData(data) {
    // console.log(data,"data");
    alert("data");

    let result = JSON.parse(data);
    // alert(result)
    // this.setState({count: this.state.count + result.movement});
  }
  handleOpen(data) {
    alert("connected");
  }

  render() {
    return (
      <div style={{marginTop:"200px",marginLeft:"40px"}}>
      
      </div>
    );
  }
}

export default ProductDetail;
