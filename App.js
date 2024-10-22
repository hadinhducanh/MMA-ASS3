import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Header from './components/Header'; 
import Home from './screens/Home'; 
import Favorite from './screens/Favorite';
import Detail from './screens/Detail'; 
import { FavoriteProvider } from './screens/Favorite/components/context/FavoriteContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={Home} 
        options={{ header: () => <Header /> }} 
      />
      <Stack.Screen 
        name="Detail" 
        component={Detail} 
        options={{ title: 'Product Details' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';  
                return <MaterialIcons name={iconName} size={size} color={color} />;
              } else if (route.name === 'Favorite') {
                iconName = 'heart';  
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen 
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
            }} 
          />
          <Tab.Screen 
            name="Favorite" 
            component={Favorite} 
            options={{
              header: () => <Header />,
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
