import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariationErrors: inputVariationOptions = {
  error: "red.500",
  default: "gray.900",
  focus: "purple.800",
  filled: "green.500",
};

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, icon: Icon, error = null, ...rest }, ref) => {
  const [variationError, setVariationError] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariationError("error");
    }
  }, [error]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="gray.400">{label}</FormLabel>}
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement marginTop="2.5">
            <Icon color={inputVariationErrors[variationError]} />
          </InputLeftElement>
        )}
        <ChakraInput
          name={name}
          color={inputVariationErrors[variationError]}
          borderColor={inputVariationErrors[variationError]}
          background="gray.50"
          _hover={{ backgroundColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          height="60px"
          ref={ref}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
