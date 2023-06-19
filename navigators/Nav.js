import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProfileNavigator from "./ProfileNavigator";
import ProjectsNavigator from "./ProjectsNavigator";
import DevList from "../Pages/DevList/DevList";
import DevProfileNavigator from "./DevNavigator";
const Nav = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={{ headerTitleAlign: "center" }}
          initialRouteName={user.isNewUser ? "Profile" : "Home"}
        >
          <Tab.Screen name="Projects" component={ProjectsNavigator} />
          <Tab.Screen name="Devs" component={DevProfileNavigator} />
          <Tab.Screen name='account' component={ProfileNavigator}/>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default Nav;
