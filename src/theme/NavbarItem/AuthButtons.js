import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButtons = () => {
  const { loginWithRedirect, logout, isLoading, isAuthenticated } = useAuth0();

  const isLoginPage = location.pathname === '/login';

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated && !isLoginPage) {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button style={{ cursor: 'pointer' }} onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <button style={{ cursor: 'pointer' }} onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
