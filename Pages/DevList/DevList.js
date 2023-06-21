import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getDevList } from "../../utils/functions";
import DevCard from "./DevCard";

const DevList = ({ navigation }) => {
  const [devArray, setDevArray] = useState([]);
  useEffect(() => {
    const getDevArray = async () => {
      const fetchedDevArray = await getDevList();
      setDevArray(fetchedDevArray);
    };
    getDevArray();
  }, []);

  const renderItem = (item) => {
    return <DevCard data={item} navigation={navigation} />;
  };
  return (
    <ScrollView className="w-5/6 max-[768px]:w-[95%] bg-white mx-auto rounded-md shadow-lg my-3">
      <View className="mt-3 w-full">
        <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
          data={devArray}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default DevList;
