import { View, Text, TouchableOpacity } from 'react-native';

const PortfolioCard = ({ route }) => {
  const { data } = route.params;
  console.log(data);
  return (
    <View className="flex flex-column border-[1px] border-black m-2 p-5">
      {/* <Image
        className="h-[80px] w-[80px] rounded-full"
        source={data.item.avatar_url}
      /> */}
      <View>
        <Text>Portfolio Name: {data.name}</Text>
        <Text>Portfolio Creator: {data.username}</Text>
        <Text>Portfolio Description: {data.description}</Text>
      </View>
      <View className="items-right">
        <TouchableOpacity>
          <Text
            className="justify-right bg-lime-700 my-1 py-1 px-2 text-white text-center w-[80px] rounded-full"
            onPress={() => Linking.openURL(`${data.html_url}`)}
          >
            GitHub
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PortfolioCard;
