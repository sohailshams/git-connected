import { TextInput, Text, View, Button } from "react-native";
import { addPortfolioRepos } from "../../utils/functions";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";

const PortfolioForm = ({ data, navigation, count, setCount }) => {
  if (data.description === null) {
    data.description = ''
  }
  const { user } = useContext(UserContext)
  const [text, onChangeText] = useState(data.description);
  const [state, setState] = useState(false)
  const handleSubmit = (event) => {
    if (text !== null && text !== '') {
      navigation.navigate("own profile")
      addPortfolioRepos(data.owner.login, data.html_url, data.name, text, user.id)
      .then(setCount(count +1))
    } else {
      setState(true)
    }
  };
  return (
    <View onSubmit>
      <Text>description</Text>
      <TextInput
        placeholder="add description"
        onChangeText={onChangeText}
        value={text}
      />
      {state? <Text>Fill in all fields</Text>: null}
      <Button title="add repo" onPress={handleSubmit} />
    </View>
  );
};
export default PortfolioForm;
