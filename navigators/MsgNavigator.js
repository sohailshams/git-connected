import { createStackNavigator } from "@react-navigation/stack";
import DirectMessage from "../Pages/Messages/DirectMessage";
import ConversationList from "../Pages/Messages/ConversationList";


const Stack = createStackNavigator();

const MsgNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Msg List">
          <Stack.Screen name='Msg List' component={ConversationList} />
          <Stack.Screen name='Direct message' component={DirectMessage}/>
    </Stack.Navigator>
  );
};
export default MsgNavigator