const bestBank = {
  login: false
}
export const getAllLocalStorage = () => {
  return localStorage.getItem('bestbank')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('bestbank', JSON.stringify(bestBank))
}