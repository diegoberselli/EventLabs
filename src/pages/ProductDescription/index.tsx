import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCartProvider } from "../../contexts/CartProvider";
import { useProduct } from "../../contexts/ProductsProvider";
import { api } from "../../services/api";

interface ObjProp {
  id?: string;
}

export const ProductDescription = () => {
  const { products } = useProduct();
  const navigate = useNavigate();

  const { id }: ObjProp = useParams();
  const product = products.find((prod) => Number(prod.id) === Number(id));
  const { addCartProduct } = useCartProvider();

  if (product) {
    return (
      <>
        <Flex
          padding="150px"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          overflowX="hidden"
          alignContent="center"
        >
          <Box display="flex" flexDirection="column">
            <Text textAlign="center" as="figcaption">{product.name}</Text>
            <Box className="img-box">
              <Img
                marginRight="40px"
                width={["200px", "400px"]}
                height={["100px", "250px"]}
                src={product.images}
                alt={product.name}
                objectFit="cover"
                borderRadius="30px"
              />
            </Box>
          </Box>
          <Flex flexDirection="column">
            <Text as="h1">{product.name}</Text>
            <Text as="p" className="category">
              Categoria: {product.category}
            </Text>
            <Text as="p">{product.description}</Text>
            <Text as="p">
              <Text as="span">
                Preço: R$ {product.price.toFixed(2).replace(".", ",")}
              </Text>
            </Text>
            <Button onClick={() => addCartProduct(product)} className="add">
              Adicionar ao Carrinho
            </Button>
            <Button
              mt="10px"
              onClick={() => {
                navigate("/cart");
              }}
            >
              Finalizar compra
            </Button>
          </Flex>
          {/* 
          <Button
            padding="10px 50px"
            top="72px"
            onClick={() => {
              navigate("/");
            }}
          >
            Voltar
          </Button> */}
        </Flex>
      </>
    );
  } else {
    return <Text as="h1">Erro 404</Text>;
  }
};
