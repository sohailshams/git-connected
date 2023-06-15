import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Text, View, Button } from "react-native"
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const Profile = () => {
    const handleSignOut = () => {
        signOut(auth)
    }
    const { user } = useContext(UserContext)
    return (
        <View>
            <Text>{user.username}</Text>
            <Button
                title="Sign out"
                onPress={ handleSignOut }
            />
        </View>
    )
}
export default Profile