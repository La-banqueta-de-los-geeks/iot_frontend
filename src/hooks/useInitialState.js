import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  return {
    state
  };
};

export default useInitialState;
