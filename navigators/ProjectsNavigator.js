import { createStackNavigator } from "@react-navigation/stack";
import ProjectList from "../Pages/Projects/ProjectList";
import Home from "../Pages/Home";

const ProjectsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Project list" component={ProjectList} />
    </Stack.Navigator>
  );
};
export default ProjectsNavigator;
