import React from 'react';
import Router from 'next/router';
import cookies from 'next-cookies';
import { loadState } from '../localStorage';

const login = '/unauthorized';
/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkuserentication = () => {
  return { auth: null }; // change null to { isAdmin: true } for test it.
};

export const withPrivateRoute = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const token = cookies(context).token;

    //Are you an authorized user or not?
    if (!token) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: token,
      });
      return { ...wrappedProps, token };
    }

    return { token };
  };

  return hocComponent;
};

export default withPrivateRoute;
