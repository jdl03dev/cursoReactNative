/**
 * @format
 */

import {AppRegistry} from 'react-native';


import Login from './Componentes/Login';
import App from './Componentes/App';
import Registro from './Componentes/Registro';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Registro);
