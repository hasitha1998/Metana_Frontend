
import Test from "./test";

import { WelcomeProvider } from "../../context/WelcomeScreenContext";

const index = () => {
  return (
    <>
      <WelcomeProvider>
        <Test />
      </WelcomeProvider>
    </>
  );
};

export default index;
