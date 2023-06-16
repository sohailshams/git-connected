import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Pages/Profile/Profile";
import AddRepo from "../Pages/Profile/AddRepo";
import AddRepoForm from "../Pages/Profile/AddRepoForm";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="own profile" component={Profile} />
      <Stack.Screen name="add Repo" component={AddRepo} />
      <Stack.Screen name="Repo Form" component={AddRepoForm} />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
