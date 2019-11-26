import React, { useState, useEffect } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons/';
import axios from 'axios';
import './TestFrontEnd.css';

function TestFrontEnd() {

  const [horoscopes, setHoroscopes] = useState([]);
  const [position, setPosition] = useState(0);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  const hanbleSubmitRight = () => {
    if (position !== 11) {
      setPosition(position + 1)
      // console.log("Pressionou botão Direito--> Position: " + position)
      return;
    }
    console.log("Não pode pressionar botão Direito")
  }

  const hanbleSubmitLeft = () => {
    if (position !== 0) {
      setPosition(position - 1)
      // console.log("Pressionou botão Esquerdo--> Position: " + position)
      return;
    }
    console.log("Não pode pressionar botão Esquerdo")
  }

  useEffect(() => {
    axios.get('https://horoscope.suaradionanet.net/api/horoscope', {
      headers: {
        'x-api-key': 'OiU(!kh4Fj8!dZP(u)9Fr'
      }
    })
      .then(res => {
        setHoroscopes(res.data);
        console.log(res.data)
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true)
      })
  }, [setPosition]);


  if (load) {
    if (error) {
      return (
        <div>
          Error ao buscar dados da API
          </div>
      );
    }
    return (
      <main>
        {/* {console.log(JSON.stringify(horoscopes[position]))} */}
        {/* {console.log(JSON.stringify(horoscopes[position].predictions[0].description))} */}
        <div className="Artboard">
          <span className="Signos">Signos</span>
          <div className="Rectangle-12-Copy"><hr /></div>
          <div className="Rectangle-13-Copy-1">
            <div className="Rectangle-13-Copy-2">
              <span className="Combined-Shape" onClick={hanbleSubmitLeft}><KeyboardArrowLeft /></span>
              <img className="aries" src={require(`./images/${horoscopes[position].slug}.svg`)} alt="logo" ></img>
              <span className="ries">{horoscopes[position].description}</span>
              <span className="Combined-Shape-Copy" onClick={hanbleSubmitRight}><KeyboardArrowRight /></span>
              <span>
                <p className="O-trabalho-exige-de">
                  {horoscopes[position].predictions[0].description}
                </p>
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div>
        Loading...
        </div>
    );
  }

}

export default TestFrontEnd;
