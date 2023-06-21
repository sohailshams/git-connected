import { View, Text, Button, TouchableOpacity } from "react-native";

const FormButtons = ({ title1, title2, state, setState }) => {
  const handleButton1 = () => {
    setState(1);
  };
  const handleButton2 = () => {
    setState(2);
  };
  return (
    <View className="flex flex-row my-3 max-[375px]:flex-col">
      <TouchableOpacity
        className={
          state === 1
            ? "bg-lime-500 shadow-2xl py-1 px-2 w-[150px] rounded-full text-center my-1 ml-3"
            : "bg-zinc-500 shadow-2xl py-1 px-2 w-[150px] rounded-full text-center my-1 ml-3"
        }
        onPress={handleButton1}
      >
        <Text className="text-white">{title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          state === 2
            ? "bg-lime-500 shadow-2xl py-1 px-2 w-[150px] rounded-full text-center my-1 ml-3"
            : "bg-zinc-500 shadow-2xl py-1 px-2 w-[150px] rounded-full text-center my-1 ml-3"
        }
        onPress={handleButton2}
      >
        <Text className="text-white">{title2}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FormButtons;
