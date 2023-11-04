import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import CourseDetailsScreen from './Screens/CourseDetailsScreen';
import CourseScr from './Screens/CourseScr';
import EnrollmentForm from './Screens/EnrollmentForm';
import EnrollmentConfirmation from './Screens/EnrollmentConfirmation';
import login from './Screens/login';
import StudentDashboard from './Screens/StudentDashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="CoursesScr">
  <Stack.Screen name="CoursesScr" component={CourseScr} />
  <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
  <Stack.Screen name="Enroll" component={EnrollmentForm} />
  <Stack.Screen name="Confirmation" component={EnrollmentConfirmation} />
  <Stack.Screen name="login" component={login} />
  <Stack.Screen name="Dashboard" component={StudentDashboard} />
</Stack.Navigator>
<StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
