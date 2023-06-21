import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/User';
import { getUserById } from '../../utils/functions';
import React from 'react';

const DetailedColabCard = ({ route }) => {
  const { data } = route.params;
  console.log(route.params);

  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState('');
  useEffect(() => {
    getUserById(user.id).then((userData) => setUserData(userData));
  }, []);

  return (
    <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
      <View className="min-[768px]:relative max-[425px]:flex-cols-1 flex min-[768px]:flex-row justify-between items-center m-3">
        <View className='max-w-[500px] text-left '>
          <View className=" bg-gray-300 mx-auto rounded-md shadow-lg mt-3 text-left ml-0">
            <Text className="text-3xl font-semibold m-3">{data.item.name}</Text>
          </View>
          <Text className="text-lg font-semibold mt-5 ml-3">Description</Text>
          <Text className="font-medium m-3">We and our partners store and/or access information on a device, such as cookies and process personal data, such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement, and audience insights, as well as to develop and improve products. With your permission we and our partners may use precise geolocation data and identification through device scanning. You may click to consent to our and our partners’ processing as described above. Alternatively you may access more detailed information and change your preferences before consenting or to refuse consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your preferences at any time by returning to this site or visit our privacy policy.</Text>
          <Text className="text-lg font-semibold mt-3 ml-3">Theme/Genre</Text>
          <Text className="font-medium m-3">{data.item.theme}</Text>
          <Text className="text-lg font-semibold mt-3 ml-3">
            Languages Wanted
          </Text>
          <Text className="font-medium m-3">{data.item.languagesWanted}</Text>
        </View>

        <View className="min-[768px]:absolute top-0 right-5 flex flex-cols-1 items-center">
          <Image
            className="rounded-full ml-3 mt-3 h-[80px] w-[80px]"
            source={user.avatar_url}
          />
          {/* </View>
      <View className="ml-3 my-5"> */}
          <Text className="text-2xl font-semibold m3">{data.item.username}</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between w-[125px]">
        <TouchableOpacity>
          <Text
            className="bg-lime-700 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1 m-3 text-white font-semibold"
            onPress={() => Linking.openURL(`${data.item.html_url}`)}
          >
            GitHub
          </Text>
        </TouchableOpacity>{' '}
        <TouchableOpacity>
          <Text
            className="bg-lime-700 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1 m-3 text-white font-semibold"
            onPress={() => Linking.openURL(`${data.item.html_url}`)}
          >
            Contact Dev
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailedColabCard;
