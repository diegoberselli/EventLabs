import {
  Box,
  Button,
  Flex,
  Image,
  List,
  Select,
  SelectField,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/AuthContext";
import { useCartProvider } from "../../contexts/CartProvider";

export const Cart = () => {
  const { cartProducts, emptyCart } = useCartProvider();
  const { removeAll } = useCartProvider();

  const checkoutMemory =
    JSON.parse(localStorage.getItem("@checkoutMemory") || "null") || {};

  const [typeOfPayment, setTypeOfPayment] = useState(
    checkoutMemory?.typeOfPayment || ""
  );

  const [change, setChange] = useState(checkoutMemory.change || "");

  const navigate = useNavigate();
  const { accessToken, user } = useAuth();

  if (cartProducts.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Text>Finalize sua compra</Text>
      <Flex alignContent="center" justifyContent="center" padding="150px">
        <Flex
          padding="150px"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          overflowX="hidden"
          alignContent="center"
        >
          <Box>
            <Text align="center">Tipo de pagamento</Text>
            <SelectField marginRight="50px" mt="30px">
              Tipo de Pagamento
              <option value="Selecione o tipo de pagamento">
                Selecione o tipo de pagamento
              </option>
              <option value="Pix">Pagamento no Pix</option>
              <option value="Pagamento no cartão na entrega">
                Pagamento no cartão na entrega
              </option>
            </SelectField>
          </Box>
          <Flex>
            {cartProducts.length ? (
              <UnorderedList>
                {cartProducts.map((product) => (
                  <List key={product.id} display="flex">
                    <Box>
                      <Text>Seu pedido:</Text>
                      <Image
                        marginRight="40px"
                        width={["200px", "400px"]}
                        height={["100px", "250px"]}
                        objectFit="cover"
                        borderRadius="30px"
                        alt={product.name}
                        src={product.images}
                      />
                    </Box>
                    <Flex mt="20px" justifyContent="space-around" alignContent="center" wrap="wrap">
                      <Text as="h2" fontSize="xl">
                        {product.name}
                      </Text>
                      <Text>
                        <Text as="span">
                          R$ {product.price.toFixed(2).replace(".", ",")}
                        </Text>
                      </Text>
                      <Text>Quantidade: {product.qtd}</Text>

                      <Button onClick={() => removeAll(product)}>
                        <FaTrash />
                      </Button>
                    </Flex>
                  </List>
                ))}
                <Box>
                  <Text className="total">
                    <Text>Quantidade Total:</Text>
                    <Text>
                      {cartProducts.reduce(
                        (acc, product) => acc + product.qtd,
                        0
                      )}
                    </Text>
                  </Text>
                  <Text className="total">
                    <Text>Valor Total:</Text>
                    <Text>
                      R$
                      {cartProducts
                        .reduce(
                          (acc, product) => acc + product.price * product.qtd,
                          0
                        )
                        .toFixed(2)
                        .replace(".", ",")}
                    </Text>
                  </Text>
                  <Button
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Finalizar Pedido
                  </Button>
                </Box>
              </UnorderedList>
            ) : (
              <>
                <Text>
                  <FaShoppingBag />
                  <Text>Seu Carrinho está vazio!</Text>
                  <Text>Volte e adicione algo</Text>
                </Text>
                <Button
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                  }}
                >
                  Voltar
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
