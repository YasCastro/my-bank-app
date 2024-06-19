const conta = {
    email: 'yas@mail.com',
    password: '12345',
    name: 'Yasmine Fortes',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})