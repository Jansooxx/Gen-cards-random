/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const palos_html = document.getElementById("palos");
  const paletes = document.getElementById("palos_inferiores");
  const valor_html = document.getElementById("rank");

  const palos_color = ["♥", "♦", "♣", "♠"];

  const valores = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jota",
    "Reina",
    "Rey"
  ];

  const palos_aleaotrios =
    palos_color[Math.floor(Math.random() * palos_color.length)];

  const valores_aleatorios =
    valores[Math.floor(Math.random() * valores.length)];

  palos_html.innerHTML = `${palos_aleaotrios}`;

  paletes.innerHTML = `${palos_aleaotrios}`;

  valor_html.innerHTML = `${valores_aleatorios}`;
};
