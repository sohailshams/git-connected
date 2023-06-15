import axios from "axios";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";

const github = axios.create({
  baseURL: "https://api.github.com/",
});

export function getRepoList(username) {
  github.get(`/users/${username}/repos`)
    .then(({ data })=>data)
}

export const addUser = async (
   username,
   avatar_url,
   html_url,
   name,
   location,
   bio,
   email,
   id
 ) => {
   const newName = !name ? "" : name;
   const newLocation = !location ? "" : location;
   const newBio = !bio ? "" : bio;
   const newEmail = !email ? "" : email;

   try {
     const docRef = await setDoc(doc(collection(db, "users"), `${username}`), {
       username: username,
       avatar_url: avatar_url,
       html_url: html_url,
       name: newName,
       location: newLocation,
       bio: newBio,
       email: newEmail,
       id,
     });
     console.log("document written", docRef.id);
   } catch (e) {
     console.log(e);
   }
};
 
export const getUserById = async (uid) => {
  const q = query(
    collection(db, "users"),
    where("id", "==", `${uid}`)
  );
  const docArray = []
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => docArray.push(doc.data()))
  return docArray[0]
}

export const addPortfolioRepos = async (
  username,
  html_url,
  name,
  description,
  languages
) => {

  try {
    const docRef = await setDoc(doc(collection(db, "repos", 'type', 'portfolio'), `${username}+${name}`), {
      username,
      html_url,
      name,
      description,
      languages
    });
    console.log("document written", docRef.name);
  } catch (e) {
    console.log(e);
  }
};