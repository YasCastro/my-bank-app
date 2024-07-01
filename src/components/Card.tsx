import { Box, Center } from "@chakra-ui/react";

export const Card = ({ children } : any) => {
  

  return (
    <Center marginTop="45px">
      <Box backgroundColor='gray.100' borderRadius='25px' padding='15px'>
        { children }
      </Box>
    </Center>
  )
}