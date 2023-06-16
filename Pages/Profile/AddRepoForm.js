import { View, Text } from "react-native";
import FormButtons from "../../components/FormButtons";
import { useState } from "react";
import PortfolioForm from "../../components/PortfolioForm";
import ProjectForm from "../../components/ProjectForm";

const AddRepoForm = ({ navigation, route }) => {
  const { data } = route.params;
  const [state, setState] = useState(1);
  return (
    <View>
      <Text>repo form here</Text>
      <FormButtons
        title1="Add to profile showcase"
        title2="Add to collaboration list"
        state={state}
        setState={setState}
      />
      {state === 1 ? (
        <PortfolioForm data={data} navigation={navigation} />
      ) : <ProjectForm data={data} navigation={navigation}/>}
    </View>
  );
};
export default AddRepoForm;
