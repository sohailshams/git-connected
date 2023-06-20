import { View, FlatList, Text } from "react-native";
import MiniRepoCard from "./MiniRepoCard";

const MiniRepoList = ({portfolio, navigation}) => {
    const renderItem = ({ item }) => {
    return <MiniRepoCard data={item} navigation={navigation} />;
  };
    return (        
        <View>
            <Text >Showcase repos</Text>
            <FlatList data={ portfolio} renderItem={renderItem} />
        </View>
)
}
 export default MiniRepoList
