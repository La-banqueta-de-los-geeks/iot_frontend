import { useState, useEffect } from 'react';
import axios from 'axios';
const useUsers = (url, payload) => {
  console.log(url, payload);
  const [user, setUser] = useState([])
  useEffect(() => {
    // const response = await axios.post(url, payload)
    // setUser(response.data)
    fetch(url, {
      method: 'POST',
      body: payload
    })
      .then(response => response ? response.json() : {})
      .then(data => setUser(data))

  }, [url])
  return user;
}

export default useUsers;