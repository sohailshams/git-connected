import { useContext } from "react"
import { View, Text } from "react-native"
import { UserContext } from "../../contexts/User"

const MsgCard = ({ data }) => {
    const {user} = useContext(UserContext) // use to check if sender is logged in user
    const sender = data.item.sender_username
    const time = data.item.msg_date_sent.toDate().toString()
    //will add sender image later
    return (
        <View>
            <Text>{data.item.msg_content}</Text>
            <Text>{sender}</Text>
            <Text>{time}</Text>
        </View>
    )
}
export default MsgCard