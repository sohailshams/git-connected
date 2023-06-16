import { View, Text, FlatList } from "react-native";
import { getRepoList } from "../../utils/functions";
import { useEffect, useState } from "react";
import RepoListCard from "../../components/RepoListCard";

const AddRepo = ({ navigation }) => {
  const [repos, setRepos] = useState("");
  useEffect(() => {
    getRepoList("masonward99").then((data) => setRepos(data));
  }, []);

  const renderItem = ({ item }) => {
    return <RepoListCard data={item} navigation={navigation} />;
  };
  return (
    <View>
      <Text>Repo list will go here</Text>
      <FlatList data={repos} renderItem={renderItem} />
    </View>
  );
};
export default AddRepo;
