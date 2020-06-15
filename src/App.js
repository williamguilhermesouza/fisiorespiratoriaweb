import React from 'react';
import './App.css';

function App() {
  return (
    <div>
        <div className="pageTitle">
            <img src="./logo.png" alt="pulmao" />
            <p>Fisioterapia Respiratória</p> 
        </div>

        <div className="data">
            <form>
                <p className="title">Dados do Paciente</p>
                <label for="sex">Sexo</label>
                <input type="text" />
                <label for="age">Idade</label>
                <input type="text" />
                <label for="height">Estatura</label>
                <input type="text" />
                <label for="weight">Peso</label>
                <input type="text" />
            </form>
        </div>

        <div className="results">
            <p className="title">Resultados</p>
            
        </div>
        
    </div>
  );
}

export default App;
