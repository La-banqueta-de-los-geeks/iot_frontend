import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [user, setUser] = { state };
  return {
    state,
    setState,
    user,
    setUser,
  };
};

export default useInitialState;
