import React, {createContext} from 'react';

export const AuthContext = createContext();

export const authContextFunction = React.memo(
  () => ({
    signIn: () => {
      console.log('Sign In');
    },
    signOut: () => {
      console.log('Sign Out');
    },
  }),
  [],
);
