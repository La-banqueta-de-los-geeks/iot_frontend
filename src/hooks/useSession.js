import { useState, useEffect } from 'react';
import fetch_users from '../api/resources/users'
import { SearchOrganization, SearchToken, SearchUser } from '../config/utils';
export  function useSession() {
  const [user, setUser] = useState({})
  useEffect(() => {
    setUser(SearchUser())
    // SearchToken()
    // SearchOrganization()
  }, [])
  return SearchUser();
}
