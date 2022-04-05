import React from "react";
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export const InputSign = ({ placeHolder, iconLeft, type }) => {
  return (
    <Input
      pl={5}
      type={type}
      borderRadius="3xl"
      w={{
        base: "75%",
      }}
      InputLeftElement={
        <Icon
          _focus={{ border: "1px solid red" }}
          as={
            <MaterialIcons
              _icon={{
                color: "orange.500",
              }}
              name={iconLeft}
              color="#B83227"
            />
          }
          size={7}
          ml="2"
          color="muted.400"
        />
      }
      placeholder={placeHolder}
    />
  );
};
