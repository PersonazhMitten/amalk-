import React from 'react'
import {SwiperSlide } from 'swiper/react';

import './gameSlide.css';


function GameSlide({game, active, toogleVideo}) {
  return (
    <SwiperSlide key={game._id}>
      <div className="gameSlider">
        <img src={game.img} alt={game.title} />
        <div className={`video ${active ? 'active' : undefined}`}>
          <iframe
            width="1280"
            height="720"
            src={game.trailer}
            title={game.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>  
        </div>
        <div className="content">
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <div className="buttons">
            <button className="orderBtn">
              Order Now
            </button>
            <button
              href="!#"
              className={`playBtn ${active ? 'active' : undefined}`}
              onClick={toogleVideo}
            >
              <span className="pause">
                <i className="bi bi-pause-fill"></i>
              </span>
              <span className="play">
                <i className="bi bi-play-fill"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  )
}

export default GameSlide