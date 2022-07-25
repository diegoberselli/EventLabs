import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { useState, useEffect, useCallback, useRef } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps {
  name: string;
  error?: FieldError | null;
  icon?: IconType;
}

export const Input = ({ name, error = null, icon: Icon }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>Label</FormLabel>

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement marginTop="2.5">
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput name={name} placeholder="Email" />

        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};
