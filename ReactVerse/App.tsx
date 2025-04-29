import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from "./screens/HomeScreen";
import LearningScreen from "./screens/LearningScreen";
import CommunityScreen from "./screens/CommunityScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TutorialsScreen from "./screens/TutorialsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Learning') {
                iconName = focused ? 'book-open-variant' : 'book-open-outline';
              } else if (route.name === 'Community') {
                iconName = focused ? 'account-group' : 'account-group-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'account-circle' : 'account-circle-outline';
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4c669f',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Learning" component={LearningScreen} />
          <Tab.Screen name="Community" component={CommunityScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen 
            name="TutorialsScreen" 
            component={TutorialsScreen}
            options={{ tabBarButton: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    userSelect: "none"
  }
});