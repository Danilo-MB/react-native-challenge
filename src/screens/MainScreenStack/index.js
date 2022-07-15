import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MainScreen from '../MainScreen';

const Stack = createStackNavigator();

const MainScreenStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
            headerStyle: { elevation: 0, shadowOpacity: 0 },
            headerTitle: '',
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default MainScreenStack;