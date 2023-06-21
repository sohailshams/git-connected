import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";

const MiniColabCard = ({ data, navigation }) => {
  function handlePress() {
    navigation.navigate("Projects", { screen: "Project list", data });
  }
  return (
    <View className="flex flex-column border-[1px] border-black my-3 p-5 w-5/6">
      <TouchableOpacity onPress={handlePress}>
        <Text className="font-semibold py-2">Poject Name: {data.name}</Text>
        <Text className="font-semibold py-2">
          Project Description: {data.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default MiniColabCard;
