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
                <div className="labelsInputs">
                    <div className="field">
                        <label for="sex">Sexo</label>
                        <input id="sex" type="text" />
                    </div>
                    <div className="field">
                        <label for="age">Idade</label>
                        <input id="age" type="text" />
                    </div>
                    <div className="field">
                        <label for="height">Estatura</label>
                        <input id="height" type="text" />
                    </div>
                    <div className="field">
                        <label for="weight">Peso</label>
                        <input id="weight" type="text" />
                    </div>
                </div>
            </form>
        </div>

        <div className="results">
            <p className="title">Resultados</p>
            <table className="resultsTable">
                <tr>
                    <th id="emptyCell"></th>
                    <th className="tableTop">Paciente</th>
                    <th className="tableTop">Alvo Terapêutico</th>
                    <th className="tableTop">Predito</th>
                    <th className="tableTop tableEnd">Condições do Paciente</th>
                </tr>
                <tr>
                    <th className="tableLeft">Peak Flow</th>
                    <td className="tableBegin"></td>
                    <td></td>
                    <td></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">PIMax</th>
                    <td className="tableBegin"></td>
                    <td></td>
                    <td></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">PEMax</th>
                    <td className="tableBegin"></td>
                    <td></td>
                    <td></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">CI</th>
                    <td className="tableBegin"></td>
                    <td></td>
                    <td></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">CV</th>
                    <td className="tableBegin"></td>
                    <td></td>
                    <td></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">PIdeal</th>
                    <td className="tableBegin"></td>
                    <td></td>
                    <td></td>
                    <td className="tableEnd"></td>
                </tr>
                
            </table>
            
        </div>
        
    </div>
  );
}

export default App;
