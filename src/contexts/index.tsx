import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "../contexts/Auth/AuthContext";
import { ProductProvider } from "./ProductsProvider";
import { CartProvider } from "./CartProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <CartProvider>
    <AuthProvider>
      <ProductProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </ProductProvider>
    </AuthProvider>
  </CartProvider>
);
