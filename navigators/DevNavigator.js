import { createStackNavigator } from "@react-navigation/stack";
import DevList from "../Pages/DevList/DevList";
import Home from "../Pages/Home";

const DevNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dev List" component={DevList} />
    </Stack.Navigator>
  );
};
export default DevNavigator;
