import React, { Component } from "react";
import { Button, FormGroup, Label, Input} from 'reactstrap';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import crypto from 'crypto';
import servicio from "../Main/getRoutes";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmpresa = this.handleChangeEmpresa.bind(this);
    this.state = {
      value: '',
      valuePass: '',
      valueEmpresa:'',
      valueAmount:'',
      valueImagen:'',
      valueMoneda:'',
      showResults : false
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeEmpresa(event) {
    this.setState({valuePass: event.target.value});
  }

  checkFormValidity(passwordValue, userNameValue) {
		if (userNameValue && passwordValue) {
      if(this.userNameValidation(userNameValue)){    
      return true;
      }
		} else {
      return false;
		}
	}
	userNameValidation(value) {
		let regex_emailNumberValue = new RegExp(/^[a-z]+$/g);
		if (value.length >= 5) {
      if (regex_emailNumberValue.test(value)) {
        return true;
      }else{
        return false;
      }
		}else{
      return false;
    }

	}

  sayHello() {
    const {
      value,
      valuePass
		} = this.state;
    let validate = false;
    this.setState({
			userNameValue: value,
			passwordValue: valuePass,
		});	
    validate = this.checkFormValidity(valuePass, value);
    this.makeLogIn(validate);
  }
  
  makeLogIn(validate){
    const {
      value,
      valuePass
		} = this.state;
  if(validate){
    const url ='qwertyuio';
    axios({
      method: 'POST',
      url,
      headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json'
      }, 
      data: {
        user: value, // This is the body part
        password: valuePass,
    }
      }).then((response) => {
        if(response.status == 200){
          window.location.reload(false);
        }else{
          console.log("Invalid Credentials");
          this.setState({ showResults: true });
        }
    });
  }
}

isError(val) {
  if(val){
  return (
      <div id="results" className="search-results">
        <h2>Invalid Credentials</h2>
      </div>
  );
  }else{
    return null;
  }
}

render() {
  return (
    <div className="contentPage">
      <div className="contentForm">        
          <div><h2 id = "MainTitle">MarketPlace</h2></div>
          <div><h3 id = "SubTitle">Add new product</h3></div>
          <FormGroup>
            <Label for="Empresa">Empresa:</Label>
            <Input 
              type="text"
              value={this.state.value} 
              onChange={this.handleChange} 
              ref={(c) => this.empresa = c} 
              name="empresa"
              placeholder="Empresa"
              /> 
          </FormGroup>
          <FormGroup>
            <Label for="product_title">Titulo del producto</Label>
            <Input 
              type="product_title"
              placeholder="Titulo"
              value={this.state.valuePass} 
              onChange={this.handleChangePass} 
              ref={(c) => this.password = c} 
              name="password"
              />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input 
              type="password"
              placeholder="********"
              value={this.state.valuePass} 
              onChange={this.handleChangePass} 
              ref={(c) => this.password = c} 
              name="password"
              />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input 
              type="password"
              placeholder="********"
              value={this.state.valuePass} 
              onChange={this.handleChangePass} 
              ref={(c) => this.password = c} 
              name="password"
              />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input 
              type="password"
              placeholder="********"
              value={this.state.valuePass} 
              onChange={this.handleChangePass} 
              ref={(c) => this.password = c} 
              name="password"
              />
          </FormGroup>
          <div>
            <Button color="danger" id="SignIn"  onClick = {this.sayHello}>Add new product</Button>
          </div>
          { this.isError(this.state.showResults)}
        </div>
      </div>
    ) 
  }
}