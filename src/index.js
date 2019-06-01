import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    // estamos sobrepondo a variável no estado, pois, não é permitido alterar o valor dela
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("render");

    return (
      <Fragment>
        <h1>Hello World!</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}> Somar </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
