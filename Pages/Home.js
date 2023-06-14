import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Text, View } from "react-native"

const Home = () => {
    const { user } = useContext(UserContext)
    return (
        <View>
            <Text>{user.username}</Text>
        </View>
    )
}
export default Home