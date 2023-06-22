import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import SignIn from "../Pages/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProfileNavigator from "./ProfileNavigator";
import ProjectsNavigator from "./ProjectsNavigator";
import DevProfileNavigator from "./DevNavigator";
import MsgNavigator from "./MsgNavigator";
import { Image } from "react-native";

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
          tabBarOptions={{
            headerTitleAlign: "center",
            headerRight: () => (
              <Image
                source={require("../assets/Git-Connected-1.png")}
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
            ),
          }}
        >
          <Tab.Screen
            name="Projects"
            component={ProjectsNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Devs"
            component={DevProfileNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Messages"
            component={MsgNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "rgb(113, 113, 122)",
              height: 50,
            },
          }}
        >
          <Stack.Screen name="Sign In" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default Nav;
