import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Text, View, Button, Image } from "react-native"
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const Profile = ({navigation}) => {
    const handleSignOut = () => {
        signOut(auth)
    }
    const { user } = useContext(UserContext)
    return (
      <View>
        {console.log(user.avatar_url)}
        <Text>{user.username}</Text>
        <Image source={user.avatar_url} style={{ height: 200, width: 200 }} />
        <Text>{user.bio}</Text>
        <Text>{user.location}</Text>
        <Button
          title="add repo"
          onPress={() => navigation.navigate("add Repo")}
        />
        <Button title="Sign out" onPress={handleSignOut} />
      </View>
    );
}
export default Profile