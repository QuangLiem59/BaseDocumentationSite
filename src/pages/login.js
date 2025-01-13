import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      })}>Log In</button>
    </div>
  );
};

export default LoginPage;
