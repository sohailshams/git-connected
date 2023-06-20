import { createStackNavigator } from "@react-navigation/stack";
import ProjectList from "../Pages/Projects/ProjectList";
import Home from "../Pages/Home";
import DetailedColabCard from "../Pages/Projects/DetailedColabCard";

const ProjectsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Browse Projects" component={ProjectList} />
      <Stack.Screen name="Detailed Colab Card" component={DetailedColabCard} />
    </Stack.Navigator>
  );
};
export default ProjectsNavigator;
