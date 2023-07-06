import React from 'react';

const options = [50, 100, 150, 200, 250];

const getRandomHeight = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

let randomleft = 900;



const Ground = () => {
  const randomWidth = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

  return (
    <div id="ground" className="block" style={{ width: randomWidth }}></div>
  );
};

const Block1 = () => {
  const randomHeight = getRandomHeight();
  randomleft += Math.floor(Math.random() * (250 - 50 + 1)) + 50;
  return (
    <div id="block1" className="block" style={{ height: randomHeight, left: `${randomleft}px` }}></div>
  );
};

export { Ground, Block1 };