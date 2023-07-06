import { Startgame } from './startgame';
import { Figur } from '../figur';
import { Block1, Ground } from '../blocks';
import { useState } from 'react';



const MapOne = () => { 
  
Startgame();





let block1 = [];
for (let i = 0; i < 10; i++) {
  let b1 = <Block1 key={i} />;
  block1.push(<Block1 key={i} />);
}



return (
  <div id="bild">
    <Ground />
    {block1}
    <Figur />
  </div>

);
};



export { MapOne };
