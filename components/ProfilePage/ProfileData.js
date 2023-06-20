import { View, Image, Text } from "react-native"
const ProfileData = ({ user }) => {
    return(
    <View>
      <Text className='text-red-500'>{user.username}</Text>
      <Image source={user.avatar_url} style={{ height: 50, width: 50 }} />
      <Text>{user.bio}</Text>
      <Text>{user.location}</Text>
    </View>
    )
}
export default ProfileData