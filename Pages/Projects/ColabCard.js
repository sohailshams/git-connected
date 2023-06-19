import { View, Text, Image, Linking, ScrollView } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-web';

const ColabCard = ({ data, navigation }) => {
  function handlePress() {
    navigation.navigate('Detailed Colab Card', { data });
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="flex-auto w-64 border-[1px] border-black m-2 p-5 items-center bg-cyan-500 drop-shadow-lg shadow-cyan-500/50 round-full">
        <View className="pl-3">
          <Text className="font-bold">User Name: {data.item.username}</Text>
          <Text className="font-semibold">Project Name: {data.item.name}</Text>
          <Text className="font-semibold">
            Project Description: {data.item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ColabCard;
