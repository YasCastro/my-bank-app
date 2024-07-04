import { createLocalStorage, getAllLocalStorage } from "./storage";

const bestBank = {
  login: false
}
describe('storage', () => {
  it('Deve retornar o objeto bestBank no localStorage', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    getAllLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('bestbank')
  })
  it('Deve retornar o objeto no localStorage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith('bestBank', JSON.stringify(bestBank))
    })
})

