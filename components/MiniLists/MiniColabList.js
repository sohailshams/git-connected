import { View, FlatList, Text } from "react-native";
import MiniColabCard from "./MiniColabCard";

const MiniColabList = ({ project, navigation }) => {
  const renderItem = ({ item }) => {
    return <MiniColabCard data={item} navigation={navigation} />;
  };
  return (
    <View>
      <Text>projects open for collaboration:</Text>
      <FlatList data={project} renderItem={renderItem} />
    </View>
  );
};
export default MiniColabList;
