import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";


export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box minHeight='90vh' backgroundColor='purple.700' padding='25px'>
        {children}
      </Box>
      <Footer />
    </>
  )
}
  