import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { changeLocalStorage, createLocalStorage } from './services/storage';



function App() {
  createLocalStorage()
  changeLocalStorage({
    login: true
  })

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>      
    </BrowserRouter>
  );
}

export default App;
