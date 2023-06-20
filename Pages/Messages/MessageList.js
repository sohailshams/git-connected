import { Text, ScrollView, View, FlatList } from "react-native"
import { getMessageList } from "../../utils/functions"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/User"
import MessageCard from "./MessageCard"

const MessageList = ({ navigation }) => {
    const { user } = useContext(UserContext)
    const [data, setData] = useState([])
    useEffect(() => {
        getMessageList(user.username)
            .then(data => setData(data))
    }, [])

      const renderItem = (item) => {
        return <MessageCard data={item} navigation={navigation} />;
      };
      return (
        <ScrollView>
          <View>
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </ScrollView>
      );
}

export default MessageList