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
      <View className="flex flex-row justify-between items-center m-3">
        <View>
          <Text className="text-4xl font-semibold m-3">{data.item.name}</Text>
          <Text className="text-lg font-semibold mt-3 ml-3">
            Description
          </Text>
          <Text className="font-medium m-3">
            {data.item.description}
          </Text>
          <Text className="text-lg font-semibold mt-3 ml-3">
            Theme/Genre
          </Text>
          <Text className="font-medium m-3">
            {data.item.theme}
          </Text>
          <Text className="text-lg font-semibold mt-3 ml-3">
            Languages Wanted
          </Text>
          <Text className="font-medium m-3">
            {data.item.languagesWanted}
          </Text>
        </View>
        <View>
          <Image
            className="rounded-full ml-3 mt-3 h-[80px] w-[80px]"
            source={user.avatar_url}
          />
          {/* </View>
      <View className="ml-3 my-5"> */}
          <Text className="text-2xl font-semibold ">{data.item.username}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            className="bg-lime-700 my-1 py-1 px-2 text-white text-center w-[80px] rounded-full m-3"
            onPress={() => Linking.openURL(`${data.item.html_url}`)}
          >
            GitHub
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailedColabCard;
