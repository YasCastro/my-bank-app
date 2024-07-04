export const getAllLocalStorage = () => {
  return localStorage.getItem('')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('diobank')
}