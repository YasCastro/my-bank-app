import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

export const Header = () => {
  const context = useContext(AppContext)
  return (
    <Box bg="purple.300" color="white" p={2}>
      <Flex justify="space-between" align="center">
        <Heading size="md">Best Bank</Heading>
        <Box>
          <Button colorScheme="whiteAlpha">Sign Up</Button>
        </Box>
      </Flex>
    </Box>
  )
}