import { Text, View } from "react-native"

const DirectMessage = ({route}) => {
    const { data } = route.params
    console.log(data) 
    return (
        <View>
            <Text>Dm's</Text>
        </View>
    )
}
export default DirectMessage