import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const bestBank = {
  login: false
}
describe('storage', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

  it('Deve retornar o objeto bestBank no localStorage', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    getAllLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('bestBank')
  })
  it('Deve criar o objeto no localStorage', () => {
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith('bestBank', JSON.stringify(bestBank))
  })
  
  it('Deve alterar o objeto no localStorage', () => {
    changeLocalStorage(bestBank)
    expect(mockSetItem).toHaveBeenCalledWith('bestBank',  JSON.stringify(bestBank))
  })
})

