import React, { Component, Fragment } from 'react';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <section className="home">
         {/* Elements cacheés (lampe torche) */}
        </section>
        <svg id="flashlight">
          <defs>
            <mask id="mask1" x="0" y="0" width="100" height="100" >
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle cx="50%" cy="50%" r="30" fill="black" />
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="black" style={{ mask: "url(#mask1)"}} />
        </svg>
        <section className="layer3">
          <h1>Rien</h1>
        </section>
      </Fragment>
    );
  }
}

export default Home;
