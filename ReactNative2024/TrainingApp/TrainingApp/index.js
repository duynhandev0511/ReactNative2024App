/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Import Firebase
import firestore from '@react-native-firebase/app';

// Initialize Firebase
firestore.initializeApp();

AppRegistry.registerComponent(appName, () => App);

