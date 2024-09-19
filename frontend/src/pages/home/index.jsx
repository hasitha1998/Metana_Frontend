import Home from "./Home";

import { WellcomeProvider } from "../../context/WelcomeScreenContext";

const index = () => {
  return (
    <>
      <WellcomeProvider>
        <Home />
      </WellcomeProvider>
    </>
  );
};

export default index;