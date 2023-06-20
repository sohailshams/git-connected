import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getDevList } from "../../utils/functions";
import DevCard from "./DevCard";

const DevList = ({navigation}) => {
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
    <ScrollView>
      <View>
        <FlatList data={devArray} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

export default DevList;
