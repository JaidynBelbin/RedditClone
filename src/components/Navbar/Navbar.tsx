import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import AuthModal from "../Modal/Auth/AuthModal";
import RightContent from "./RightContent/RightContent";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align={"center"}>
        <Image
          src="/images/redditFace.svg"
          height={"30px"}
          alt="Reddit face icon"
          mr={{ base: 2, md: 0 }}
        />
        <Image
          src="/images/redditText.svg"
          height={"46px"}
          display={{ base: "none", md: "unset" }}
          alt="Reddit logo text"
        />
      </Flex>
      <SearchBar />
      <AuthModal />
      {!loading && <RightContent user={user} />}
    </Flex>
  );
};
export default Navbar;
