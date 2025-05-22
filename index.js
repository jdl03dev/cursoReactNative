/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import Login from './Login';
import Registro from './registro';

import {name as appName} from './app.json';
import Singup from './registro';

AppRegistry.registerComponent(appName, () => Registro);
