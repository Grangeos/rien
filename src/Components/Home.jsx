import React, { Component, Fragment } from 'react';
import cx from 'classnames';

class Home extends Component {
  state = {
    spotlightX: 0,
    spotlightY: 0,
    spotlightEnabled: false,
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

  render() {
    const { spotlightX, spotlightY, spotlightEnabled } = this.state;

    return (
      <Fragment>
        {
          spotlightEnabled && (
            <div className="cursor-box" style={{ left: `${spotlightX}px`, top: `${spotlightY}px` }}>
              <div className="cursor-box-child"></div>
            </div>
          )
        }

        <section className="home">
          <h1>Rien<span onClick={() => this.setState({ spotlightEnabled: true })}></span></h1>
          <button className={cx('rButton', { 'isVisible': spotlightEnabled })}>Rien.</button>
        </section>
      </Fragment>
    );
  }
}

export default Home;
