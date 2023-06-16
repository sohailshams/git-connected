import { View, Text, FlatList } from "react-native";
import { getRepoList } from "../../utils/functions";
import { useContext, useEffect, useState } from "react";
import RepoListCard from "../../components/RepoListCard";
import { UserContext } from "../../contexts/User";

const AddRepo = ({ navigation }) => {
  const {user} = useContext(UserContext)
  const [repos, setRepos] = useState("");
  console.log(user)
  useEffect(() => {
    getRepoList(user.username).then((data) => setRepos(data));
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
