import { login } from "./login";


describe('login', () => {

  const mockEmail = 'yas@mail.com'
  const mockPassword = '12345'

  it('Deve retornar true caso o e-mail e senha sejam válidos', async() => {
    const response = await login(mockEmail, mockPassword)
    expect(response).toBeTruthy()
  })

  it('Deve retornar false caso o e-mail seja inválido e a senha seja válida', async() => {
    const response = await login('email@invalido', mockPassword)
    expect(response).toBeFalsy()
  })
  
  it('Deve retornar false caso o e-mail seja válido e a senha seja inválida', async() => {
    const response = await login(mockEmail, '5678')
    expect(response).toBeFalsy()
  })

  it('Deve retornar false caso o e-mail seja inválido e a senha seja inválida', async () => {
    const response = await login('email@invalido', '5678')
    expect(response).toBeFalsy()
  })
})
