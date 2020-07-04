import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {AppContextProvider} from './GlobalContext';
import Router from './Root.js';

import { registerRootComponent } from 'expo';
const App = () => {
  return (
<AppContextProvider>
<Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </Fragment>
</AppContextProvider>
    

  );
};
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
