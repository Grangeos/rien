import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'
import hp from '../scss/Picture/g3/hp.png';
import boat from '../scss/Picture/g3/boat.png';
import goat from '../scss/Picture/g3/goat.png';
import music from '../sounds/music.mp3'

class Game3 extends Component {
  // number of drops created.
  state = {
    nbDrop : 50
  }

  // function to generate a random number range.
  randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }


  componentDidMount(){
    this.audio = new Audio(music);
    this.playSound();
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
    return (
      <section className="g3">
      <div class="bubble_celeste_sentado_left">
        <p>HOMME A LA M.... CHÈVRE À   LA MER!!! Il faut que je la sauve !!!</p>
      </div>
        <img className="hiso"src={hp}/>
        <img className="boat" src={boat}/>
        <img className="goat" src={goat}/>
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
