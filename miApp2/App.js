import { StyleSheet, Text, View, Image} from 'react-native';
import { Perfil } from './assets/components/Perfil';

export default function App() {
  return (
        <View style={styles.container}>  
        <Perfil nombre="Genaro" materia="Movil" />
        <Perfil nombre="Jenny" carrera="TIID" />
        <Perfil nombre="Carlos" cuatrimestre="4" />

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
