

export const checkUserAuthenticated = () => {
  const accessToken = localStorage.getItem('@Clients:token')

  return !!accessToken;
};