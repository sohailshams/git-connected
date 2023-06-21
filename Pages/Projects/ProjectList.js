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
    const fetchProjects = async () => {
      const q = query(collection(db, 'repos', 'type', 'collaboration'));
      const projArray = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => projArray.push(doc.data()));
      setProjectList(projArray);
    };

    fetchProjects();
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
        <FlatList data={projectList} renderItem={renderProjectItem} />
      )}
    </View>
  );
};

export default ProjectList;
