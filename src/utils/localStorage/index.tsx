const getAccessToken = () => {
  return localStorage.getItem('@Clients:token')
}

export default getAccessToken
