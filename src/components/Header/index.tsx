import { Box, Button, Center, Flex, Grid, Text, theme } from "@chakra-ui/react";
import { FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
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
          <Text fontSize={["xs", "2xl"]}>LabsEvents</Text>
        </Flex>
        <Center
          as="button"
          marginRight={["0px", "40px"]}
          padding="5px"
          height={["10px", "40px"]}
          borderRadius="5px"
          _hover={{ background: "purple.400" }}
          onClick={() => history.push("/")}
        >
          <FaHome />
        </Center>

        <Center
          as="button"
          height={["5px", "40px"]}
          borderRadius="5px"
          padding="5px"
          _hover={{ background: "purple.400" }}
          //   onClick={() => history.push("/login")}
        >
          <FaShoppingCart />
        </Center>

        <Center
          onClick={() => history.push("/login")}
          as="button"
          padding="5px"
          height={["5px", "40px"]}
          marginLeft={["0px", "50px"]}
          borderRadius="5px"
          _hover={{ background: "purple.400" }}
        >
          <FaUserAlt />
        </Center>
      </Flex>
    </Box>
  );
};
