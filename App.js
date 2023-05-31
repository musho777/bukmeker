import { useColorScheme, View } from "react-native"
import { Globalstyles } from "./globalStyle";
import Navigation from "./src/Navigation/navigation";

export default App = () =>{
  const isDarkMode = useColorScheme() === 'dark';
  
  return <>
    <Navigation />
  </>
} 