import React, { createContext, useState } from 'react';
import from { BrowserRouter, route } from 'react-router-dom';




export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');

  const contextMethod = () => {
    setContextMessage('Hello from client/src/context/AppContext.jsx');
  };

  return (
    <AppContext.Provider
      value={{
        contextMessage,
        contextMethod
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
