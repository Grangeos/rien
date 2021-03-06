import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Draggable, Droppable } from 'react-drag-and-drop'
import hp from '../scss/Picture/g3/hp.png';
import boat from '../scss/Picture/g3/boat.png';
import goat from '../scss/Picture/g3/goat.png';
import esteban from '../scss/Picture/g3/este.jpg';
import music from '../sounds/music.mp3';
import hiboux from '../sounds/hiboux.wav'

class Game3 extends Component {
  // number of drops created.
  state = {
    nbDrop : 35
  }
  componentDidMount(){
      this.esteboux = new Audio();
      this.esteboux.src = hiboux;
      this.audio = new Audio(music);
      this.playSound();
  }
  // function to generate a random number range.
  randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }




  playSound = () => {
      this.audio.currentTime = 13;
      this.audio.play();
  }

  stopSound = () => {
    this.audio.pause();
  }

  componentWillUnmount(){
    this.stopSound();
  }
  render() {
    console.log(this);
    return (
      <section className="g3">
      <div class="bubble_celeste_sentado_left">
        <p>HOMME À LA M.... CHÈVRE À   LA MER!!! Il faut que je la sauve !!! <br />(work in progress...)</p>
      </div>
      <Link to="/4jshdbkjbkjbzkjbzkjebkzjebfkzeh"><button className="boooon">Ok, ta de la chance, on bosse sur cette enigme mais c'est chaud... Bon tiens, passe à la page suivante</button></Link>
        <img className="hiso"src={hp}/>
        <img className="boat" src={boat}/>
        <img className="goat" src={goat}/>
        <img className="esteban" onClick={() => this.esteboux.play()} src={esteban}/>
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
        <div class="thunder">
          <canvas id="canvas1"></canvas>
          <canvas id="canvas2"></canvas>
          <canvas id="canvas3"></canvas>
        </div>
        <div class="rain">
          {
            (new Array(this.state.nbDrop).fill(null).map((_, i) => {
            	var dropLeft = this.randRange(0,1600);
            	var dropTop = this.randRange(-1000,1400);

              return (
                <div class="drop" id={`drop${i}`} style={{ left: dropLeft, top: dropTop }}></div>
              )
            }))
          }
        </div>
      </section>
    );
  }
}

export default Game3;
