import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informações da Conta
      </Text>
      <Link to="/conta/1">
        <Text fontSize="3xl">
          {`Nome: Yasmine`}
        </Text>
        <Text fontSize="3xl">
          {`E-mail: yas@mail.com`}
        </Text>
      </Link>
    </>
  )
}

export default ContaInfo;