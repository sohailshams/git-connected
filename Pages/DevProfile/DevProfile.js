import { UserContext } from "../../contexts/User";
import { useState, useEffect, useContext } from "react";
import { getUserById } from "../../utils/functions";
import { View, Text, Button } from "react-native";
import ProfileData from "../../components/ProfilePage/ProfileData";
import FormButtons from "../../components/ProfilePage/FormButtons";
import { getPortfolioById, getProjectById } from "../../utils/functions";
import MiniColabList from "../../components/MiniLists/MiniColabList";
import MiniRepoList from "../../components/MiniLists/MiniRepoList";

const DevProfile = ({ navigation, route }) => {
  const { data } = route.params;
  const [colab, setColab] = useState([]);
  const [state, setState] = useState(1);
  const [portfolio, setPortfolio] = useState([])
  useEffect(() => {
    getPortfolioById(data.item.id).then((data) => setPortfolio(data));
  }, []);
  useEffect(() => {
    getProjectById(data.item.id).then((data) => setColab(data));
  }, []);
  function handlePress() {
    navigation.navigate('Messages', { screen: 'Direct message', params: { data}})
}
  return (
    <View>
      <ProfileData user={data.item} />
      <Button title='Message' onPress={handlePress}/>
      <FormButtons
        state={state}
        setState={setState}
        title1="portfolio"
        title2="collaboration"
      />
      {state === 1 ? (
        <MiniRepoList portfolio={portfolio} navigation={navigation} />
      ) : (
        <MiniColabList project={colab} navigation={navigation} />
      )}
    </View>
  );
};

export default DevProfile;
