import {
  Box,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        fontSize="2xl"
        alignItems="center"
        padding="10px 40px"
        color="purple.900"
        boxShadow="2px 10px 24px -13px rgba(0, 0, 0, 0.75);"
      >
        <Flex flex={{ base: 1 }}>
          <Text fontSize={["xs", "2xl"]}>
            <b>Labs</b>Events
          </Text>
        </Flex>
        <Center
          as="button"
          marginRight={["0px", "40px"]}
          padding="10px"
          height={["10px", "40px"]}
          borderRadius="5px"
          _hover={{ background: "gray.100" }}
          onClick={() => navigate("/")}
        >
          <FaHome />
        </Center>

        <Center
          as="button"
          height={["5px", "40px"]}
          borderRadius="5px"
          padding="10px"
          _hover={{ background: "gray.100" }}
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart />
        </Center>

        <Center
          onClick={() => navigate("/login")}
          as="button"
          padding="10px"
          height={["5px", "40px"]}
          marginLeft={["0px", "40px"]}
          borderRadius="5px"
          _hover={{ background: "gray.100" }}
        >
          <Text>Entrar</Text>
        </Center>
      </Flex>
    </Box>
  );
};
