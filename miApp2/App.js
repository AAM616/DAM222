import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Saludo } from './assets/components/Saludo';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cambios en tiempo real osiosi!</Text>
      <Button title="Boton que no hace nada"></Button>
      <Text>---------------------</Text>
      <Saludo></Saludo>
      <Saludo/>
      <StatusBar style="auto" />
    </View>
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
