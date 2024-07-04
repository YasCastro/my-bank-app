interface IBestBank {
  login: boolean
}

const bestBank = {
  login: false
}
export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('bestBank')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('bestBank', JSON.stringify(bestBank))
}

export const changeLocalStorage = (bestBank: IBestBank): void => {
  localStorage.setItem('bestBank', JSON.stringify(bestBank))
}