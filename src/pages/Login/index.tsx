import { Button, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "../../components/Form/input";

export const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <Flex
      padding="10px 15px"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
      color="white"
    >
      <Flex
        width="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid width="100%" paddingRight="100px">
          <Heading as="h1">O jeito fácil</Heading>
          <Text>
            De achar eventos
            <b>Seus eventos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          marginTop="4"
          width="100%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          background="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack marginTop="6" spacing="5">
            <Input name="email" icon={FaEnvelope} />
            <Input icon={FaLock} {...register("password")} />
            <Button type="submit">Enviar</Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
