import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './Navigators/AuthNavigator';
import MainNavigator from './Navigators/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
