import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const setAuthModalState = useSetRecoilState(authModalState);

  const onSubmit = () => {};

  const bg = useColorModeValue("white", "#2D3748");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update form state. event.target.name will be either 'email' or 'password'
    // depending on the field the user is typing into.
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form>
      <Input
        name="email"
        placeholder="email"
        type={"email"}
        mb={2}
        onChange={onChange}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: bg, border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: bg,
          border: "1px solid",
          borderColor: "blue.500",
        }}
      ></Input>
      <Input
        name="password"
        placeholder="password"
        type={"password"}
        mb={2}
        onChange={onChange}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: bg, border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: bg,
          border: "1px solid",
          borderColor: "blue.500",
        }}
      ></Input>
      <Button width={"100%"} height={"36px"} mt={2} mb={2} type="submit">
        Log In
      </Button>
      <Flex fontSize={"9pt"} justifyContent={"center"}>
        <Text mr={1}>New here?</Text>
        <Text
          color={"blue.500"}
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
