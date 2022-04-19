import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      salvarCarta: [],
    };
  }

  onInputChange = (event) => {
    const { id } = event.target;
    const value = (event.target.type === 'checkbox')
      ? event.target.checked
      : event.target.value;
    this.setState({
      [id]: value,
    }, () => this.validador());
  }

  superTrunfo = () => {
    const {
      cardTrunfo,
    } = this.state;

    if (cardTrunfo === 'checked') {
      this.setState({ cardTrunfo: true });
    } else {
      this.setState({ cardTrunfo: false });
    }
  }

  validador = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const soma = 210;
    const vlrmax = 90;

    if (
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && (+cardAttr1 >= 0 && +cardAttr2 >= 0 && +cardAttr3 >= 0)
      && (+cardAttr1 + +cardAttr2 + +cardAttr3 <= soma)
      && (+cardAttr1 <= vlrmax && +cardAttr2 <= vlrmax && +cardAttr3 <= vlrmax)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    console.log('enviei o formulario');
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      salvarCarta,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    };
    this.setState(({ salvarCarta: [...salvarCarta, newCard] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    });
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Iniciando Projeto Tryunfo</h1>
        <Form
          { ...this.state }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
