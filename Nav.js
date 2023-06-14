import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { UserContext } from "./contexts/User";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import Account from "./Pages/Account";
const Nav = () => {
    const Tab = createBottomTabNavigator()
    const Stack = createStackNavigator()
    const { user } = useContext(UserContext)  
        return (
          <NavigationContainer>
            {user ? (
              <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Account" component={Account} />
              </Tab.Navigator>
            ) : (
              <Stack.Navigator>
                  <Stack.Screen name="SignIn" component={SignIn} />
              </Stack.Navigator>
            )}
          </NavigationContainer>
        );
    }
export default Nav