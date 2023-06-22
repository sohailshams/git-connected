import { useContext } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { UserContext } from '../../contexts/User';

const ConversationCard = ({ data, navigation, newMsgSenders, setNewMsgSenders }) => {
  const { user } = useContext(UserContext);
  const users = Object.keys(data.item.members);
  const otherUsers = users.filter((name) => name !== user.username);
  const keys = Object.keys(data.item);
  const newMsgsCount = newMsgSenders.filter(user => user === otherUsers[0]).length
  
  let msg;
  let time;
  let sender
  
  if(keys.indexOf('last_message') === -1){
    msg = ''
    time = ''
    sender=''
  } else {
    msg = data.item.last_message.msg_content
    time = data.item.last_message.display_date
    sender = data.item.last_message.sender.username
  }
  
  function handlePress() {
    setNewMsgSenders(currMsgs => [...currMsgs].filter(user => user !== otherUsers[0]))
    navigation.navigate('Direct message', {id:data.item.chat.chat_id})
  }


  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
        <View className="min-[768px]:relative max-[425px]:flex-cols-1 flex min-[768px]:flex-row justify-between items-start m-3">
          <View className="w-[150px] h-[150px] bg-gray-300 mx-auto rounded-md shadow-lg mt-3 mb-3  text-left ml-3 items-center">
            <Text className="text-xl font-semibold m-3">{otherUsers}</Text>
            <Image
              className="rounded-full mt-3 h-[80px] w-[80px] mb-3"
              source={data.item.members[otherUsers[0]].avatar_url}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <View className="flex flex-cols-1 items-end">
            <View className=" max-w-[500px] p-2 m-3 text-md m-3 ">
              {newMsgSenders.includes(otherUsers[0]) ? (
                <Text className="bg-black py-2 px-3 rounded-md text-white">
                  {newMsgsCount} new messages
                </Text>
              ) : null}
            </View>
            <View className="">
              <Text
                className={`max-w-[500px] max-h-[60px] p-2 m-3 rounded-md shadow-lg truncate   ${
                  user.username !== sender
                    ? "bg-gray-300 justify-start"
                    : "bg-lime-400 justify-end"
                }`}
              >
                {msg}
              </Text>
            </View>
            <Text className="justify-right text-xs">
              {sender}, {time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ConversationCard;
