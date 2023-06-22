import {
  signInWithPopup,
  getAdditionalUserInfo,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { addUser, getGithubUser, getUserById } from "../utils/functions";

export default function SignIn() {
  const { setUser } = useContext(UserContext);

  onAuthStateChanged(auth, (signedInUser) => {
    if (signedInUser) {
      const id = signedInUser.uid;
      getUserById(id).then((data) => setUser(data));
    } else {
      setUser(false);
    }
  });

  const handleLogIn = async () => {
    const result = await signInWithPopup(auth, provider);
    const userInfo = getAdditionalUserInfo(result);
    setUser(userInfo);
    const { profile } = userInfo;
    if (userInfo.isNewUser) {
      addUser(
        profile.login,
        profile.avatar_url,
        profile.html_url,
        profile.name,
        profile.location,
        profile.bio,
        profile.email,
        result.user.uid
      );
    }
  };

  return (
    <>
      <View className="min-h-[500px] max-[375px]:w-[90%] min-[425px]:w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3 flex justify-center items-center">
        <View className="rounded-md border-[1px] border-black max-[320px]:w-[240px] min-[375px]:w-[320px] shadow-2xl flex justify-center items-center">
          <Text className="text-lg font-bold my-5">
            Sign In to Git Connected
          </Text>
          <Image
            className="h-[200px] w-[200px]"
            source={require("../assets/Git-Connected-1.png")}
          />
          <TouchableOpacity
            className="bg-zinc-500 shadow-2xl py-3 px-5  rounded-full text-center my-5"
            onPress={handleLogIn}
          >
            <Text className="text-white ">Sign in with GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-20 max-[375px]:w-[90%] min-[425px]:w-5/6 bg-white mx-auto rounded-md shadow-lg mt-3 flex justify-center items-center">
        <Text>Copyright© 2023 Git Connected®</Text>
      </View>
    </>
  );
}
