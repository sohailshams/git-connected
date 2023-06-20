import { TouchableOpacity, Text, View } from "react-native"

const MessageCard = ({ data, navigation }) => {
    const time = data.item.lastMsg.msg_date_sent
    const date = time.toDate()
    function handlePress() {
        navigation.navigate('Direct message', {data})
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <View>
                <Text>{data.item.members[0][0]}</Text>
                <Text>{data.item.lastMsg.msg_content}</Text>
                <Text>{date.toString()}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default MessageCard