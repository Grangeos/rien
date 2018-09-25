import React, { Component, Fragment } from 'react';
import cx from 'classnames';

class Home extends Component {
  state = {
    spotlightX: 0,
    spotlightY: 0,
    spotlightEnabled: false,
    buttonX: 10,
    buttonY: 20,
    buttonVanishCount: 0,
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('touchmove', this.handleMouseMove);
  }

  handleMouseMove = e => {
    this.setState({
      spotlightX: e.clientX,
      spotlightY: e.clientY,
    });
  }

  toggleSpotlight() {
    this.setState(({ spotlightEnabled }) => ({ spotlightEnabled: !spotlightEnabled }));
  }

  leftTopStyle = (x, y, unit = 'px') => ({ left: `${x}${unit}`, top: `${y}${unit}` });

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomizeButtonPos() {
    const border = 5;
    const randX = this.getRandomInt(border, 100 - border * 2);
    const randY = this.getRandomInt(border, 100 - border * 2);
    const {  buttonVanishCount } = this.state;

    if (buttonVanishCount === 2) {
      alert('nouveux jeux...');
      
    }

    this.setState({
      buttonX: randX,
      buttonY: randY,
      buttonVanishCount: buttonVanishCount + 1,
    });
  }

  render() {
    const { spotlightX, spotlightY, spotlightEnabled, buttonX, buttonY } = this.state;

    return (
      <Fragment>
        {
          spotlightEnabled && (
            <div className="cursor-box" style={this.leftTopStyle(spotlightX, spotlightY)}>
              <div className="cursor-box-child"></div>
            </div>
          )
        }

        <section className="home">
          <h1>Rien<span onClick={() => this.toggleSpotlight()}></span></h1>
          <button
            onClick={() => this.randomizeButtonPos()}
            className={cx('rButton', { 'isVisible': spotlightEnabled })}
            style={this.leftTopStyle(buttonX, buttonY, '%')}>Rien.</button>
        </section>
      </Fragment>
    );
  }
}

export default Home;
