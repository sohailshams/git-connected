import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { UserContext } from "./contexts/User";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Pages/Profile";
const Nav = () => {
    const Tab = createBottomTabNavigator()
    const Stack = createStackNavigator()
  const { user } = useContext(UserContext)
  console.log(user)
        return (
          <NavigationContainer>
            {user ? (
              <Tab.Navigator initialRouteName={user.isNewUser ? "Profile" : "Home"}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
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