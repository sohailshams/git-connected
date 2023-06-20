import axios from "axios";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase.config";

const github = axios.create({
  baseURL: "https://api.github.com/",
});

export function getRepoList(username) {
  return github.get(`/users/${username}/repos`).then(({ data }) => data);
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
      username,
      avatar_url: avatar_url,
      html_url: html_url,
      name: newName,
      location: newLocation,
      bio: newBio,
      email: newEmail,
      id,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = async (uid) => {
  const q = query(collection(db, "users"), where("id", "==", `${uid}`));
  const docArray = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => docArray.push(doc.data()));
  return docArray[0];
};

export const addPortfolioRepos = async (
  username,
  html_url,
  name,
  description,
  userId
) => {
  try {
    const docRef = await setDoc(
      doc(collection(db, "repos", "type", "portfolio"), `${username}+${name}`),
      {
        username,
        html_url,
        name,
        description,
        userId,
      }
    );
    console.log("document written", docRef.name);
  } catch (e) {
    console.log(e);
  }
};

export const addProjectRepos = async (
  username,
  html_url,
  name,
  description,
  theme,
  languagesWanted,
  userId
) => {
  try {
    const docRef = await setDoc(
      doc(
        collection(db, "repos", "type", "collaboration"),
        `${username}+${name}`
      ),
      {
        username,
        html_url,
        name,
        description,
        theme,
        languagesWanted,
        userId,
      }
    );
    console.log("document written", docRef.name);
  } catch (e) {
    console.log(e);
  }
};

const uniqueDevLang = (devName, langObj) => {
  if (devName === langObj[devName]) {
    const uniqueArray = Array.from(new Set(langObj[devName]));
    return uniqueArray;
  }
};

export const makeUniqueArray = (array) => {
  const uniqueArray = Array.from(new Set(array));
  return uniqueArray;
};

export const getDevLanguages = async (devName) => {
  const reposRef = collection(db, "repos", "type", "portfolio");
  const q = query(reposRef, where("username", "==", `${devName}`));
  const querySnapshot = await getDocs(q);

  const langObj = {};
  langObj[devName] = [];
  const repoNames = [];
  querySnapshot.forEach(async (doc) => {
    repoNames.push(doc.data().name);
  });

  for (let i = 0; i < repoNames.length; i++) {
    const repos = await github.get(
      `/repos/${devName}/${repoNames[i]}/languages`
    );

    const languages = Object.keys(repos.data).map((lang) => lang);
    if (langObj.hasOwnProperty(devName)) {
      languages.forEach((lang) => langObj[devName].push(lang));
    }
  }
  return langObj;
};

export const getPortfolioById = async (id) => {
  const q = query(
    collection(db, "repos", "type", "portfolio"),
    where("userId", "==", `${id}`)
  );
  const docArray = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => docArray.push(doc.data()));
  return docArray;
};
export const getProjectById = async (id) => {
  const q = query(
    collection(db, "repos", "type", "collaboration"),
    where("userId", "==", `${id}`)
  );
  const docArray = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => docArray.push(doc.data()));
  return docArray;
};

export const editProfile = async (username, bio, email, location, name) => {
  const docRef = doc(db, "users", `${username}`);
  await updateDoc(docRef, {
    bio,
    email,
    location,
    name,
  });
};

export const getDevList = async () => {
  const newObj = {};
  const collectionRef = collection(db, "users");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const devList = [];
  querySnapshot.forEach((doc) => {
    const devName = doc.data().username;
    devList.push(doc.data());
  });
  return devList;
};

export const getUsernameById = async (uid) => {
  const usersData = await getUserById(uid);
  console.log(usersData);
  return usersData.username;
};

export const addMsg = async (
  senderId,
  receiversIds /* array for when groupchats are introduced */,
  msgContent,
  msgDateSent
) => {

  const senderUsername = await getUsernameById(senderId);
  const receiversUsernames = await Promise.all(receiversIds.map(async id => await getUsernameById(id)));
  const chatName = receiversUsernames.join('-');
  const usernamesObj = Object.fromEntries(receiversUsernames.map((item, i) => [i, item]))
  const members = [...receiversUsernames]
  members.push(senderUsername)
  const membersObj = await Object.fromEntries(members.map((item, i) => [i, item]))

  const docChatData = {
    members: arrayUnion(membersObj),
    lastMsg: {
      msg_content: msgContent,
      msg_date_sent: msgDateSent,
      sender_username: senderUsername,
      receivers: arrayUnion(usernamesObj),
    },
  };

  const docMsgData = {
    msg_content: msgContent,
    msg_date_sent: msgDateSent,
    sender_username: senderUsername,
    receivers: arrayUnion(usernamesObj)
  };
  
  try {
    const docFields = await setDoc(doc(collection(db, "users", senderUsername, "conversations"), `${chatName}`), docChatData);
    
    const docRef = await setDoc(doc(collection(db, "users", senderUsername, "conversations", chatName, 'messages'), `${msgDateSent}`), docMsgData);
  } catch (e) {
    console.log(e);
  }
};

export const getMessageList = async(username) => {
  const q = query(collection(db, "users", `${username}`, 'conversations'),);
  const chatList = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => chatList.push(doc.data()));
  return chatList;
}
