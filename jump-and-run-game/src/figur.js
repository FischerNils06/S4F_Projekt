import React, { useContext } from 'react';
import './index.css';
import { Context } from './maps/state';





const Figur = () => {
 
  const [state, setState] = useContext(Context);

  return (
      <div id="Spielfigur" style={{left: `${state.Spielfigur.x}px`, bottom: `${state.Spielfigur.y}px`}}></div>
  );
};


export { Figur };