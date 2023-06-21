import { View, Text, FlatList, ScrollView } from "react-native";
import { getRepoList } from "../../utils/functions";
import { useContext, useEffect, useState } from "react";
import RepoListCard from "../../components/ProfileForms/RepoListCard";
import { UserContext } from "../../contexts/User";

const AddRepo = ({ navigation, route }) => {
  const { user } = useContext(UserContext);
  const { count, setCount } = route.params;
  const [repos, setRepos] = useState("");
  useEffect(() => {
    getRepoList(user.username).then((data) => setRepos(data));
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View className="mb-5">
        <RepoListCard
          data={item}
          navigation={navigation}
          count={count}
          setCount={setCount}
        />
      </View>
    );
  };
  return (
    <ScrollView>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
        <Text className="text-2xl font-semibold ml-3 mt-3">Select a Repo</Text>

        <FlatList
          data={repos}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};
export default AddRepo;
