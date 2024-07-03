import { Box,  Button,  Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex bg="purple.300" color="white" p={2}>
      <Box>
        <Center>
          <Text fontSize="3xl">Best Bank</Text>
        </Center>  
      </Box>
      {
        isLoggedIn && (
          <>
          <Spacer />
          <Button
            onClick={() => logout()}
          >
            Sair
          </Button>
          </>
        )
      }
      
    </Flex>
  )
}