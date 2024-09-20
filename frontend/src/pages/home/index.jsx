import Home from "./Home";

import { WelcomeProvider } from "../../context/WelcomeScreenContext";

const index = () => {
  return (
    <>
      <WelcomeProvider>
        <Home />
      </WelcomeProvider>
    </>
  );
};

export default index;