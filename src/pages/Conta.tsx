import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { api } from "../api";
import { CardInfo } from "../components/CardInfo";
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string,
  password: string,
  name: string,
  id: string
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>()
  const navigate = useNavigate()
  const actualDate = new Date()
  const { id } = useParams()
  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')
  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  }, [])

  if (userData && id !== userData.id) {
    navigate("/")
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          userData === undefined || userData === null ?
            (
              <Center>
                <Spinner size="xl" color="white"/>
              </Center>
            ) :
            (
              <>
                <CardInfo
                  mainContent={`Bem vinda ${userData?.name}`}
                  content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`}
                />
                <CardInfo
                  mainContent="Saldo"
                  content=""
                />
              </>
            )
        }

      </SimpleGrid>
    </Center>
  )
}

export default Conta;