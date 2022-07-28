import { Grid, Heading, Text } from "@chakra-ui/react";

export const LoginInfo = () => (
  <Grid width={["100%", "100%", "50%", "40%"]} paddingRight="50px">
    <Heading marginTop="4" as="h1">
      O jeito fácil
    </Heading>
    <Text width={["200px", "250px", "250px"]}>
      De achar eventos!
      <b> Seus eventos em uma única plataforma</b>
    </Text>
  </Grid>
);
