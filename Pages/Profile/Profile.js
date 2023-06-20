import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/User';
import { Text, View, Button, Image, FlatList } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import FormButtons from '../../components/ProfilePage/FormButtons';
import ProfileData from '../../components/ProfilePage/ProfileData';
import {
  getDevLanguages,
  getPortfolioById,
  getProjectById,
  getUserById,
  makeUniqueArray,
} from '../../utils/functions';
import MiniRepoList from '../../components/MiniLists/MiniRepoList';
import MiniColabList from '../../components/MiniLists/MiniColabList';

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);
  const [portfolio, setPortfolio] = useState([]);
  const [data, setData] = useState('');
  const [colab, setColab] = useState([]);
  const [state, setState] = useState(1);

  useEffect(() => {
    getUserById(user.id).then((data) => setData(data));
  }, [count]);
  useEffect(() => {
    getPortfolioById(user.id).then((data) => setPortfolio(data));
  }, [count]);
  useEffect(() => {
    getProjectById(user.id).then((data) => setColab(data));
  }, [count]);

  const [lang, setLang] = useState([]);
  console.log(lang);
  useEffect(() => {
    const getLangArray = async () => {
      const fetchedLangArray = await getDevLanguages(user.username);
      console.log('user:', user, 'fetchedLangArray:', fetchedLangArray)
      setLang(fetchedLangArray);
    };
    getLangArray();
  }, []);

  return (
    <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
      <View className="flex flex-row pl-3">
        <Image
          className="rounded-full"
          source={user.avatar_url}
          style={{ height: 50, width: 50 }}
        />
        {/* <ProfileData user={data} /> */}
        <View className="h-20 w-10 flex flex-wrap space-evenly">
          <FlatList
            data={makeUniqueArray(lang[data.username])}
            renderItem={({ item }) => (
              <Text className="py-1 px-2 ml-3 border-[1px] border-black my-1">
                {item}
              </Text>
            )}
          />
        </View>
      </View>
      <Button
        title="add repo"
        onPress={() => navigation.navigate('add Repo', { count, setCount })}
      />
      <FormButtons
        title1="Showcase list"
        title2="collaboration list"
        state={state}
        setState={setState}
      />
      {state === 1 ? (
        <MiniRepoList portfolio={portfolio} navigation={navigation} />
      ) : (
        <MiniColabList project={colab} navigation={navigation} />
      )}
      <Button title="Sign out" onPress={handleSignOut} />
      <Button
        title="edit"
        onPress={() => navigation.navigate('Edit', { data, count, setCount })}
      />
    </View>
  );
};
export default Profile;
