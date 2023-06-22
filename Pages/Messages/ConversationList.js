import { Text, ScrollView, View, FlatList } from "react-native"
import { getMessageList } from "../../utils/functions"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/User"
import ConversationCard from "./ConverstionCard"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.config"

const ConversationList = ({ navigation }) => {
  const { user } = useContext(UserContext)
  
    const [data, setData] = useState([])
    // useEffect(() => {
    //     getMessageList(user.username)
    //         .then(data => setData(data))
    // }, [])
  useEffect(()=>{
  const q = query(collection(db, "users", `${user.username}`, 'conversations'),);
  onSnapshot(q, (querySnapshot) => {
    const chatList = [];
      console.log('listen')
      querySnapshot.forEach((doc) => chatList.push(doc.data()));
      setData(chatList)
    })
  }, [])
  console.log(data)

      const renderItem = (item) => {
        return <ConversationCard data={item} navigation={navigation} />;
      };
      return (
        <ScrollView>
    <View>
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </ScrollView>
      );
}

export default ConversationList