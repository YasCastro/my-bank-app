import { login } from "./login";

const mockSetIsLoggedIn = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({ 
    setIsLoggedIn: mockSetIsLoggedIn
   })
}))
describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  const mockEmail = 'yas@mail.com'

  it('Deve exibir um alert com boas vindas caso o e-mail seja válido', async() => {
    await login(mockEmail)
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vinda ${mockEmail}!`)
  })

  it('Não deve exibir um alert de boas vindas sem o e-mail', async() => {
    await login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
  })

  it('Deve exibir um erro caso o e-mail seja inválido', async() => {
    await login('email@invalido')
    expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
    expect(mockAlert).toHaveBeenCalledWith('E-mail inválido!')
  })
})
