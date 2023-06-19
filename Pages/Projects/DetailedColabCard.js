import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const DetailedColabCard = ({ route }) => {
  const { data } = route.params;
  console.log(route.params);

  return (
    <View className="flex flex-column border-[1px] border-black m-2 p-5 items-left">
      <Text className="font-bold">User Name: {data.item.username}</Text>
      <Text className="font-semibold">Project Name: {data.item.name}</Text>
      <Text className="font-semibold">
        Project Description: {data.item.description}
      </Text>
      <Text className="font-semibold">Project Theme: {data.item.theme}</Text>{' '}
      <Text className="font-semibold">
        Languages Wanted: {data.item.languagesWanted}
      </Text>
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
