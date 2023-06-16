import { Button, View } from "react-native";

const RepoCard = ({data, navigation}) => {
    function handlePress() {
      navigation.navigate("Projects", { screen:'Project list' });
    }
    return (
        <View>
            <Button title="placeholder for list item" onPress={handlePress}/>
        </View>
    )
}
export default RepoCard