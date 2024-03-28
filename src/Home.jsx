import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="container">
      <div class="titles">
        <h1>POKEY DOKEY</h1>
      </div>
      <div class="web">
        <div class="button">
          <Link to={"/http"}>
            Pokemon GET Request Model</Link></div>
        <div class="button"><p>Pokemon WebSocket Model</p></div>
        <div class="button">
          <p><a href="https://www.pokemon.com/us">Pokemon Website</a></p>
        </div>
      </div>
      <div class="footer">
        <h2 class = "foot">GDSC</h2>
        <h2 class = "foot">-ByteJam-</h2>
        <h2 class = "foot">DCS</h2>
      </div>
    </div>
  );
}

export default Home;
