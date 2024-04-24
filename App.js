/* eslint-disable react/react-in-jsx-scope */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store';
import Router from './src/route';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
