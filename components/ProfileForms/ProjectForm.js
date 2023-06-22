import { TextInput, Text, TouchableOpacity, View, Button } from "react-native";
import { addPortfolioRepos, addProjectRepos } from "../../utils/functions";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";

const ProjectForm = ({ data, navigation, count, setCount }) => {
  const { user } = useContext(UserContext);
  const [description, onChangeDescription] = useState(data.description);
  const [theme, setTheme] = useState("");
  const [lang, setLang] = useState("");
  const [state, setState] = useState(false);
  const handleSubmit = (event) => {
    if (
      description !== null &&
      theme !== "" &&
      lang !== "" &&
      description !== ""
    ) {
      navigation.navigate("My Profile");
      addProjectRepos(
        data.owner.login,
        data.html_url,
        data.name,
        description,
        theme,
        lang,
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
        onChangeText={onChangeDescription}
        value={description}
      />
      <Text className="text-lg font-semibold mt-5 ml-3">Theme</Text>
      <TextInput
        maxLength={100}
        className="p-1 m-3 min-h-[40px] border-2 border-slate-400 rounded col-start-2 col-span-2"
        onChangeText={setTheme}
        value={theme}
      />
      <Text className="text-lg font-semibold mt-5 ml-3">Languages Needed</Text>
      <TextInput
        maxLength={100}
        className="p-1 m-3 min-h-[40px] border-2 border-slate-400 rounded col-start-2 col-span-2"
        onChangeText={setLang}
        value={lang}
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
export default ProjectForm;
