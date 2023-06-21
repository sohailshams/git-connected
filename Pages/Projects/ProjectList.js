import { collection, getDocs, query } from "firebase/firestore";
import { View, Text, FlatList, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import ColabCard from "./ColabCard";

const ProjectList = ({ navigation }) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, "repos", "type", "collaboration"));
      const projArray = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => projArray.push(doc.data()));
      setProjectList(projArray);
    };

    fetchProjects();
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
