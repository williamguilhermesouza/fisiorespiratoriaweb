import React from 'react';
import './App.css';
import AdSense from 'react-adsense';

function App() {

    let sex, age, weight, height, results;

    function calculatePeakFlow() {
        let height_factor = Math.round(height / 5);
        const age_factor = Math.round(age / 5) - 4;
        let flowTable = [];
        let peakflowvalue = 0;

        if (sex === 'M') {
            height_factor -= 31;
            flowTable = [
                [564, 583, 601, 620, 639, 657],
                [553, 571, 589, 608, 626, 644],
                [541, 559, 577, 594, 612, 630],
                [530, 547, 565, 582, 599, 617],
                [518, 535, 552, 569, 586, 603],
                [507, 523, 540, 557, 573, 576],
                [494, 511, 527, 543, 560, 563],
                [483, 499, 515, 531, 547, 563],
                [471, 486, 502, 518, 533, 549],
                [460, 475, 490, 505, 520, 536],
                [448, 462, 477, 492, 507, 521]
            ];
        } else if (sex === 'F') {
            height_factor -= 29;
            flowTable = [
                [405, 418, 431, 445, 459, 473],
                [399, 412, 426, 440, 453, 467],
                [394, 407, 421, 434, 447, 461],
                [389, 402, 415, 428, 442, 455],
                [383, 396, 409, 422, 435, 448],
                [378, 391, 404, 417, 430, 442],
                [373, 386, 398, 411, 423, 436],
                [368, 380, 393, 405, 418, 430],
                [363, 375, 387, 399, 411, 424],
                [358, 370, 382, 394, 406, 418],
                [352, 364, 376, 388, 399, 411]
            ]; 
        };

        peakflowvalue = flowTable[age_factor][height_factor];
        return peakflowvalue;

};

    function calculatePMax() {
        let pivalue, pevalue;

        if (sex === 'M') {
            pivalue = 155.3 - (0.8 * age);
            pevalue = 165.4 - (0.81 * age);

        } else if (sex === 'F') {
            pivalue = 110.4 - (0.49 * age);
            pevalue = 115.6 - (0.61 * age);
        }; 

        return [pivalue, pevalue];
    };


    function calculatePideal() {
        let pidealvalue;
        
        if (sex === 'M') {
            pidealvalue = 50 + 0.91 * (height - 152.4);

        } else if (sex === 'F') {
            pidealvalue = 45.5 + 0.91 * (height - 152.4);
        };

        return pidealvalue;
    };

    function calculateCV(pvalue) {
        let cvvalue;

        if (sex === 'M') {
            cvvalue = 75 * pvalue;

        } else if (sex === 'F') {
            cvvalue = 65 * pvalue;
        };

        return cvvalue;
    };

    function calculateResults(e) {
        e.preventDefault();
        let calcflow, calcpimax, calcpemax, calcci, calccv, pideal;

        sex = document.getElementById("sex").value;
        age = document.getElementById("age").value;
        height = document.getElementById("height").value;
        weight = document.getElementById("weight").value;

        if (!sex || !age || !height || !weight) {
            alert("Insira todos os valores!!!");
            return;    
        };

        calcflow = calculatePeakFlow();
        [ calcpimax, calcpemax ] = calculatePMax();
        pideal = calculatePideal();
        calcci = 2600;
        calccv = calculateCV(pideal);

        results = { calcflow, calcpimax, calcpemax, calcci, calccv, pideal };

        document.getElementById("calcflow").innerHTML = calcflow.toFixed(2);
        document.getElementById("calcpimax").innerHTML = calcpimax.toFixed(2);
        document.getElementById("calcpemax").innerHTML = calcpemax.toFixed(2);
        document.getElementById("calcci").innerHTML = calcci.toFixed(2);
        document.getElementById("calccv").innerHTML = calccv.toFixed(2);
        document.getElementById("pideal").innerHTML = pideal.toFixed(2);
    };



  return (
    <div>
        <div className="pageTitle">
            <img src="./logo.png" alt="pulmao" />
            <p>Fisioterapia Respiratória</p> 
        </div>

        <div className="data">
            <form onSubmit={e => calculateResults(e)}>
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
                <input type="submit" value="Calcular" />
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
                    <td>Maior que {}</td>
                    <td id="calcflow"></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">PIMax</th>
                    <td className="tableBegin"></td>
                    <td>Maior ou igual a {}</td>
                    <td id="calcpimax"></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">PEMax</th>
                    <td className="tableBegin"></td>
                    <td>Maior ou igual a {}</td>
                    <td id="calcpemax"></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">CI</th>
                    <td className="tableBegin"></td>
                    <td>Maior ou igual a {}</td>
                    <td id="calcci"></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">CV</th>
                    <td className="tableBegin"></td>
                    <td>Maior que {}</td>
                    <td id="calccv"></td>
                    <td className="tableEnd"></td>
                </tr>
                <tr>
                    <th className="tableLeft">PIdeal</th>
                    <td id="pidealLeft"></td>
                    <td className="tableBegin"></td>
                    <td id="pideal"></td>
                    <td className="tableEnd"></td>
                </tr>
                
            </table>
            
        </div>
        
    </div>
  );
}

export default App;
