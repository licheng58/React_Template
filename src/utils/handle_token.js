const getToken = () => {
  return JSON.parse(localStorage.getItem('TOKEN'))
}

const setToken = (token) => {
  return localStorage.setItem('TOKEN', JSON.stringify(token))
}

const removeToken = () => {
  return localStorage.removeItem('TOKEN')
}

const hasToken = () => {
  return JSON.parse(localStorage.getItem('TOKEN')) ? true : false
}

const clearToken = () => {
  return localStorage.clear()
}

export { getToken, setToken, removeToken, hasToken, clearToken }
