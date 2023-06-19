import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";

const MiniColabCard = ({ data, navigation }) => {
  function handlePress() {
    navigation.navigate("Projects", {screen:'Project list', data });
  }
    return (
      <View>
            <TouchableOpacity onPress={handlePress} style={{ borderColor: 'black', borderWidth: 2 }}>
                <Text>{data.name}</Text>
                <Text>{data.description}</Text>
      
        </TouchableOpacity>   
      </View>
   
  );
};
export default MiniColabCard;
