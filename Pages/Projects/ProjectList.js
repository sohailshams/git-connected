
import { collection, getDocs, query } from 'firebase/firestore';
import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from '../../firebase.config';
import ColabCard from './ColabCard';
import OpeningAnimation from '../Transition/transitionanimation';

const ProjectList = ({ navigation }) => {
  const [projectList, setProjectList] = useState([]);
  const [animationVisible, setAnimationVisible] = useState(true);

  useEffect(() => {
    
      const q = query(collection(db, "repos", "type", "collaboration"));
      onSnapshot(q, (querySnapshot) => {
      const projArray = [];
      querySnapshot.forEach((doc) => projArray.push(doc.data()));
      setProjectList(projArray);
    })
    

  }, []);

  const renderProjectItem = (item) => {
    return <ColabCard data={item} navigation={navigation} />;

  };

  const onAnimationComplete = () => {
    setAnimationVisible(false);
  };

  return (
    <View>
      {animationVisible && (
        <OpeningAnimation onAnimationComplete={onAnimationComplete} />
      )}
      {!animationVisible && (
        <ScrollView className="my-3">
      <FlatList data={projectList} renderItem={renderProjectItem} />
    </ScrollView>
      )}
    </View>

  );
};

export default ProjectList;
