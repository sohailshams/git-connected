import { View, Image, Text } from "react-native";

const ProfileData = ({ user }) => {
  console.log("in ProfileData", user);
  return (
    <View className="mt-3">
      <View className="flex flex-row pl-3">
        <Image
          className="rounded-full"
          source={user.avatar_url}
          style={{ height: 50, width: 50 }}
        />
      </View>

      <Text className="text-red-500">{user.username}</Text>
      <Text>{user.bio}</Text>
      <Text>{user.location}</Text>
    </View>
  );
};
export default ProfileData;
