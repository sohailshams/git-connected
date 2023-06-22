import { useContext } from "react"
import { TouchableOpacity, Text, View, Image } from "react-native"
import { UserContext } from "../../contexts/User"

const ConversationCard = ({ data, navigation, newMsgSender }) => {
  const {user} = useContext(UserContext)
  const users = Object.keys(data.item.members)
  const otherUsers = users.filter(name => name !== user.username)
  const keys = Object.keys(data.item)

  let msg 
  let time

  if(keys.indexOf('last_message') === -1){
    msg = ''
    time = ''
  } else {
    msg = data.item.last_message.msg_content
    time= data.item.last_message.display_date
  }
  
  function handlePress() {
      navigation.navigate('Direct message', {id:data.item.chat.chat_id})
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
          {newMsgSender === otherUsers[0] ? <Text>New message from {newMsgSender}</Text> : null }
          <Text>{otherUsers}</Text>
          <Image source={data.item.members[otherUsers[0]].avatar_url} style={{ height: 50, width: 50 }} />
          <Text>{msg}</Text>
          <Text>{time}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ConversationCard