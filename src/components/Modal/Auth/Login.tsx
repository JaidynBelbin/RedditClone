import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, userError] =
    useSignInWithEmailAndPassword(auth);
  const setAuthModalState = useSetRecoilState(authModalState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the form from automatically being dismissed.
    event.preventDefault();

    // Reset the error.
    if (error || userError) {
      setError("");
    }

    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update form state. event.target.name will be either 'email' or 'password'
    // depending on the field the user is typing into.
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        autoFocus
        required
        name="email"
        placeholder="email"
        type={"email"}
        mb={2}
        onChange={onChange}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      ></Input>
      <Input
        required
        name="password"
        placeholder="password"
        type={"password"}
        mb={2}
        onChange={onChange}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      ></Input>
      <Text color="red" fontSize="10pt" textAlign="left">
        {error ||
          FIREBASE_ERRORS[userError?.code as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button
        width={"100%"}
        height={"36px"}
        mt={2}
        mb={2}
        type="submit"
        isLoading={loading}
      >
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
