import { View, Text } from "react-native"

const AddRepoForm = ({ navigation, route }) => {
    const { name } = route.params()
    console.log(name)
    return (
        <View>
            <Text>repo form here</Text>
        </View>
)
}
export default AddRepoForm