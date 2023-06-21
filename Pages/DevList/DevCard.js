import {
  View,
  Text,
  Image,
  Linking,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getDevLanguages, makeUniqueArray } from "../../utils/functions";
import DevProfile from "../DevProfile/DevProfile";

const DevCard = ({ data, navigation }) => {
  const [lang, setLang] = useState([]);

  useEffect(() => {
    const getLangArray = async () => {
      const fetchedLangArray = await getDevLanguages(data.item.username);
      setLang(fetchedLangArray);
    };
    getLangArray();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Dev Profile", { data })}
    >
      <View className="flex flex-row border-[1px] border-black m-2 p-5 items-center mx-auto w-[315px]">
        <Image
          className="h-[80px] w-[80px] rounded-full"
          source={data.item.avatar_url}
        />

        <View className="pl-3">
          <Text className="font-bold">{data.item.username}</Text>
          <Text className="font-semibold">{data.item.location}</Text>
          <Text
            className="bg-black my-1 py-1 px-2 text-white text-center w-[80px]"
            onPress={() => Linking.openURL(`${data.item.html_url}`)}
          >
            GitHub
          </Text>
        </View>
        <View className="flex flex-row flex-wrap w-[150px]">
          <FlatList
            data={makeUniqueArray(lang[data.item.username])}
            renderItem={({ item }) => (
              <Text className="py-1 px-2 ml-3 border-[1px] border-black my-1">
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
