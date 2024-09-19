import { createContext, useState , } from "react";

const WellcomeContext = createContext();

// eslint-disable-next-line react/prop-types
export function WellcomeProvider({ children }) {

  const [title, setTitle] = useState("Welcome to our form 2");

  return (
    <WellcomeContext.Provider
      value={{
        title,
        setTitle
    
      }}
    >
      {children}
    </WellcomeContext.Provider>
  );
}

export default WellcomeContext;
