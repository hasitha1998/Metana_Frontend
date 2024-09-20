import { createContext, useState , } from "react";

const WelcomeContext = createContext();

// eslint-disable-next-line react/prop-types
export function WelcomeProvider({ children }) {

  const [title, setTitle] = useState("Welcome to our form 2");

  return (
    <WelcomeContext.Provider
      value={{
        title,
        setTitle
    
      }}
    >
      {children}
    </WelcomeContext.Provider>
  );
}

export default WelcomeContext;
