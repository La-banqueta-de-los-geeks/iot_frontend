import { useState, useEffect } from 'react';
import { SearchUser } from '../config/utils';

export function useSession() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(SearchUser());
    // SearchToken()
    // SearchOrganization()
  }, []);
  return SearchUser();
}
