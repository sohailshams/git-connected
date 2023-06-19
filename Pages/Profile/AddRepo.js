import { View, Text, FlatList } from "react-native";
import { getRepoList } from "../../utils/functions";
import { useContext, useEffect, useState } from "react";
import RepoListCard from "../../components/ProfileForms/RepoListCard";
import { UserContext } from "../../contexts/User";

const AddRepo = ({ navigation, count, setCount, route }) => {
  const { user } = useContext(UserContext)
  const {count, setCount} = route.params
  const [repos, setRepos] = useState("");
  useEffect(() => {
    getRepoList(user.username).then((data) => setRepos(data));
  }, []);

  const renderItem = ({ item, count, setCount }) => {
    return <RepoListCard data={item} navigation={navigation} count={count} setCount={setCount} />;
  };
  return (
    <View>
      <Text>Repo list will go here</Text>
      <FlatList
        data={repos}
        renderItem={renderItem}
        count={count}
        setCount={setCount}
      />
    </View>
  );
};
export default AddRepo;
