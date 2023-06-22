import { View, Text, Image, Linking, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { useContext, useEffect, useState } from "react";
import { getUserById } from "../../utils/functions";

const ColabCard = ({ data, navigation }) => {
  function handlePress() {
    navigation.navigate("Detailed Colab Card", { data, userData});
  }

  const [userData, setUserData] = useState("");

  useEffect(() => {
    getUserById(data.item.userId).then((userData) => setUserData(userData));
  }, []);

  return (
    // <ScrollView>
    <TouchableOpacity onPress={handlePress}>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
        <View className="pl-3">
          <View className=" bg-gray-300 mx-auto rounded-md shadow-lg mt-3 text-left ml-0">
            <Text className="text-3xl font-semibold m-3">{data.item.name}</Text>
          </View>
          <Text className="text-lg font-semibold mt-3 ml-3">Theme/Genre</Text>
          <Text className="font-medium m-3">{data.item.theme}</Text>
          <Text className="text-lg font-semibold mt-3 ml-3">
            Languages Wanted
          </Text>
          <Text className="font-medium m-3">{data.item.languagesWanted}</Text>
        </View>
        <View className="min-[768px]:absolute top-0 right-5 flex flex-cols-1 items-center">
          <Image
            className="rounded-full m-3 h-[120px] w-[120px]"
            source={userData.avatar_url}
          />
        </View>
      </View>
    </TouchableOpacity>
    // </ScrollView>
  );
};
export default ColabCard;
