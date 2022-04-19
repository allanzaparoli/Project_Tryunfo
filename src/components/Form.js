import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form onSubmit={ onSaveButtonClick }>
          <label htmlFor="cardName">
            Nome:
            <input
              onChange={ onInputChange }
              value={ cardName }
              data-testid="name-input"
              type="text"
              id="cardName"
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição:
            <textarea
              onChange={ onInputChange }
              data-testid="description-input"
              id="cardDescription"
              value={ cardDescription }
            />
          </label>
          <label htmlFor="cardAttr1">
            Atributo1:
            <input
              onChange={ onInputChange }
              value={ cardAttr1 }
              type="number"
              data-testid="attr1-input"
              id="cardAttr1"
              min="0"
            />
          </label>
          <label htmlFor="attr2">
            Atributo2:
            <input
              onChange={ onInputChange }
              value={ cardAttr2 }
              type="number"
              data-testid="attr2-input"
              id="cardAttr2"
              min="0"
            />
          </label>
          <label htmlFor="attr3">
            Atributo3:
            <input
              onChange={ onInputChange }
              value={ cardAttr3 }
              type="number"
              data-testid="attr3-input"
              id="cardAttr3"
              min="0"
            />
          </label>
          <label htmlFor="image">
            Imagem:
            <input
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
              id="cardImage"
              alt="Imagem"
              value={ cardImage }
            />
          </label>
          <label htmlFor="raridade">
            Raridade:
            <select
              onChange={ onInputChange }
              data-testid="rare-input"
              id="cardRare"
              value={ cardRare }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Carta Super Trunfo!
            { hasTrunfo === true
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              )}
          </label>
          {isSaveButtonDisabled ? (
            <button
              type="submit"
              data-testid="save-button"
              id="save-button"
              value={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
              disabled
            >
              Salvar
            </button>
          ) : (
            <button
              type="submit"
              data-testid="save-button"
              id="save-button"
              value={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          )}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
