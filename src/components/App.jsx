import React, {useState} from 'react';

const App = () => {
  const {user, organization, token} = useState({})
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default App;
