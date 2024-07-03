import { login } from "./login";


describe('login', () => {

  const mockEmail = 'yas@mail.com'

  it('Deve exibir um alert com boas vindas caso o e-mail seja válido', async() => {
    const response = await login(mockEmail)
    expect(response).toBeTruthy()
  })

  it('Deve exibir um erro caso o e-mail seja inválido', async() => {
    const response = await login('email@invalido')
    expect(response).toBeFalsy()
  })
})
