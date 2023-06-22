import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text } from 'react-native';
import { useWindowDimensions } from 'react-native';

const OpeningAnimation = ({ onAnimationComplete }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const { height, width } = useWindowDimensions();
  const [animationVisible, setAnimationVisible] = useState(true);

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }).start(() => {
        
        setTimeout(() => {
          setAnimationVisible(false);
          onAnimationComplete();
        }, 5000); 
      });
    };

    startAnimation();
  }, [onAnimationComplete]);

  return (
    <React.Fragment>
      {animationVisible && (
        <Animated.View
          style={{
            opacity: opacity,
            height: height,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text className="text-3xl font-semibold m-3">Get ready to Git-Connected</Text>
          <Image
            source={require('../../assets/Git-Connected-1.png')}
            style={{ width: 400, height: 400 }}
          />
        </Animated.View>
      )}
    </React.Fragment>
  );
};

export default OpeningAnimation;
