import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalScreen from './screens/PersonalScreen';
import ProfessionalScreen from './screens/ProfessionalScreen';
import CompanyScreen from './screens/CompanyScreen';
import FeedDetailScreen from './screens/FeedDetailScreen'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createStackNavigator();

function App() {
  return (
<SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Personal"
          component={PersonalScreen}
          options={{headerShown: false}} // Hide header for Personal screen
        />
        <Stack.Screen
          name="Professional"
          component={ProfessionalScreen}
          options={{title: 'Profession'}} 
        />
        <Stack.Screen
          name="Company"
          component={CompanyScreen}
          options={{title: 'Company'}} 
        />
        <Stack.Screen
          name="FeedDetail"
          component={FeedDetailScreen}
          options={{title: 'Feed'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;