import { View, Text } from "react-native";
import FormButtons from "../../components/ProfilePage/FormButtons";
import { useState } from "react";
import PortfolioForm from "../../components/ProfileForms/PortfolioForm";
import ProjectForm from "../../components/ProfileForms/ProjectForm";

const AddRepoForm = ({ navigation, route }) => {
  const { data, count, setCount } = route.params;
  console.log(count)
  const [state, setState] = useState(1);
  return (
    <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
      <View className=" bg-gray-300 mx-auto rounded-md shadow-lg mt-3 text-left ml-3">
        <Text className="text-3xl font-semibold m-3">Upload a Repo</Text>
      </View>
      <FormButtons
        title1="Add to profile showcase"
        title2="Add to collaboration list"
        state={state}
        setState={setState}
      />
      {state === 1 ? (
        <PortfolioForm data={data} navigation={navigation} count={count} setCount={setCount} />
      ) : (
        <ProjectForm data={data} navigation={navigation} count={count} setCount={setCount} />
      )}
    </View>
  );
};
export default AddRepoForm;
