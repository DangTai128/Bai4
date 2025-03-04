import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider, useAuth } from './context/AuthContext';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

const MainTabScreen = () => (
  <MainTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FFA500', 
      tabBarInactiveTintColor: '#666', 
      tabBarStyle: {
        backgroundColor: '#FFF',
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        height: 60,
      },
    }}
  >
    <MainTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <MainTab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="person" color={color} size={size} />
        ),
        headerShown: false, 
      }}
    />
  </MainTab.Navigator>
);

const RootNavigator = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;