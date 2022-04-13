import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input data-testid="name-input" type="text" id="name" />
          </label>
          <label htmlFor="description">
            Descrição:
            <textarea data-testid="description-input" id="description" />
          </label>
          <label htmlFor="attr1">
            Atributo1:
            <input type="number" data-testid="attr1-input" id="attr1" />
          </label>
          <label htmlFor="attr2">
            Atributo2:
            <input type="number" data-testid="attr2-input" id="attr2" />
          </label>
          <label htmlFor="attr3">
            Atributo3:
            <input type="number" data-testid="attr3-input" id="attr3" />
          </label>
          <label htmlFor="image">
            Imagem:
            <input type="image" data-testid="image-input" id="image" alt="Imagem" />
          </label>
          <label htmlFor="raridade">
            Raridade:
            <select data-testid="rare-input" id="raridade">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Carta Super Trunfo!
            <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
          </label>
          <label htmlFor="button">
            <input type="button" data-testid="save-button" id="button" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
