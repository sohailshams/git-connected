import { UserContext } from "../../contexts/User";
import { useState, useEffect } from "react";
import { getUserById } from "../../utils/functions";
import { View, Text } from "react-native";
import { UserContext } from "../../contexts/User";

const DevProfile = ({ navigation, route }) => {
  const { user } = useContext(UserContext);
  const { userId } = route.params;
  const [state, setState] = useState(1);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserById(userId);
      setUser(fetchedUser);
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return (
    <View>
      {user && (
        <>
          <Text>{user.username}</Text>
        </>
      )}
    </View>
  );
};

export default DevProfile;
