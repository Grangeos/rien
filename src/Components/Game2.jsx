import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
import hisoka from '../scss/Picture/hisoka.gif';

class Game2 extends Component {
  state = {
    buttonX: 10,
    buttonY: 20,
    buttonVanishCount: 0,
  }
  leftTopStyle = (x, y, unit = 'px') => ({ position: (x === 0 && y === 0) ? 'static' : 'absolute', left: `${x}${unit}`, top: `${y}${unit}` });

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomizeButtonPos() {
    const border = 5;
    const randX = this.getRandomInt(border, 100 - border * 2);
    const randY = this.getRandomInt(border, 100 - border * 2);
    const {  buttonVanishCount } = this.state;

    this.setState({
      buttonX: randX,
      buttonY: randY,
      buttonVanishCount: buttonVanishCount + 1,
    });
  }
  render() {
    const { buttonX, buttonY, buttonVanishCount } = this.state;

    let button = (
      <button
        onClick={() => this.randomizeButtonPos()}
        style={this.leftTopStyle(buttonX, buttonY, '%')}
        data-hover="oui">non</button>
    )
      return (

        <section className="g2">
        <div className="wrapperHisoka">
          <img className="hisoka" src={hisoka} />
          <div class="bubble_celeste_sentado_left">
            <p>Mmmmm... Bien joué, tu as déjoué mon programme de protection contre les intrus!! Mais je te préviens, à partir de maintenant ça va être vraiment très compliqué... Veux tu vraiment <Link to="/3oiegjopekhvoznovuhzofhuozihffoiz">continuer</Link> ?</p>
          </div>

        </div>
        <div className="wrapperButton">
          <Link to="/"><button data-hover="non">oui</button></Link>
          { button }
        </div>

        </section>
      );
  }
}

export default Game2;
