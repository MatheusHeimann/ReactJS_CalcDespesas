import React from 'react';

const ListaDespesas = ({ despesas }) => {
  return (
    <div className="despesas">
      <h2>Despesas</h2>
      <ul>
        {despesas.map((despesa, index) => (
          <li key={index}>
            {despesa.descricao}: R$ {despesa.valor.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDespesas;
