import React from "react";
import { View, Text } from "react-native";
import { Box, Flex, Icon } from "native-base";
import { InputSign } from "../../general/Input";
import { ButtonSign } from "../../general/ButtonSign";

export const LoginScreen = () => {
  return (
    <View>
      <Flex justifyContent="center" mt={35}>
        <Box
          mx="auto"
          justifyContent="center"
          w="80%"
          h="20px"
          bg="green.500"
          borderRadius="2xl"
          border="1px solid green"
        ></Box>
        <Flex mx="auto" mt={5}>
          <InputSign placeHolder="9999999" iconLeft="person" type="password" />
          <ButtonSign colors="green" text="Бүртгүүлэх" />
        </Flex>
      </Flex>
    </View>
  );
};
