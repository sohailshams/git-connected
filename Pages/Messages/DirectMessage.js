import {
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/User";
import MsgCard from "./MsgCard";
import { addMsg, getMessagesById } from "../../utils/functions";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.config";

const DirectMessage = ({ route, navigation }) => {
  const { user } = useContext(UserContext);
  const { id } = route.params;
  const [msgList, setMsgList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const q = query(
      collection(db, "users", user.username, "conversations", id, "messages")
    );
    onSnapshot(q, (querySnapshot) => {
      const msgList = [];
      querySnapshot.forEach((doc) => msgList.push(doc.data()));
      setMsgList(msgList.reverse());
    });
  }, []);
  function handlePress() {
    addMsg(id, user.id, msg).then(setMsg(""));
  }

  const renderItem = (item) => {
    return <MsgCard data={item} navigation={navigation} />;
  };
  return (
    <ScrollView>
      <View className="h-[500px] w-5/6 max-[768px]:w-[90%] bg-white mx-auto rounded-md shadow-lg my-3">
        <FlatList
          data={msgList}
          renderItem={renderItem}
          inverted={-1}
        />
        <View className="py-2 pl-3 mt-3 mb-5 min-h-[50px] rounded-md shadow-2xl w-5/6 mx-auto">
          <TextInput
            className="pl-3 min-h-[50px]"
            maxLength={500}
            placeholder="Message..."
            value={msg}
            onChangeText={setMsg}
          />
          <TouchableOpacity
            className="bg-zinc-500 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-2"
            onPress={handlePress}
          >
            <Text className="text-white">Send</Text>
          </TouchableOpacity>

          {/* <Button title="send" onPress={handlePress} /> */}
        </View>
      </View>
    </ScrollView>
  );
};
export default DirectMessage;
