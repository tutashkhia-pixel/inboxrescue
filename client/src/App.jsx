import React from 'react';

function App() {
  const handleConnectGoogle = () => {
    window.location.href = '/auth/google';
  };

  return (
    <div>
      <h1>InboxRescue</h1>
      <p>Connect your Gmail to get started.</p>
      <button onClick={handleConnectGoogle}>Connect Google</button>
    </div>
  );
}

export default App;
