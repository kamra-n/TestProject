import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';


const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
          
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>


        </NavigationContainer>
    );
};

export default AppNavigator;
