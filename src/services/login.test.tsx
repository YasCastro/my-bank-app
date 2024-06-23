import { login } from "./login";

describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  const mockEmail = 'yas@mail.com'

  it('Não deve exibir um alert de boas vindas sem o e-mail', () => {
    login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
  })

  // it('Deve exibir um erro caso o e-mail seja inválido', () => {
  //   login('email@invalido')
  //   expect(mockAlert).toHaveBeenCalledWith('E-mail inválido!')
  // })
})
