import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { Button } from 'react-native';
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function SignIn() {
  const { setUser } = useContext(UserContext)

  const handleLogIn = async () => {
    const result = await signInWithPopup(auth, provider)
    const userInfo = getAdditionalUserInfo(result)
    setUser(userInfo)
    console.log(userInfo)
    console.log(userInfo.isNewUser)
  }

  return (
    <Button
      title="Login"
      onPress={
        handleLogIn
      }
    />
  );
}