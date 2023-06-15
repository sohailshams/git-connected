import { signInWithPopup, getAdditionalUserInfo, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { Button } from 'react-native';
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { addUser, getGithubUser } from "../utils/functions";

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
    const { profile } = userInfo
    addUser(profile.login, profile.avatar_url, profile.html_url, profile.name, profile.location, profile.bio, profile.email, result.user.uid)
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