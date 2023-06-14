import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  UserProvider } from './contexts/User';
import Nav from './Nav';

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <UserProvider>
      <Nav/>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
