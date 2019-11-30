import React, { Component } from "react";
import Load from "load-script";

class Generic extends Component {

  componentDidMount(){
    console.log("hola", this.props)
    Load(this.props.data.pathJS, function(err, script) {
      if (err) {
        console.log("no cargó, " + err);
      } else {
        console.log("cargó users");
      }
    });
  }
  render() {
    return (
      React.createElement(this.props.data.component)
    );
  }
}

export default Generic;
