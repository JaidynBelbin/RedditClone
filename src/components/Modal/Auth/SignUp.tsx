import { authModalState } from "@/src/atoms/authModalAtom";
import { useColorModeValue, Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState, useRef, createRef } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [currentlySelectedInput, setCurrentlySelectedInput] = useState(0);
  const [error, setError] = useState("");
  const setAuthModalState = useSetRecoilState(authModalState);
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the form from automatically being dismissed.
    event.preventDefault();

    // Reset the error.
    if (error || userError) {
      setError("");
    }

    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update form state. event.target.name will be either 'email' or 'password'
    // depending on the field the user is typing into.
    setSignUpForm((prev) => ({
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
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
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
        Sign Up
      </Button>
      <Flex fontSize={"9pt"} justifyContent={"center"}>
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color={"blue.500"}
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
