import React, { useEffect, useState } from 'react';
import { Figur } from '../figur';

const GameLoop = (gameloop) => {
    const blocks = document.querySelectorAll('.block');
    
    blocks.forEach((block) => {
     
      let currentPosition = parseFloat(block.offsetLeft);
      
  
      const animateBlock = () => {
        currentPosition -= 1; 
        block.style.left = `${currentPosition}px`;
       
  
        if (currentPosition > -block.offsetWidth) {
          requestAnimationFrame(animateBlock);
        }
      };
  
      animateBlock();
    });



} 

export { GameLoop };