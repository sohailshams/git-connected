import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { editProfile } from '../../utils/functions';
import { TouchableOpacity } from 'react-native-web';

const EditProfile = ({ navigation, route }) => {
  const { data, count, setCount } = route.params;
  const [name, setName] = useState(data.name);
  const [bio, setBio] = useState(data.bio);
  const [email, setEmail] = useState(data.email);
  const [location, setLocation] = useState(data.location);

  const handlePress = () => {
    navigation.navigate('My Profile');
    editProfile(data.username, bio, email, location, name).then(
      setCount(count + 1)
    );
  };
  return (
    <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
      <View className=" bg-gray-300 mx-auto rounded-md shadow-lg mt-3 text-left ml-3">
        <Text className="text-3xl font-semibold m-3">Edit Profile</Text>
      </View>
      <View className="grid grid-cols-3 gap 4">
        <Text className="text-lg font-semibold mt-5 ml-3">Name</Text>
        <TextInput
        maxLength={100}
        className="p-1 m-3 min-h-[40px] border-2 border-slate-400 rounded col-start-2 col-span-2"
          name="name"
          onChangeText={setName}
          value={name}
        />
        <Text className="text-lg font-semibold mt-5 ml-3">Bio</Text>
        <TextInput multiline maxLength={500}
          className="p-1 m-3 min-h-[100px] border-2 border-slate-400 rounded col-start-2 col-span-2"
          name="bio"
          onChangeText={setBio}
          value={bio}
        />
        <Text className="text-lg font-semibold mt-5 ml-3">Email</Text>
        <TextInput
        maxLength={100}
        className="p-1 m-3 min-h-[40px] border-2 border-slate-400 rounded col-start-2 col-span-2"
          name="email"
          onChangeText={setEmail}
          value={email}
        />
        <Text className="text-lg font-semibold mt-5 ml-3">Location</Text>
        <TextInput
        maxLength={100}
        className="p-1 m-3 min-h-[40px] border-2 border-slate-400 rounded col-start-2 col-span-2"
          name="location"
          onChangeText={setLocation}
          value={location}
        />
        <View>
          <TouchableOpacity
            className="m-3 bg-zinc-500 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1"
            title="confirm changes"
            onPress={handlePress}
          >
            <Text className="text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default EditProfile;
