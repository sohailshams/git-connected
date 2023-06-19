import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

const MiniRepoCard = ({ data, navigation }) => {
  console.log(data, 'In mini repo card');
  function handlePress() {
    navigation.navigate('portfolio card', { data });
  }
  return (
    <View className="flex flex-column border-[1px] border-black m-2 p-5">
      <Text>Project Name: {data.name}</Text>
      <Text>Project Description: {data.description}</Text>
      <TouchableOpacity>
        <Text
          className="justify-right bg-lime-700 my-1 py-1 px-2 text-white text-center w-[80px] rounded-full"
          onPress={() => Linking.openURL(`${data.html_url}`)}
        >
          GitHub
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default MiniRepoCard;
