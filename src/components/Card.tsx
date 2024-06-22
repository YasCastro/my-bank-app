import { Box, Button, Center, Heading, Input } from "@chakra-ui/react";
import { login } from '../services/login';
import { useState } from "react";

export const Card = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <Center marginTop="45px">
      <Box backgroundColor='gray.100' borderRadius='25px' padding='15px'>

      </Box>
    </Center>
  )
}