import axios, { all } from "axios";
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

export const getUserDataById = async (uid, key) => {
  const usersData = await getUserById(uid);
  return key ? usersData[key] : usersData;
};

// onPress - devcard, devprofile
export const addChat = async (chatName, ...membersIds) => {
  const memberData = await Promise.all(membersIds.map(async user_id => {
    const username = await getUserDataById(user_id, 'username')
    const avatar_url = await getUserDataById(user_id, 'avatar_url')
    
    return [[username], {
      user_id,
      avatar_url,
      is_active: true /* to be dynamic */
    }]
  }))
  const docMemberData = {'members': Object.fromEntries(memberData)}
  const usernames = Object.keys(docMemberData.members)
  const chatUID = usernames.join(', '); // option to rename the chat
  const docChatData = {
    'members': docMemberData.members,
    'chat': {
      chat_name: chatName ? chatName : chatUID,
      chat_id: chatUID
    }
  }
  
  usernames.forEach(async username => {
    const docFields = setDoc(doc(collection(db, "users", username, "conversations"), `${chatUID}`), docChatData);
  })
}

export const getChatDataByUserId = async (userId, chatId) => {
  const username = await getUserDataById(userId, 'username')

  const q = query(
    collection(db, "users", username, 'conversations'),
  );
  const chatArr = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async doc => chatArr.push(doc.data()));
  const chat = await chatArr.find(({ chat }) => chat.chat_id === chatId)
  return chat;
};

// onSubmit - chat
export const addMsg = async (chatUID, senderId, msgContent) => {
  const senderUsername = await getUserDataById(senderId, 'username');
  const chatData = await getChatDataByUserId(senderId, chatUID)
  const { members } = chatData
  const { chat } = chatData
  const usernames = await Object.keys(members)
  const receivers = await {...members}
  delete receivers[senderUsername]
    
  try {
    const docMsgData = {
      msg_content: msgContent,
      msg_date_sent: new Date(),
      sender_username: senderUsername,
      receivers: receivers,
    };

    usernames.forEach(async username => {
      const docMsgRef = await setDoc(doc(collection(db, "users", username, "conversations", chatUID, 'messages'), `${docMsgData.msg_date_sent}`), docMsgData);
      const docLastMsgRef = await setDoc(doc(collection(db, "users", username, "conversations"), `${chatUID}`), {chat, members, last_message: docMsgData});
    })
  } catch (e) {
    console.log(e);
  }
};
