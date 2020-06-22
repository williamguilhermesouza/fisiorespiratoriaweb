import React from 'react';
import './App.css';
import AdSense from 'react-adsense';

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
                        <label for="sex">Sexo (M ou F)</label>
                        <input id="sex" type="text" maxlength="1" pattern="M|F" />
                    </div>
                    <div className="field">
                        <label for="age">Idade (anos)</label>
                        <input id="age" type="number" min="1" max="100" />
                    </div>
                    <div className="field">
                        <label for="height">Estatura (cm)</label>
                        <input id="height" type="number" min="50" max="250"/>
                    </div>
                    <div className="field">
                        <label for="weight">Peso (Kg)</label>
                        <input id="weight" type="number" min="1" max="200"/>
                    </div>
                </div>
            </form>
        </div>

        <div className="results">
            <p className="title">Resultados</p>
            <table className="resultsTable">
                <tr>
                    <th className="tableLeft"></th>
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
        /* <AdSense.Google
            client="ca-pub-9684035790566306"
        /> */
    </div>
  );
}

export default App;
