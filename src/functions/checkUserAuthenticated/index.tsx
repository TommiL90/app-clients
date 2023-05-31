

export const checkUserAuthenticated = () => {
  if(typeof window !== 'undefined') {
    const accessToken = localStorage.getItem('@Clients:token')

    return !!accessToken;
  } else{
    return false
  }
};