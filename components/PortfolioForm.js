import { TextInput, Text, View, Button } from "react-native";
import { addPortfolioRepos } from "../utils/functions";
import { useState } from "react";

const PortfolioForm = ({ data, navigation }) => {
  const [text, onChangeText] = useState(data.description);
  const handleSubmit = (event) => {
    addPortfolioRepos(data.owner.login, data.html_url, data.name, text);
    navigation.navigate("own profile");
  };
  console.log(text);
  return (
    <View onSubmit>
      <Text>description</Text>
      <TextInput
        placeholder="add description"
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="add repo" onPress={handleSubmit} />
    </View>
  );
};
export default PortfolioForm;
