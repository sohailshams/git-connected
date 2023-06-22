import { useContext } from "react";
import { View, Text, Image } from "react-native";
import { UserContext } from "../../contexts/User";

const MsgCard = ({ data }) => {
  const { user } = useContext(UserContext);
  const sender = data.item.sender.username;
  const time = data.item.display_date;

  return (
    <View
      className={
        sender == user.username
          ? "bg-lime-400  w-4/5 mx-auto my-3 rounded-md p-5 shadow-2xl"
          : "bg-gray-300 w-4/5 mx-auto my-3 rounded-md p-5 shadow-2xl"
      }
    >
      <View className="flex flex-row mt-3 space-x-4">
        <Image
          source={data.item.sender.avatar_url}
          className="h-[50px] w-[50px] rounded-full"
        />
        <View className="w-4/5">
          <View className="flex flex-row">
            <Text className="font-semibold">{sender}</Text>
            <Text className="pl-3 text-slate-500">{time}</Text>
          </View>
          <Text className="my-2 pr-3">{data.item.msg_content}</Text>
        </View>
      </View>
    </View>
  );
};
export default MsgCard;
