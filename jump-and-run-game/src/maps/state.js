import React, { useState } from 'react';

const initialState = {
  Spielfigur: {
    x: 300, y: 50
  },
}

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
return (
  <Context.Provider value={[state, setState]}>{children}</Context.Provider>
);
}

export { Provider };