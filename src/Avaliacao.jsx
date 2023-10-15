import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';


import './Avaliacao.css';

function Avaliacao() {

  const stars = Array(5).fill(0);
  const [userAvaliacao, setUserAvaliacao] = useState(0)
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [showButton, setShowButton] = useState(false);

  const [id] = useState(1);


  const handleVoto = async () => {

    // try {
    //   const response = await api.post('URL_DA_API/avaliacoes', { rating: userAvaliacao });
    //   console.log('Avaliação enviada com sucesso:', response.data);
    //   Atualize o estado de avaliações com a nova avaliação
    //   setComentarios([...comentarios, response.data]);
    // } catch (error) {
    //   console.error('Erro ao enviar a avaliação:', error);
    // }

    if (userAvaliacao === 0) {
      alert('Por favor, selecione uma avaliação.');
      return;
    }

    setUserAvaliacao(userAvaliacao);
    setShowButton(false)
    alert('Sua avaliação ' + userAvaliacao + ' foi enviada com sucesso!')

  };

  const handleClickVoto = value => {
    setUserAvaliacao(value);
    setShowButton(true);
    setCurrentValue(value);

    console.log('nota não enviada >>> ', value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const colors = {
    yellow: "#f5f22f",
    grey: "#A9A9A9",
    lowYellow: "#e9e6146a"
  }

  return (

    <>
        <div className="estrelasContainer">

          <h2>Faça a sua avaliação abaixo:</h2>

          <div className="estrelas">

            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={45}
                  style={{
                    marginTop: 35,
                    marginRight: 15,
                    cursor: "pointer"
                  }}
                  color={(hoverValue || currentValue) >= index + 1 ? colors.yellow : colors.grey}
                  onClick={() => handleClickVoto(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                />
              )
            })}

          </div>
          
          {!showButton && userAvaliacao > 0 ? (

            <div className="avaliacaoFixa">
              <span>Avaliação: {userAvaliacao}</span>
            </div>

          ) : (

            <button className="btn_votar" onClick={handleVoto}>Avaliar</button>

          )}
          
        </div>

      
    </>
  )
}

export default Avaliacao;
