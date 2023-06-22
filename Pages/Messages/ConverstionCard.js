import { useContext } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { UserContext } from '../../contexts/User';
const ConversationCard = ({ data, navigation }) => {
  const { user } = useContext(UserContext);
  const users = Object.keys(data.item.members);
  const otherUsers = users.filter((name) => name !== user.username);
  const keys = Object.keys(data.item);
  let sender;
  let time;
  if (keys.indexOf('last_message') === -1) {
    sender = '';
    time = '';
  } else {
    sender = data.item.last_message.msg_content;
    time = data.item.last_message.display_date;
  }

  function handlePress() {
    navigation.navigate('Direct message', { id: data.item.chat.chat_id });
  }
  console.log('inbox of:', data.item.chat.chat_name);
  // data.item.last_message.sender.username

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg m-3">
        <View className="min-[768px]:relative max-[425px]:flex-cols-1 flex min-[768px]:flex-row justify-between items-center m-3">
          <View className=" w-[150px] h-[150px] bg-gray-300 mx-auto rounded-md shadow-lg mt-3 mb-3  text-left ml-3 items-center">
            <Text className="text-xl font-semibold m-3">{otherUsers}</Text>
            <Image
              className="rounded-full mt-3 h-[80px] w-[80px] mb-3"
              source={data.item.members[otherUsers[0]].avatar_url}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <View className="flex flex-cols-1 items-center">
            <View className="  max-w-[500px] p-2 m-3 rounded-md shadow-lg text-md m-3 bg-black text-white ">
              <Text className="text-white mr-0">
                Latest message from {data.item.last_message.sender.username}
              </Text>
            </View>
            <Text
              className={`max-w-[500px] p-2 m-3 rounded-md shadow-lg   ${
                data.item.chat.chat_name ===
                data.item.last_message.sender.username
                  ? 'bg-lime-400 justify-start'
                  : 'bg-gray-300 justify-end'
              }`}
            >
              {sender}
            </Text>
            <Text className="justify-right text-xs">
              {data.item.last_message.sender.username}, {time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ConversationCard;
