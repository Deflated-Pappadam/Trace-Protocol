import React from "react";
function random(min: number, max: number, seed: number) {
  return Math.floor(min + (max - min) * seed);
}

const colors = [
  "#ffc857",
  "#e9724c",
  "#c5283d",
  "#481d24",
  "#255f85",
  "#edffec",
  "#61e786",
  "#5a5766",
  "#48435c",
  "#9792e3",
] as const;

function randomColor(seed: number) {
  return colors[random(0, colors.length, seed)];
}

function Avatars() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <rect width="100%" height="100%" fill={randomColor(Math.random())} />
      <circle
        cx={random(20, 40, Math.random())}
        cy={random(20, 40, Math.random() / 2)}
        r={random(1, 9, Math.random())}
        fill="black"
      />
      <circle
        cx={random(60, 80, Math.random())}
        cy={random(20, 40, Math.random())}
        r={random(1, 9, Math.random())}
        fill="black"
      />
      <path
        d={`M ${random(20, 40, Math.random())} ${random(40, 60, Math.random())} Q ${random(
          30,
          50,
          Math.random(),
        )} ${random(50, 70, Math.random())} ${random(60, 80, Math.random())} ${random(40, 60, Math.random())}`}
        stroke="black"
        stroke-width={random(1, 9, Math.random())}
        fill="none"
      />
    </svg>
  );
}

export default Avatars;
