import React, { useState } from 'react';
import './App.css';
import Saldo from './Components/Saldo';
import FormDespesas from './Components/FormDespesas';
import ListaDespesas from './Components/ListaDespesas';

function App() {
  const [saldo, setSaldo] = useState(0);
  const [despesas, setDespesas] = useState([]);

  const adicionarDespesa = (descricao, valor) => {
    const novaDespesa = { descricao, valor };
    setDespesas([...despesas, novaDespesa]);
    setSaldo(saldo - valor);
  };

  return (
    <div className="container">
      <h1>Gerenciador de Despesas Pessoais</h1>
      <Saldo saldo={saldo} />
      <FormDespesas adicionarDespesa={adicionarDespesa} />
      <ListaDespesas despesas={despesas} />
    </div>
  );
}

export default App;
