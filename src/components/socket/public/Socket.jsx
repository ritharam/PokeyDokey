import React from "react";
import "./style.css";

function Socket() {
  return (
    <div class="body">
      <h1 class="title">Pokemon Chat</h1>
      <div class="main">
        <div class="name">
          <span>
            <i class="far fa-user"></i>
          </span>
          <input
            type="text"
            id="name-input"
            class="name-input"
            maxlength="20"
          />
        </div>

        <ul class="message-container" id="message-container"></ul>

        <form class="message-form" id="message-form">
          <input
            type="text"
            name="message"
            id="message-input"
            class="message-input"
          />
          <div class="v-divider"></div>
          <button type="submit" class="send-button">
            <span>
              <i class="fas fa-paper-plane"></i>
            </span>
          </button>
        </form>
      </div>
      <h3 class="clients-total" id="client-total">
        Total Pokemons: 2
      </h3>

      <script src="/socket.io/socket.io.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.28.0/moment.min.js"
        integrity="sha512-Q1f3TS3vSt1jQ8AwP2OuenztnLU6LwxgyyYOG1jgMW/cbEMHps/3wjvnl1P3WTrF3chJUWEoxDUEjMxDV8pujg=="
        crossorigin="anonymous"
      ></script>
      <script src="main.js"></script>
    </div>
  );
}

export default Socket;
