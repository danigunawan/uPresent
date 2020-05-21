import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {About} from './app/views/About';
import {Home} from './app/views/Home';
import {Login} from './app/views/Login';
import {Register} from './app/views/Register';
import {Attendance} from './app/views/Attendance';
import {Settings} from './app/views/Settings';
import {LiveStream} from './app/views/LiveStream';
import {Records} from './app/views/Records';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="HomeRT">
          <Stack.Screen name="HomeRT" component={Home} />
          <Stack.Screen name="RegisterRT" component={Register} />
          <Stack.Screen name="LoginRT" component={Login} />
          <Stack.Screen name="AboutRT" component={About} />
          <Stack.Screen name="AttendanceRT" component={Attendance} />
          <Stack.Screen name="SettingsRT" component={Settings} />
          <Stack.Screen name="LiveStreamRT" component={LiveStream} />
          <Stack.Screen name="RecordsRT" component={Records} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
