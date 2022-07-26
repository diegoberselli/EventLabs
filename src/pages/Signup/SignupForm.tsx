import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "../../components/Form/input";

interface SignupData {
  handleSignIn: () => any;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignupForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: SignupData) => (
  <Grid
    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    as="form"
    onSubmit={handleSignIn}
    marginTop={["4", "4", "0"]}
    width={["100%", "100%", "50%", "50%"]}
    padding="20px 15px"
    border="3px solid"
    borderColor="gray.100"
    background="white"
    color="gray.900"
  >
    <Heading size="lg">Crie sua conta</Heading>
    <VStack marginTop="5" spacing="4">
      <Input
        icon={FaEnvelope}
        label="Nome"
        type="name"
        error={errors.name}
        placeholder="Digite seu nome"
        {...register("name")}
      />
      <Input
        icon={FaEnvelope}
        label="Login"
        type="email"
        error={errors.email}
        placeholder="Digite seu login"
        {...register("email")}
      />
      <Input
        icon={FaLock}
        type="password"
        label="Senha"
        error={errors.password}
        {...register("password")}
        placeholder="Digite sua senha"
      />
      <Input
        icon={FaLock}
        type="password"
        border="none"
        label="Confirmação de senha"
        error={errors.confirm_password}
        {...register("confirm_password")}
        placeholder="Confirme sua senha"
      />
    </VStack>

    <Button
      marginTop="20px"
      width="100%"
      isLoading={loading}
      background="purple.800"
      color="white"
      border-radius="7px"
      _hover={{
        background: "purple.900",
      }}
      type="submit"
    >
      Finalizar Cadastro
    </Button>
  </Grid>
);
