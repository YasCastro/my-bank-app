import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string,
  content: string
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box
      backgroundColor="gray.100"
      minHeight="120px"
      padding={8}
      borderRadius="10px"
    >
      <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
      <Text fontSize='xl'>{content}</Text>
    </Box>
  )
}