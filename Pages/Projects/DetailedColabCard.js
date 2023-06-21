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
    <View className="flex flex-column border-[1px] border-black m-2 p-5 items-left">
      <View className="flex flex-row justify-between items-center">
      <View>
      <Text className="font-semibold">Project Name: {data.item.name}</Text>
      <Text className="font-semibold">
        Project Description: {data.item.description}
      </Text>
      <Text className="font-semibold">Project Theme: {data.item.theme}</Text>{' '}
      <Text className="font-semibold">
        Languages Wanted: {data.item.languagesWanted}
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
            className="bg-lime-700 my-1 py-1 px-2 text-white text-center w-[80px] rounded-full"
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
