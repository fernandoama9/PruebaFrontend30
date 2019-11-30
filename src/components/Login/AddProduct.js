import React, { Component } from "react";
import { Button, FormGroup, Label, Input} from 'reactstrap';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import crypto from 'crypto';
import servicio from "../Main/getRoutes";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.handleChangeEmpresa = this.handleChangeEmpresa.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeMoneda = this.handleChangeMoneda.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeTitle =  this.handleChangeTitle.bind(this);
    this.handleChangeDescription =  this.handleChangeDescription.bind(this);    
    this.state = {
      valueTitle: '',
      valueEmpresa:'',
      valueAmount:'',
      valueImagen:'',
      valueMoneda:'',
      valueDescription: '',
      showResults : false
    };
  }

  handleChangeEmpresa(event) {
    this.setState({valueEmpresa: event.target.value});
  }

  handleChangeAmount(event) {
    this.setState({valueAmount: event.target.value});
  }

  handleChangeTitle(event) {
    this.setState({valueTitle: event.target.value});
  }

  handleChangeImage(event) {
    this.setState({valueImagen: event.target.value});
  }

  handleChangeMoneda(event) {
    this.setState({valueMoneda: event.target.value});
  }

  handleChangeDescription(event) {
    this.setState({valueDescription: event.target.value});
  }

  checkFormValidity(titulo, description, empresa, precio, image, moneda) {
		if (titulo && description && empresa && precio && image && moneda) {
      if(precio <= 0.0){
        return false;
      }
      if(this.validateRegexAlpha(titulo)){    
      return true;
      }
      if(this.validateRegexAlpha(moneda)){    
      return true;
      }
		} else {
      return false;
		}
	}
	validateRegexAlpha(value) {
		let regex_titleValue = new RegExp(/^[a-z]+$/g);
		if (value.length >= 5) {
      if (regex_titleValue.test(value)) {
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
      valueTitle,
      valueDescription,
      valueAmount,
      valueEmpresa,
      valueImagen,
      valueMoneda
		} = this.state;
    let validate = false;
    debugger;
    this.state.showResults = this.checkFormValidity(valueTitle, valueDescription, valueAmount, valueEmpresa, valueImagen, valueMoneda);
  }

isError(val) {
  if(!val){
  return (
      <div id="results" className="search-results">
        <h2>Invalid parameters</h2>
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
              value={this.state.valueEmpresa} 
              onChange={this.handleChangeEmpresa} 
              ref={(c) => this.empresa = c} 
              name="empresa"
              placeholder="Empresa"
              />
            <Label for="titulo">Titulo del producto</Label>
            <Input 
              type="text"
              placeholder="Titulo"
              value={this.state.valueTitle} 
              onChange={this.handleChangeTitle} 
              ref={(c) => this.titulo = c} 
              name="titulo"
              />
            <Label for="Descripcion">Descripcion</Label>
            <Input 
              type="text"
              placeholder="Descripcion"
              value={this.state.valueDescription} 
              onChange={this.handleChangeDescription} 
              ref={(c) => this.descripcion = c} 
              name="descripcion"
              />
            <Label for="regularPrice">Precio regular</Label>
            <Input 
              type="text"
              placeholder="Precio Regular"
              value={this.state.valueAmount} 
              onChange={this.handleChangeAmount} 
              ref={(c) => this.regularPrice = c} 
              name="regularPrice"
              />
            <Label for="currency">Moneda</Label>
            <Input 
              type="text"
              placeholder="Currency"
              value={this.state.valueMoneda} 
              onChange={this.handleChangeMoneda} 
              ref={(c) => this.currency = c} 
              name="currency"
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