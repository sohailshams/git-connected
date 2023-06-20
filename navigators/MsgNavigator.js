import { createStackNavigator } from "@react-navigation/stack";
import MessageList from "../Pages/Messages/MessageList";
import DirectMessage from "../Pages/Messages/DirectMessage";


const Stack = createStackNavigator();

const MsgNavigator = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen name='Msg List' component={MessageList} />
          <Stack.Screen name='Direct message' component={DirectMessage}/>
    </Stack.Navigator>
  );
};
export default MsgNavigator