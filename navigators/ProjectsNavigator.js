import { createStackNavigator } from "@react-navigation/stack";
import ProjectList from "../Pages/Projects/ProjectList";
import Home from "../Pages/Home";
import DetailedColabCard from "../Pages/Projects/DetailedColabCard";

const ProjectsNavigator = () => {
  const Stack = createStackNavigator();
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
      <Stack.Screen name="Browse Projects" component={ProjectList} />
      <Stack.Screen name="Project Detail" component={DetailedColabCard} />
    </Stack.Navigator>
  );
};
export default ProjectsNavigator;
