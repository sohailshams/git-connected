import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Pages/Profile/Profile";
import AddRepo from "../Pages/Profile/AddRepo";
import AddRepoForm from "../Pages/Profile/AddRepoForm";
import PortfolioCard from "../Pages/Profile/PortfolioCard";
import EditProfile from "../Pages/Profile/EditProfile";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="own profile" component={Profile} />
      <Stack.Screen name="add Repo" component={AddRepo} />
      <Stack.Screen name="Repo Form" component={AddRepoForm} />
      <Stack.Screen name='portfolio card' component={PortfolioCard} />
      <Stack.Screen name='Edit' component={EditProfile} /> 
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
