import React from "react";
import { Button } from "native-base";
export const ButtonSign = ({ colors, text }) => {
  return (
    <Button
      borderRadius="2xl"
      colorScheme={colors}
      border="1px solid green"
      size="md"
    >
      {text}
    </Button>
  );
};
