import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Text, View } from "react-native"

const Account = () => {
    const { user } = useContext(UserContext)
    return (
        <View>
            <Text>{user.username}</Text>
        </View>
    )
}
export default Account