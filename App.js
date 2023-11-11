import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./screens/LogIn";
import Main from "./screens/Main";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='SignUp' component={SignUp} />
    //     <Stack.Screen name='LogIn' component={LogIn} />
    //     <Stack.Screen name='Main' component={Main} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Main />
  );
}

