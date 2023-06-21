import { useContext } from "react"
import { View, Text, Image } from "react-native"
import { UserContext } from "../../contexts/User"

const MsgCard = ({ data }) => {
    const {user} = useContext(UserContext) // use to check if sender is logged in user
    const sender = data.item.sender.username 
    const time = data.item.display_date
    return (
      <View>
        <Text>{data.item.msg_content}</Text>
        <Text>{sender}</Text>
        <Text>{time}</Text>
        <Image source={data.item.sender.avatar_url} style={{ height: 50, width: 50 }} />
      </View>
    );
}
export default MsgCard