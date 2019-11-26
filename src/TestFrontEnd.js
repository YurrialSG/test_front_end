import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons/';
// import axios from 'axios';
import './TestFrontEnd.css';

const hanbleSubmitRight = () => {
  console.log("Pressionou botão Direito")

}

const hanbleSubmitLeft = () => {
  console.log("Pressionou botão Esquerdo")
}


function TestFrontEnd() {
  return (
    <main>
      <div className="Artboard">
        <span className="Signos">Signos</span>
        <div className="Rectangle-12-Copy"><hr /></div>
        <div className="Rectangle-13-Copy-1">
          <div className="Rectangle-13-Copy-2">
            <span className="Combined-Shape" onClick={hanbleSubmitLeft}><KeyboardArrowLeft /></span>
            <img className="aries" src={require('./images/aries.svg')} alt="logo" ></img>
            <span className="ries">ÀRIES</span>
            <span className="Combined-Shape-Copy" onClick={hanbleSubmitRight}><KeyboardArrowRight /></span>
            <span>
              <p className="O-trabalho-exige-de">
                O trabalho exige de você dinamismo e movimento. É um dia agitado para concluir as tarefas, mas muito produtivo. É necessário dar atenção especial às expectativas e situações que mexem com o seu emocional. As responsabilidades são altas, mas são favoráveis para o seu desenvolvimento.
            </p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TestFrontEnd;
