import { Box, Button, Center, Heading, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";


const Home = () => {
  const [email, setEmail] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext) 
  const navigate = useNavigate()


  const validateUSer  = async(email: string) => {
    const loggedIn = await login(email)

    if(!loggedIn) {
      return alert('Email inválido')
    }
    setIsLoggedIn(true)
    changeLocalStorage({login: true})
    navigate('conta/1')
  } 

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
            onClick={() => validateUSer(email)}
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