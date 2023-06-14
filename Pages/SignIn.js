import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { Button } from 'react-native';
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function SignIn() {
  const { setUser } = useContext(UserContext)

  const handleLogIn = async () => {
    const { _tokenResponse } = await signInWithPopup(auth, provider)
    setUser(_tokenResponse)
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