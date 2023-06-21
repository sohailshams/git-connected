import { createStackNavigator } from "@react-navigation/stack";
import DevProfile from "../Pages/DevProfile/DevProfile";
import DevList from "../Pages/DevList/DevList";

const Stack = createStackNavigator();

const DevProfileNavigator = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "rgb(113, 113, 122)",
          height: 50,
        },
      }}
    >
      <Stack.Screen name="Find a Collaborator" component={DevList} />
      {/* <Stack.Screen name="dev card" component={DevCard} /> */}

      <Stack.Screen name="dev profile" component={DevProfile} />
    </Stack.Navigator>
  );
};

export default DevProfileNavigator;
