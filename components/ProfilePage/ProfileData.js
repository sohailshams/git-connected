import { View, Image, Text } from 'react-native';

const ProfileData = ({ user }) => {
  console.log('in ProfileData', user)
  return (
    <View className="mt-3">
      <View className="flex flex-row pl-3">
        <Image
          className="rounded-full"
          source={user.avatar_url}
          style={{ height: 50, width: 50 }}
        />
        {/* <View className="grow"> */}
          <View className='flex flex-wrap'>
            <Text className='w-[200px]'>JavaScript</Text>
            <Text className='w-[200px]'>Python</Text>
            <Text className='w-[200px]'>HTML</Text>
            <Text className='w-[200px]'>CSS</Text>
            <Text className='w-[200px]'>Python</Text>
            <Text className='w-[200px]'>HTML</Text>
            <Text className='w-[200px]'>CSS</Text>
            <Text className='w-[200px]'>JavaScript</Text>
            <Text className='w-[200px]'>Python</Text>
            <Text className='w-[200px]'>HTML</Text>
            <Text className='w-[200px]'>CSS</Text>
            <Text className='w-[200px]'>Python</Text>
            <Text className='w-[200px]'>HTML</Text>
            <Text className='w-[200px]'>CSS</Text>
          </View>
        {/* </View> */}
      </View>

      <Text className="text-red-500">{user.username}</Text>
      <Text>{user.bio}</Text>
      <Text>{user.location}</Text>
    </View>
  );
};
export default ProfileData;
