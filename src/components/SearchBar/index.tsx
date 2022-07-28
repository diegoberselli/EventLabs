import { Box, Flex, Input} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useProduct } from "../../contexts/ProductsProvider";


export const SearchBar = ()=> {
  const { addFilterProduct, products } = useProduct();
  return (
    <Flex justify="center" padding="100px">
      <Box>
        <Input
          width={["0,80", "sm", "xl", "3xl"]}
          placeholder="O que você procura? ..."
          background="gray.50"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const text = event.target.value.toLocaleLowerCase();
            const filterArray = products.filter((product) =>
              product.name.toLocaleLowerCase().includes(text)
            );
            addFilterProduct(filterArray);
          }}
        ></Input>
      </Box>
    </Flex>
  );
};
