import {
  View,
  Text,
  Image,
  Linking,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getDevLanguages, makeUniqueArray } from "../../utils/functions";
import DevProfile from "../DevProfile/DevProfile";
import { UserContext } from "../../contexts/User";

const DevCard = ({ data, navigation }) => {
  const [lang, setLang] = useState([]);
  const {user} = useContext(UserContext)

  useEffect(() => {
    const getLangArray = async () => {
      const fetchedLangArray = await getDevLanguages(data.item.username);
      setLang(fetchedLangArray);
    };
    getLangArray();
  }, []);

  function handlePress() {
    if (user.username !== data.item.username) {
      navigation.navigate("Dev Profile", { data })}
  else {
    navigation.navigate('Profile')
    }
  }

  return (
    <TouchableOpacity
    className="my-3"
      onPress={handlePress}
    >
      <View className="max-[320px]:justify-center bg-gray-100 border-[1px] border-black  flex flex-row max-[320px]:w-[280px] shadow-2xl m-2 p-3 items-center mx-auto min-[375px]-w-[315px] rounded-tl-[5%] rounded-br-[5%] rounded-tr-[20%] rounded-bl-[20%]">
        <View className="flex min-[375px]:flex-row max-[320px]:flex-cols-1 items-center">
          <Image
            className="h-[80px] w-[80px] max-[320px]:h-[50px] max-[320px]:w-[50px] rounded-full"
            source={data.item.avatar_url}
          />

          <View className="pl-3">
            <Text className="font-bold">{data.item.username}</Text>
            <Text className="font-semibold">{data.item.location}</Text>
            <Text
              className="bg-zinc-500 my-1 py-1 px-2 rounded-full text-white text-center w-[80px]"
              onPress={() => Linking.openURL(`${data.item.html_url}`)}
            >
              GitHub
            </Text>
          </View>
        </View>
        <View className="flex flex-row flex-wrap w-[150px]">
          <FlatList
            data={makeUniqueArray(lang[data.item.username])}
            renderItem={({ item }) => (
              <Text className="py-1 px-2 ml-3 rounded-full my-1 text-center w-[90px] text-slate-700 bg-slate-300 shadow-2xl">
                {item}
              </Text>
            )}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DevCard;
