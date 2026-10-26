import { StyleSheet} from 'react-native';
import MenuScreen from './screens/MenuScreen';





export default function App() {
  return (

<MenuScreen></MenuScreen>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2ebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
