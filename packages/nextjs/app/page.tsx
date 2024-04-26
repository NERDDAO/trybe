"use client";
import { useState } from 'react';
import { FrameContext, FrameUI, fallbackFrameContext } from "@frames.js/render";
import { FarcasterSigner, signFrameAction } from "@frames.js/render/farcaster";
import { FrameImageNext } from "@frames.js/render/next";
import { useFrame } from "@frames.js/render/use-frame";
import { FrameButton } from "frames.js";
import { fetchMetadata } from "frames.js/next";
import type { NextPage } from "next";

// export async function generateMetadata() {
//   return {
//     title: "My Page",
//     // provide a full URL to your /frames endpoint
//     other: await fetchMetadata(
//       new URL("/frames", process.env.VERCEL_URL ? `https://{process.env.VERCEL_URL}` : "http://localhost:3000"),
//     ),
//   };
// }

interface Character {
  name: string;
  health: number;
  attacks: Attack[];
}

interface Attack {
  name: string;
  power: number;
}

const Home: NextPage = () => {
  const [player, setPlayer] = useState<Character>({
    name: 'Player Blob',
    health: 100,
    attacks: [
      { name: 'Slap', power: 10 },
      { name: 'Tackle', power: 15 },
    ],
  });

  const [opponent, setOpponent] = useState<Character>({
    name: 'Wild Blob',
    health: 100,
    attacks: [
      { name: 'Bite', power: 10 },
      { name: 'Scratch', power: 12 },
    ],
  });

  const playerBlobAscii = `
    ,,,,, 
    |o o| 
    | ' | 
    | - | 
    '---' 
  `;

  const wildBlobAscii = `
    .---.
    |o o|
    | - |
    |' '|
    '---'
  `;

  const handlePlayerAttack = (attack: Attack) => {
    setOpponent(prev => ({ ...prev, health: prev.health - attack.power }));
    const opponentAttack = opponent.attacks[Math.floor(Math.random() * opponent.attacks.length)];
    setPlayer(prev => ({ ...prev, health: prev.health - opponentAttack.power }));
  };

  return (
    <div style={{ fontFamily: 'monospace', textAlign: 'center' }}>
      <h1>Blob Battle</h1>
      <div>
        <pre>{playerBlobAscii}</pre>
        <h2>{player.name}</h2>
        <p>Health: {player.health}</p>
        <div>
          {player.attacks.map((attack, index) => (
            <button key={index} onClick={() => handlePlayerAttack(attack)} style={{ margin: '5px' }}>
              {attack.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <pre>{wildBlobAscii}</pre>
        <h2>{opponent.name}</h2>
        <p>Health: {opponent.health}</p>
      </div>
    </div>
  );
};
export default Home;
