import { enterFullscreen } from "../fullscreen";
import { GameLoop } from "./gameloop";
import { useEffect, useContext } from "react";
import { Context } from "./state";

const Startgame = (e) => {
    const [state, setState] = useContext(Context);
 
    let gameloop = false;

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            enterFullscreen();
            gameloop = true;

            GameLoop(gameloop);
            
          }

          if ( gameloop && e.key === 'w') {}
       
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, );
        
   
};

export { Startgame };