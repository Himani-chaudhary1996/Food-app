/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import name from './app.json';
import {withAppContextProvider} from './GlobalContext';

AppRegistry.registerComponent("very-special", () => App);
