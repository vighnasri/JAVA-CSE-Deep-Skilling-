// src/IndianPlayers.js
import React from 'react';

function IndianPlayers() {
  const oddPlayers = ["Rohit", "Rahul", "Jadeja", "Bumrah", "Gill", "Iyer"];
  const evenPlayers = ["Virat", "Pant", "Shami", "Ashwin", "Surya"];

  const T20players = ["Kohli", "Rohit"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h3>Merged Players (T20 + Ranji)</h3>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;
