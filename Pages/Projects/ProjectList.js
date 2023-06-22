import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { View, Text, FlatList, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import ColabCard from "./ColabCard";

const ProjectList = ({ navigation }) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    
      const q = query(collection(db, "repos", "type", "collaboration"));
      onSnapshot(q, (querySnapshot) => {
      const projArray = [];
      querySnapshot.forEach((doc) => projArray.push(doc.data()));
      setProjectList(projArray);
    })
    

  }, []);

  const renderProjectItem = (item) => {
    return <ColabCard data={item} navigation={navigation} />;
  };

  return (
    <ScrollView className="my-3">
      <FlatList data={projectList} renderItem={renderProjectItem} />
    </ScrollView>
  );
};

export default ProjectList;
