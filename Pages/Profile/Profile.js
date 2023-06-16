import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { Text, View, Button, Image } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import FormButtons from "../../components/ProfilePage/FormButtons";
import ProfileData from "../../components/ProfilePage/ProfileData";
import { getPortfolioById, getProjectById } from "../../utils/functions";
import MiniRepoList from "../../components/MiniLists/MiniRepoList";
import MiniColabList from "../../components/MiniLists/MiniColabList";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const { user } = useContext(UserContext);
  const [portfolio, setPortfolio] = useState([])
  const [colab, setColab] = useState([])
  const [state, setState] = useState(1);
  useEffect(() => { getPortfolioById(user.id).then(data => setPortfolio(data)) }, [state])
  useEffect(() => {
    getProjectById(user.id).then((data) => setColab(data));
  }, []);
  return (
    <View>
      <ProfileData user={user} />
      <Button
        title="add repo"
        onPress={() => navigation.navigate("add Repo")}
      />
      <FormButtons
        title1="Showcase list"
        title2="collaboration list"
        state={state}
        setState={setState}
      />
      {state === 1 ? <MiniRepoList portfolio={portfolio} navigation={navigation}/> : <MiniColabList project={colab} navigation={navigation}/>}
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};
export default Profile;
