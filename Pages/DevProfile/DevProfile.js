import { UserContext } from "../../contexts/User";
import { useState, useEffect, useContext } from "react";

import { addChat, getChatId, getUserById } from "../../utils/functions";
import { View, Text, Button, FlatList } from "react-native";


import ProfileData from "../../components/ProfilePage/ProfileData";
import FormButtons from "../../components/ProfilePage/FormButtons";
import {
  getPortfolioById,
  getProjectById,
  makeUniqueArray,
  getDevLanguages,
} from "../../utils/functions";
import MiniColabList from "../../components/MiniLists/MiniColabList";
import MiniRepoList from "../../components/MiniLists/MiniRepoList";

const DevProfile = ({ navigation, route }) => {
  const { data } = route.params;
  const {user} = useContext(UserContext)
  const [colab, setColab] = useState([]);
  const [state, setState] = useState(1);
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    getPortfolioById(data.item.id).then((data) => setPortfolio(data));
  }, []);
  useEffect(() => {
    getProjectById(data.item.id).then((data) => setColab(data));
  }, []);

  function handlePress() {
    addChat(null, user.id, data.item.id)
    .then(id => navigation.navigate('Messages', {screen:'Direct message', params:{id}}))
    // getChatId(user.id, data.item.id)
    // .then(id => console.log(id))



  const [lang, setLang] = useState([]);
  useEffect(() => {
    const getLangArray = async () => {
      const fetchedLangArray = await getDevLanguages(data.item.username);
      setLang(fetchedLangArray);
    };
    getLangArray();
  }, []);
  
}


  console.log(data.item);
  return (
    <View>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
        <View className="flex flex-row max-[375px]:flex-col pl-3  mt-3">
          <Image
            className="rounded-full ml-3 mt-3 h-[80px] w-[80px]"
            source={data.item.avatar_url}
          />
          <View className="w-full min-[320]-ml-5 mt-5">
            <View className="w-5/6 ml-3">
              <FlatList
                contentContainerStyle={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
                data={makeUniqueArray(lang[data.item.username])}
                renderItem={({ item }) => (
                  <Text className="py-1 px-2 ml-3 rounded-full my-1 text-center w-[90px] text-slate-700 bg-slate-300 shadow-2xl">
                    {item}
                  </Text>
                )}
              />
            </View>
          </View>
        </View>
        <View className="ml-3 my-5">
          <Text className="text-2xl font-semibold ">{data.item.username}</Text>
          <Text className="text-normal mt-1">{data.item.bio}</Text>
          <Text className="mt-1">{data.item.location}</Text>
        </View>
      </View>
      <View className="w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3">
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

    </View>
  );
};

export default DevProfile;
