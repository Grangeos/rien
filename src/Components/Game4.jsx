import React, { Component } from 'react';
import { Link } from "react-router-dom";
import goku from "../scss/Picture/g4/goku.png";

class Game4 extends Component {
  render() {
    return (
    <section className="g4">
      <h1>Merci d'avoir <Link to="/">joué</Link>...</h1>
      <img className="goku" src={goku} />
      <div class=" ray">
    <div class="yellow"></div>
    <div class="shadow"></div>
</div>
<div class="kinto centered">
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
  </ul>
</div>
<div class="cloud cloud1">
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
  </ul>
</div>
<div class="cloud cloud2">
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
  </ul>
</div>

<div class="cloud cloud3">
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
  </ul>
</div>

<div class="line line1"></div>
<div class="line line2"></div>
<div class="line line3"></div>
<div class="line line4"></div>
<div class="line line5"></div>
    </section>

    );
  }
}

export default Game4;
