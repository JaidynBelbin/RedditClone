import { Button, Flex } from "@chakra-ui/react";
import { signOut, User } from "@firebase/auth";
import { auth } from "../../../firebase/clientApp";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user: User | null | undefined;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <Flex justify={"center"} align={"center"}>
        {user ? (
          <Button
            variant={"outline"}
            height={"28px"}
            display={{ base: "none", sm: "flex" }}
            width={{ base: "70px", md: "110px" }}
            mr={2}
            onClick={() => signOut(auth)}
            fontSize={{ base: "10pt", md: "12pt" }}
          >
            Log Out
          </Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RightContent;
