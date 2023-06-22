import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { getUserById } from "../../utils/functions";

const MiniColabCard = ({ data, navigation }) => {
  const [user, setUser] = useState('')
  useEffect(() => { getUserById(data.userId).then(data => setUser(data)) }, [])
  function handlePress() {
    navigation.navigate("Projects", {
      screen: "Project Detail", initial:false,
      params: { data: { item: data }, userData: user },
    });
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
