import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Box, Flex, Grid, Input as ChakraInput, Text } from "@chakra-ui/react";
import { useProduct } from "../../contexts/ProductsProvider";
import { ProductCard } from "../../components/Product-card";
import { SearchBar } from "../../components/SearchBar";

export const Shop = () => {
  const { products, filterproducts, refresh } = useProduct();

  useEffect(() => {
    if (products.length === 0) {
      refresh();
    }
  }, []);

  return (
    <>
      <Header />
      <SearchBar />
      {products.length ? (
        <Flex justifyContent="space-evenly" flexWrap="wrap" boxSizing="border-box" padding="0 30px" gap="10px">
          {products.length ? (
            products.map((product, index) => (
              <ProductCard key={index} item={product} />
            ))
          ) : (
            <Text>Nada Encontrado</Text>
          )}
        </Flex>
      ) : (
        <Text>Carregando...</Text>
      )}
    </>
  );
};
