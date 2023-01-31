import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import React from "react";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex flexDirection={"column"} width={"100%"} mb={4}>
      <Button
        variant={"oauth"}
        mb={3}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/images/googlelogo.png"
          height={"20px"}
          mr={4}
          alt={""}
        ></Image>
        Continue with Google
      </Button>
      <Button variant={"oauth"}>Some other provider</Button>
      {error && (
        <Text color="red" fontSize="10pt" textAlign="left">
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
