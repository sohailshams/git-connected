import { Text, View, FlatList, ScrollView, Button, TextInput } from "react-native"
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/User";
import MsgCard from "./MsgCard";
import { addMsg, getMessagesById } from "../../utils/functions";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.config"

const DirectMessage = ({route, navigation}) => {
    const { user } = useContext(UserContext);
    const { id } = route.params
    const [msgList, setMsgList] = useState([]);
    const [msg, setMsg] = useState('')
    useEffect(() => {
      const q = query(collection(db, "users", user.username, "conversations", id, 'messages' ));
        onSnapshot(q, (querySnapshot) => {
            const msgList = [];
            querySnapshot.forEach((doc) => msgList.push(doc.data()));
            setMsgList(msgList)
        })
    }, []);
    function handlePress() {
        addMsg(id, user.id, msg)
        .then(setMsg(''))
    }

    const renderItem = (item) => {
      return <MsgCard data={item} navigation={navigation} />;
    };
    return (
      <ScrollView>
        <View>
          <FlatList
            data={msgList}
            renderItem={renderItem}
            
        
          />
          <TextInput
            placeholder="message..."
            value={msg}
            onChangeText={setMsg}
          />
          <Button title="send" onPress={handlePress} />
        </View>
      </ScrollView>
    );
}
export default DirectMessage