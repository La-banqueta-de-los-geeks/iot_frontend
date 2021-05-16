import { useState, useEffect } from 'react';
import fetch_users from '../api/resources/users'
const useUserLogin = (data) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    fetch_users.create(data)
      .then((response) => {
        let { data } = response
        localStorage.setItem('token', JSON.stringify(data.token.token))
        setUser(data.user)
        // setOrganization(data.organization)
        // setToken(data.token)
        console.log(user);
        // history.push("/");
      }).catch((err) => {
        console.log(err);
      });
  }, [data])
  return user;
}

export default useUserLogin;