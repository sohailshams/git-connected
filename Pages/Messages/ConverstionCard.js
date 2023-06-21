import { useContext } from "react"
import { TouchableOpacity, Text, View, Image } from "react-native"
import { UserContext } from "../../contexts/User"
const ConversationCard = ({ data, navigation }) => {
    const {user} = useContext(UserContext)
    const users = Object.keys(data.item.members)
    const otherUsers = users.filter(name => name !== user.username)
    console.log(data.item.last_message)
    function handlePress() {
        navigation.navigate('Direct message', {id:data.item.chat.chat_id})
    }
    return (
      <TouchableOpacity onPress={handlePress}>
        <View>
            <Text>{otherUsers}</Text>
            <Image source={data.item.members[otherUsers[0]].avatar_url} style={{ height: 50, width: 50 }} />
            <Text>{data.item.last_message.msg_content}</Text>
            <Text>{data.item.last_message.display_date}</Text>
        </View>
      </TouchableOpacity>
    );
}
export default ConversationCard