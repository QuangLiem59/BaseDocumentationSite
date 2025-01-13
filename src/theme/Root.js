import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Root = ({ children }) => {
    const onRedirectCallback = (appState) => {
        window.location.replace(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            onRedirectCallback={onRedirectCallback}
            cacheLocation="localstorage"
            audience='http://localhost:3000'
        >
            {children}
        </Auth0Provider>
    );
};

export default Root;
