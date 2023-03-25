import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './screens/Dashboard';
import Sell from './screens/Sell';
import Profile from './screens/Profile';
import Footer from './components/Footer';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
            name="Dashboard" 
            component={Dashboard}
            options={{
              tabBar: () => <Footer />,
            }}
          />
        <Tab.Screen
            name="Sell"
            component={Sell}
            options={{
              tabBar: () => <Footer />,
            }}
          />
        <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
              tabBar: () => <Footer />,
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
