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