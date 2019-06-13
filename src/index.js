import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.css";

// componente em forma de Classe (statefull component)
class App extends Component {
  state = {
    counter: 0
  };

  // este método executa automaticamente na inicialização do componente (ciclo de vida)
  // método perfeito para realizar chamadas à API, para carregar informações iniciais
  // também utilizado para cadastrar event listeners, por exemplo ficar esperando alguma ação de clique de mouse
  componentDidMount() {}

  // toda vez que o componente sofre uma alteração na propriedade ou no estado
  // executa antes de sofrer a atualização do render(), para que possamos controlar a atualização
  // utilizado bastante para controlar a performance do componente
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  // executa depois de sofrer a atualização do render()
  componentDidUpdate(prevProps, prevState) {}

  // é ao conntrário do componente componentDidMount()
  // basicamente é utilizado quando queremos fazer alguma quando o componente deixa de existir na aplicação
  // utilizado também para limpar todo event listeners que foi cadastrado dentro do componentDidMount()
  componentWillUnmount() {}

  handleClick = () => {
    // estamos sobrepondo a variável no estado, pois, não é permitido alterar o valor dela
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    //console.log("render");
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
