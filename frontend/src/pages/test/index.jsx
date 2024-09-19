
import Test from "./test";

import { WellcomeProvider } from "../../context/WelcomeScreenContext";

const index = () => {
  return (
    <>
      <WellcomeProvider>
        <Test />
      </WellcomeProvider>
    </>
  );
};

export default index;
