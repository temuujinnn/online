import React, { useState } from "react";
import Home from "./src/components/Home";
import Onboard from "./src/components/Onboard";
import { LoginScreen } from "./src/screen/loginScreen";
import { NativeBaseProvider } from "native-base";

const App = () => {
  const [board, setBoard] = useState(true);

  const boardHandler = () => {
    setBoard(!board);
  };

  return (
    <>
      <NativeBaseProvider>
        {board && <Onboard doneHandler={boardHandler} />}
        {!board && <LoginScreen />}
      </NativeBaseProvider>
    </>
  );
};

export default App;
