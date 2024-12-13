import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
