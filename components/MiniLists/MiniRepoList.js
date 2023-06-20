import { View, FlatList, Text } from "react-native";
import MiniRepoCard from "./MiniRepoCard";

const MiniRepoList = ({ portfolio, navigation }) => {
  const renderItem = ({ item }) => {
    return <MiniRepoCard data={item} navigation={navigation} />;
  };
  return (
    <View className="ml-3 my-3">
      <Text className="text-xl font-semibold">Showcase Repos</Text>
      <FlatList data={portfolio} renderItem={renderItem} />
    </View>
  );
};
export default MiniRepoList;
