import { useContext, useState } from "react";
import { UserContext} from "../../contexts/User";
import { Text, View, Button, Image } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import FormButtons from "../../components/FormButtons";
import RepoCard from "../../components/RepoCard";
import ProfileData from "../../components/ProfileData";



const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const { user } = useContext(UserContext);
  const [state, setState] = useState(1)
  return (
    <View>
      <ProfileData user={user}/>
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
      {state === 1 ? <RepoCard navigation={navigation}/>:null }
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};
export default Profile;
