import { signInWithPopup, getAdditionalUserInfo, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { Button } from 'react-native';
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function SignIn() {
  const { setUser } = useContext(UserContext)
  const { setIsSignedIn } = useContext(UserContext)

  onAuthStateChanged(auth, signedInUser => {
    if (signedInUser) {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
  })

  const handleLogIn = async () => {
    const result = await signInWithPopup(auth, provider)
    const userInfo = getAdditionalUserInfo(result)
    setUser(userInfo)
  }


  return (
    <>
      <Button
        title="Log in"
        onPress={ handleLogIn }
      />
    </>
  );
}