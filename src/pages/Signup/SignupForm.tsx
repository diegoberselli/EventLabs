import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
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
    as="form"
    onSubmit={handleSignIn}
    marginTop="4"
    width={["100%", "70%", "55%", "55%"]}
    padding="30px 15px"
    border="3px solid"
    borderColor="gray.100"
    background="white"
    color="gray.900"
  >
    <Heading size="lg">Bem vindo de volta!</Heading>
    <VStack marginTop="6" spacing="5">
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
        label="Confirmação de senha"
        error={errors.confirm_password}
        {...register("password")}
        placeholder="Confirme sua senha"
      />
    </VStack>
    <VStack marginTop="4" spacing="5">
      <Button
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
        Entrar
      </Button>
      <Text color="gray.400">Ainda não possui uma conta? </Text>
      <Button
        width="100%"
        background="gray.300"
        color="white"
        border-radius="7px"
        _hover={{
          background: "gray.200",
        }}
      >
        Cadastrar
      </Button>
    </VStack>
  </Grid>
);
