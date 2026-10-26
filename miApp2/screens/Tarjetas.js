import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Perfil } from '../assets/components/Perfil';

export default function Tarjetas() {
  return (
        <View style={styles.container}>  
        <Perfil style={styles.tarjeta1} nombre="Genaro" materia="Movil" />
        <Perfil style={styles.tarjeta2} nombre="Jenny" carrera="TIID" />
        <Perfil style={styles.tarjeta3} nombre="Carlos" cuatrimestre="4" />

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2ebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1:{backgroundColor:'green'},
  tarjeta2:{backgroundColor:'yellow'},
  tarjeta3:{backgroundColor:'pink'},
});
