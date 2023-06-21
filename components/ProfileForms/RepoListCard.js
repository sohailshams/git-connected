import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";

const RepoListCard = ({ data, navigation, count, setCount }) => {
  function handlePress() {
    navigation.navigate("Repo Form", { data, count, setCount });
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text className="ml-3 bg-zinc-500 my-1 py-3 px-2 rounded-full text-white text-center w-[200px]">
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};
export default RepoListCard;
