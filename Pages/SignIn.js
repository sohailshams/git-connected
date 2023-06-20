import { signInWithPopup, getAdditionalUserInfo, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { Button } from 'react-native';
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { addUser, getGithubUser, getUserById } from "../utils/functions";

export default function SignIn() {
  const { setUser } = useContext(UserContext)

  onAuthStateChanged(auth, signedInUser => {
    if (signedInUser) {
      console.log(signedInUser)
      const id = signedInUser.uid
      getUserById(id)
        .then(data => setUser(data))
      
    } else {
      setUser(false)
    }
  })

  const handleLogIn = async () => {
    const result = await signInWithPopup(auth, provider)
    const userInfo = getAdditionalUserInfo(result)
    setUser(userInfo)
    const { profile } = userInfo
    if (userInfo.isNewUser) {
      addUser(profile.login, profile.avatar_url, profile.html_url, profile.name, profile.location, profile.bio, profile.email, result.user.uid)
    }
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