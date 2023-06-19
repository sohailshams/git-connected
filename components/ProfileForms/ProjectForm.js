import { TextInput, Text, View, Button } from "react-native";
import { addPortfolioRepos, addProjectRepos } from "../../utils/functions";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";

const ProjectForm = ({ data, navigation }) => {
  const{user} = useContext(UserContext)
  const [description, onChangeDescription] = useState(data.description);
  const [theme, setTheme] = useState("");
  const [lang, setLang] = useState("");
  const handleSubmit = (event) => {
    if (description !== null && theme !== "" && lang !== "" && description !== '') {
      addProjectRepos(
        data.owner.login,
        data.html_url,
        data.name,
        description,
        theme,
        lang,
        user.id
      );
      navigation.navigate("own profile");
    }
  };
  return (
    <View onSubmit>
      <Text>description:</Text>
      <TextInput
        placeholder="something else"
        onChangeText={onChangeDescription}
        value={description}
      />
      <Text>Theme:</Text>
      <TextInput
        placeholder="add Theme"
        onChangeText={setTheme}
        value={theme}
      />
      <Text>Dev languages needed:</Text>
      <TextInput
        placeholder="add a language"
        onChangeText={setLang}
        value={lang}
      />
      <Button title="add repo" onPress={handleSubmit} />
    </View>
  );
};
export default ProjectForm;
