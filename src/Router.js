import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            statusBarColor: '#698269',
            navigationBarColor: '#F1DBBF',
            headerStyle: {backgroundColor: '#F1DBBF'},
            headerTitleAlign: 'center',
            headerTitle: 'Categories',
            headerTitleStyle: {color: '#AA5656'},
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            statusBarColor: '#698269',
            navigationBarColor: '#F1DBBF',
            headerStyle: {backgroundColor: '#F1DBBF'},
            headerTitleAlign: 'center',
            headerTitle: 'Meals',
            headerTitleStyle: {color: '#AA5656'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            statusBarColor: '#698269',
            navigationBarColor: '#F1DBBF',
            headerStyle: {backgroundColor: '#F1DBBF'},
            headerTitleAlign: 'center',
            headerTitle: 'Detail',
            headerTitleStyle: {color: '#AA5656'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
