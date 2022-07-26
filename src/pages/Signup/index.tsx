import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SignupInfo } from "./SignupInfo";
import { SignupForm } from "./SignupForm";
import { GoBackButton } from "../../components/Buttons/GoBackButton";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SignUpData {
  name: string;
  email: string;
  password: string;
  
}

export const Signup = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignup = ({ name, email, password }: SignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      padding={["10px 15px", "10 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 50%, white 50%)",
        "linear(to-b, purple.800 50%, white 50%)",
        "linear(to-l, purple.800 50%, white 50%)",
        "linear(to-l, purple.800 50%, white 50%)",
      ]}
      color="white"
    >
      <Flex
        width={["100%", "90%", "80%", "70%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        {isWideVersion ? (
          <>
            <GoBackButton
              top="7"
              left="15"
              onClick={() => history.push("/")}
              height={["40px", "60px"]}
            />
            <SignupInfo />
            <SignupForm
              errors={errors}
              handleSignIn={handleSubmit(handleSignup as any)}
              loading={loading}
              register={register}
            />{" "}
          </>
        ) : (
          <>
            <GoBackButton
              top="10"
              left="75vw"
              onClick={() => history.push("/")}
              height={["40px", "40px", "60px"]}
            />
            <SignupInfo />
            <SignupForm
              errors={errors}
              handleSignIn={handleSubmit(handleSignup as any)}
              loading={loading}
              register={register}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};
