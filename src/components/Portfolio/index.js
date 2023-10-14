import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import gdd from './gdd.png';
import plates from './PLATES.png';
import color from '../../assets/images/couleurs.jpg';
import aeroport from '../../assets/images/tour.jpg';
import black from '../../assets/images/black.jpg';
import cersit from '../../assets/images/cerist1.png';
import polypes from '../../assets/images/polype.png';
import maquette from '../../assets/images/maquette.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const myComponent = {
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  };

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  return (
    <>
      <div className="container home-page2" style={myComponent}>
        <div className="text-zone2">
          <h1>My portfolio</h1>
        </div>
        <div class="portfolio">
          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={plates} alt="Reconaissance de matricules" />
              <div className="title">Reconaissance de matricules</div>
              
              <div className="links">
              <Link to="https://github.com/djillalimazigh566/Carplates-verification"  target="_blank" className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={gdd} alt="Jeux unity a l'USTHB" />
              <div className="title">Jeux unity a l'USTHB</div>
              <div className="links">
             
                <Link to="/portfolio" className="button1"  onclick="on()">
                  Game Design Document 
                </Link>
              </div>
              <div className="links">
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={color} alt="Colorisation de videos en niveau de gris" />
              <div className="title">Colorisation de videos en niveau de gris</div>
              <div className="links">
                <Link to="https://colab.research.google.com/drive/1GF39-A4vcT5Rkhs9XLOBq0dhZWA5aFFI?authuser=2&hl=fr#scrollTo=WcSYZika8JCA" target="_blank" className="button1">
                  Demo
                </Link>
              </div>
              <div className="links">
              <Link to="https://github.com/djillalimazigh566/video-colorization" target="_blank" className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={aeroport} alt="Simulation de tour de contole aerienne" />
              <div className="title">Simulation de tour de contole aerienne</div>
              <div className="links">
                <Link to="/portfolio" className="button1">
                  Screenshots
                </Link>
              </div>
              <div className="links">

              <Link to="https://github.com/djillalimazigh566/RMI-AIRPLANE-CONTROLLER" target="_blank"className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={cersit} alt="Some description" />
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={polypes} alt="Depot documentaire pour la division R&D du CERIST" />
              <div className="title">Depot documentaire pour la division R&D du CERIST</div>
              <div className="links">
                <Link to="/portfolio" className="button1">
                  Screenshots
                </Link>
              </div>
              <div className="links">

              <Link to="/portfolio" className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={maquette} alt="Detection de polypes" />
              <div className="title">Detection de polypes</div>
              <div className="links">
              
              </div>
              <div className="links">

              <Link to="/" target="_blank"className="button2">
                  Github Project
                </Link>
                </div>

            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={maquette} alt="Detection de polypes" />
              <div className="title">Detection de polypes</div>
              <div className="links">
              
              </div>
              <div className="links">

              <Link to="/" target="_blank"className="button2">
                  Github Project
                </Link>
                </div>

            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  );
};

export default Portfolio;
