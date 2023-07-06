


const hitbox = (bottomPositions) => {
  let bp = blockPositions();
  const figur = document.querySelector('#Spielfigur');
  let leftPositions = figur.offsetLeft;
  let rightPositions = leftPositions + figur.offsetWidth;
  let screenheight = window.screen.height;
  if (bp.some((position) => screenheight-position.top === bottomPositions && position.left <= rightPositions && position.right >= leftPositions)) {
    return true;
  } else {
    return false; 
  }
};


function blockPositions() {
  let blockPositions = [];
  const blocks = document.querySelectorAll('.block');
blocks.forEach((block) => {
  let topPosition = block.offsetTop;
  let bottomPosition = topPosition + block.offsetHeight;
  let leftPosition = block.offsetLeft;
  let rightPosition = leftPosition + block.offsetWidth;
  const positionObj = {
    top: topPosition,
    bottom: bottomPosition,
    left: leftPosition,
    right: rightPosition,
  };

  blockPositions.push(positionObj);


});
return (
  blockPositions
)
}






const jump = (setBottomPosition, bottomPositions) => {
  // Figur hochsetzen
  // warten (z.B. 10 ms)
  // Figur runtersetzen (entscheiden wie tier runter)
  if (hitbox(bottomPositions)) {
    setBottomPosition((prevBottomPosition) => prevBottomPosition + 150);
    console.log(setBottomPosition+"hitbox");
  }  
  setTimeout(() => {
    fall(setBottomPosition, bottomPositions);
  }, 500);
  
};

const fall = (setBottomPosition, bottomPositions) => {
  for (; !hitbox(); ) {
    setBottomPosition((prevBottomPosition) => prevBottomPosition - 1);
    console.log('fall');
    console.log(setBottomPosition);
    if (hitbox()) {
      break;
    }
  }  
};



const startgame = () => {
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
};


 useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ') {
        jump(setBottomPosition, bottomPositions);
      }
      if (e.key === 'Enter') {
        enterFullScreen();
        startgame();
      }
    
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, );



  const [bottomPositions, setBottomPosition] = useState(50);
  <div id="Spielfigur" style={{ bottom: `${bottomPositions}px` }}></div>
