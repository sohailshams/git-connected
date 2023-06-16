import { TextInput, Text, View, Button } from "react-native";
import { addPortfolioRepos, addProjectRepos } from "../utils/functions";
import { useState } from "react";

const ProjectForm = ({ data, navigation }) => {
    const [description, onChangeDescription] = useState(data.description);
    const[theme, setTheme] = useState('')
    const [lang, setLang] = useState('')
    const handleSubmit = (event) => {
        if (description !== '' && theme !== '' && lang !== '') {
            addProjectRepos(data.owner.login, data.html_url, data.name, description, theme, lang);
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
           <TextInput placeholder="add Theme" onChangeText={setTheme} value={theme} />
          <Text>Dev languages needed:</Text>
          <TextInput placeholder="add a language" onChangeText={setLang} value={lang} />
      <Button title="add repo" onPress={handleSubmit} />
    </View>
  );
};
export default ProjectForm;
