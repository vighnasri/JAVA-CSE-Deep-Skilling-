// src/ListofPlayers.js
import React from 'react';

function Listofplayers() {
  const players = [
    { name: "Rohit", score: 80 },
    { name: "Virat", score: 90 },
    { name: "Rahul", score: 60 },
    { name: "Pant", score: 50 },
    { name: "Jadeja", score: 85 },
    { name: "Shami", score: 40 },
    { name: "Bumrah", score: 95 },
    { name: "Ashwin", score: 75 },
    { name: "Gill", score: 65 },
    { name: "Surya", score: 55 },
    { name: "Iyer", score: 70 },
  ];

  const filteredPlayers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listofplayers;
