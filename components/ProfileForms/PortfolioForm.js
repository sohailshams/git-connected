import { TextInput, Text, View, TouchableOpacity, Button } from "react-native";
import { addPortfolioRepos } from "../../utils/functions";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";

const PortfolioForm = ({ data, navigation, count, setCount }) => {
  if (data.description === null) {
    data.description = "";
  }
  const { user } = useContext(UserContext);
  const [text, onChangeText] = useState(data.description);
  const [state, setState] = useState(false);
  const handleSubmit = (event) => {
    if (text !== null && text !== "") {
      navigation.navigate("My Profile");
      addPortfolioRepos(
        data.owner.login,
        data.html_url,
        data.name,
        text,
        user.id
      ).then(setCount(count + 1));
    } else {
      setState(true);
    }
  };
  return (
    <View onSubmit>
      <Text className="text-lg font-semibold mt-5 ml-3">Description</Text>
      <TextInput
        multiline
        maxLength={500}
        className="p-1 m-3 min-h-[100px] border-2 border-slate-400 rounded col-start-2 col-span-2"
        onChangeText={onChangeText}
        value={text}
      />
      {state ? (
        <Text className="text-red-500 ml-3">Fill in all fields</Text>
      ) : null}
      <View>
        <TouchableOpacity
          className="m-3 bg-zinc-500 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-2"
          title="add repo"
          onPress={handleSubmit}
        >
          <Text className="text-white">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PortfolioForm;
