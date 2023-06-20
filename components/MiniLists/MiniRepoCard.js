import { Text, View, Button, Linking } from "react-native";
import { TouchableOpacity } from "react-native";

const MiniRepoCard = ({ data, navigation }) => {
  console.log(data, "In mini repo card");
  function handlePress() {
    navigation.navigate("portfolio card", { data });
  }
  return (
    <View className="flex flex-column border-[1px] border-black my-3 p-5 w-5/6">
      <Text className="font-semibold py-2">Project Name: {data.name}</Text>
      <Text className="font-semibold py-2">
        Project Description: {data.description}
      </Text>
      <TouchableOpacity>
        <Text
          className="bg-zinc-500 my-1 py-1 px-2 text-white text-center w-[80px] rounded-full"
          onPress={() => Linking.openURL(`${data.html_url}`)}
        >
          GitHub
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default MiniRepoCard;
