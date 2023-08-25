import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer> 
          <SafeAreaProvider>
            
              <Navigation></Navigation>
        
          </SafeAreaProvider> 
        </NavigationContainer>
     
    </Provider>
    
  );
}