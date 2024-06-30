import { Box, Button, Center, Heading, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { useState } from "react";


const Home = () => {
  const [email, setEmail] = useState<string>('')
  
  return (
    <Box>
      <Card>
      <Center>
          <Heading color="purple.800">Faça o login</Heading>
        </Center>
        <Input
          placeholder="email"
          marginTop="40px"
          variant="flushed"
          value={ email }
          onChange={(event) => setEmail(event.target.value)}/>      
        <Input
          placeholder="password"
          type="password"
          marginTop="10px"
          variant="flushed"
        />
        <Center>
          <Button
            onClick={() => login(email)}
            colorScheme="purple"
            size="lg"
            width="100%"
            marginTop="40px"
          >
            Login
          </Button>
        </Center>
      </Card>   
    </Box>
  )
}

export default Home;