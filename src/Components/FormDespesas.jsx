import React, { useState } from 'react';

const FormDespesas = ({ adicionarDespesa }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarDespesa(descricao, parseFloat(valor));
    setDescricao('');
    setValor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Valor:</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default FormDespesas;
