/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { withAppContextProvider } from './GlobalContext';
import  name  from './app.json'
AppRegistry.registerComponent('very-special', () => App);

if (Platform.OS === 'web') {
    AppRegistry.runApplication("very-special", {
        rootTag: document.getElementById('root'),
    });
}