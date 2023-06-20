import { View, FlatList, Text } from "react-native";
import MiniColabCard from "./MiniColabCard";

const MiniColabList = ({ project, navigation }) => {
  const renderItem = ({ item }) => {
    return <MiniColabCard data={item} navigation={navigation} />;
  };
  return (
    <View className="ml-3 my-3">
      <Text className="text-xl font-semibold">
        Projects open for collaboration:
      </Text>
      <FlatList data={project} renderItem={renderItem} />
    </View>
  );
};
export default MiniColabList;
