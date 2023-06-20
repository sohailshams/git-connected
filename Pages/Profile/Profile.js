import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import {
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import FormButtons from "../../components/ProfilePage/FormButtons";
import ProfileData from "../../components/ProfilePage/ProfileData";
import {
  getDevLanguages,
  getPortfolioById,
  getProjectById,
  getUserById,
  makeUniqueArray,
} from "../../utils/functions";
import MiniRepoList from "../../components/MiniLists/MiniRepoList";
import MiniColabList from "../../components/MiniLists/MiniColabList";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);
  const [portfolio, setPortfolio] = useState([]);
  const [data, setData] = useState("");
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
      console.log("user:", user, "fetchedLangArray:", fetchedLangArray);
      setLang(fetchedLangArray);
    };
    getLangArray();
  }, []);

  return (
    <>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
        <View className="flex flex-row max-[375px]:flex-col pl-3  mt-3">
          <Image
            className="rounded-full ml-3 mt-3 h-[80px] w-[80px]"
            source={user.avatar_url}
          />
          {/* <ProfileData user={data} /> */}
          <View className="w-full min-[320]-ml-5 mt-5">
            <View className="w-5/6 ml-3">
              <FlatList
                contentContainerStyle={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
                data={makeUniqueArray(lang[data.username])}
                renderItem={({ item }) => (
                  <Text className="py-1 px-2 ml-3 rounded-full my-1 text-center w-[90px] text-white bg-zinc-500 shadow-2xl">
                    {item}
                  </Text>
                )}
              />
            </View>
          </View>
        </View>
        <View className="ml-3 my-5">
          <Text className="text-2xl font-semibold ">{user.username}</Text>
          <Text className="text-normal mt-1">{user.bio}</Text>
          <Text className="mt-1">{user.location}</Text>
        </View>
        <View className="flex flex-row justify-between w-[310px] ml-3 mb-3 max-[375px]:flex-col">
          <TouchableOpacity
            className="bg-zinc-500 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1"
            onPress={() => navigation.navigate("add Repo", { count, setCount })}
          >
            <Text className="text-white">Add Repo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-zinc-500 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1"
            onPress={() =>
              navigation.navigate("Edit", { data, count, setCount })
            }
          >
            <Text className="text-white">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-zinc-500 shadow-2xl py-1 px-2 w-[100px] rounded-full text-center my-1"
            onPress={handleSignOut}
          >
            <Text className="text-white">Sign Out</Text>
          </TouchableOpacity>
        </View>
        {/* <Button
        title="add repo"
        onPress={() => navigation.navigate("add Repo", { count, setCount })}
      /> */}
        {/* <FormButtons
          title1="Showcase list"
          title2="collaboration list"
          state={state}
          setState={setState}
        />
        {state === 1 ? (
          <MiniRepoList portfolio={portfolio} navigation={navigation} />
        ) : (
          <MiniColabList project={colab} navigation={navigation} />
        )} */}
        {/* <Button title="Sign out" onPress={handleSignOut} /> */}
        {/* <Button
        title="edit"
        onPress={() => navigation.navigate("Edit", { data, count, setCount })}
      /> */}
      </View>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
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
      </View>
    </>
  );
};
export default Profile;
