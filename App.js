import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProvider } from "./contexts/User";
import Nav from "./Nav";
import { NativeWindStyleSheet } from "nativewind";
    
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <UserProvider>
      <Nav />
    </UserProvider>
  );
}

