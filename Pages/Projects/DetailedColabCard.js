import { View, Text, TouchableOpacity, Linking, Image } from "react-native";
import { useContext, useEffect, useState } from "react";

import { getUserById } from "../../utils/functions";

import React from "react";
import { UserContext } from "../../contexts/User";
import { addChat } from "../../utils/functions";

const DetailedColabCard = ({ route, navigation }) => {
  const { data, userData } = route.params;
  const {user} = useContext(UserContext)
  
  function handlePress() {
    addChat(null, user.id, data.item.userId).then((id) =>
      navigation.navigate("Messages", {
        screen: "Direct message",
        initial: false,
        params: { id },
      })
    );
  }

  return (
    <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
      <View className="min-[768px]:relative max-[425px]:flex-cols-1 flex min-[768px]:flex-row justify-between items-center m-3">
        <View className="max-w-[500px] text-left ">
          <View className=" bg-gray-300 mx-auto rounded-md shadow-lg mt-3 text-left ml-0">
            <Text className="text-3xl font-semibold m-3">{data.item.name}</Text>
          </View>
          <Text className="text-lg font-semibold mt-5 ml-3">Description</Text>
          <Text className="font-medium m-3">{data.item.description}</Text>
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
            source={userData.avatar_url}
          />
          <Text className="text-2xl font-semibold m3">
            {data.item.username}
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-between w-[125px]">
        <TouchableOpacity
          onPress={() => Linking.openURL(`${data.item.html_url}`)}
        >
          <Text className="bg-lime-400 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1 m-3 text-white font-semibold">
            GitHub
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="bg-lime-400 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1 m-3 text-white font-semibold" onPress={handlePress}>
            Collaborate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailedColabCard;
