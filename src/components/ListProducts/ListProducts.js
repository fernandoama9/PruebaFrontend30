import React, { Component } from "react";
import { Button, FormGroup, Label, Input} from 'reactstrap';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import crypto from 'crypto';
import servicio from "../Main/getRoutes";

export default class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.state = {
      value: ''
    };
  }

  sayHello() {
    this.makeLogIn(validate);
  }
  
  makeRequest(){
    const {
      value,
      valuePass
		} = this.state;
  if(validate){
    const url ='https://private-ce4b1-lmdev.apiary-mock.com/country/language/cms/v1/lac/log-in/products.entity.json';
    axios({
      method: 'get',
      url
      }).then((response) => {
        if(response.status == 200){
          console.log('200 http status resp');
        }else{
          if(response.status == 200){
            console.log('202 http status resp');
          }else{
              window.location.reload(false);
          }
        }
    });
  }
}

render() {
  return (
    <table></table>
    ) 
  }
}