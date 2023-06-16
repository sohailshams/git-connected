import { View, Text } from "react-native";
import React from "react";
import { getDevList } from "../../utils/functions";

const DevList = () => {
  getDevList();
  return (
    <View>
      <Text>DevList</Text>
    </View>
  );
};

export default DevList;
