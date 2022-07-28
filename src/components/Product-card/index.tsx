import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useCartProvider } from "../../contexts/CartProvider";

interface ItemProp {
  name: string;
  category: string;
  price: number;
  id: number;
  description: string;
  images: string;
}

interface PropsCard {
  item: ItemProp;
}

export const ProductCard = ({ item }: PropsCard) => {
  const { name, category, images, price, id, description } = item;
  const {addCartProduct} = useCartProvider()

  return (
    <Flex
      justifyContent="space-between"
      width="300px"
      height="346px"
      borderRadius="5px"
      flexDirection="column"
    >
      <Stack
        as="figure"
        border="2px solid"
        borderColor="gray.300"
        boxSize="300px"
        borderRadius="5px"
      >
        <Link as={ReachLink} to={`/product/${id}`}>
          <Img
            width="296px"
            height="150px"
            borderRadius="3px 3px 0 0"
            objectFit="cover"
            alt={name}
            src={images}
          />
        </Link>

        <Box padding="10px 8px" width="296px" height="150px" borderRadius="8px">
          <Heading fontSize="2xl" as="h2">
            {name}
          </Heading>
          <Text fontSize="md">{category}</Text>
          <Text fontSize="sm" color="purple.600">
            R${price.toFixed(2).replace(".", ",")}
          </Text>
          <Button color="purple.600" onClick={() => addCartProduct(item)}>
            Realizar Inscrição
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};
