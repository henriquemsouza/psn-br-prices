import React, { Component } from "react";
import { Input, InputGroup } from "reactstrap";
import "./InputSearchAmount.css";

class InputSearchAmount extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value === "" ? 20 : event.target.value;
    try {
      this.props.getTopGames(value);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <InputGroup>
        <Input
          type="number"
          autoComplete="off"
          placeholder="Qtd a ser exibida"
          className="amountItens"
          onChange={this.handleChange}
          maxLength={10}
        />
      </InputGroup>
    );
  }
}

export default InputSearchAmount;
