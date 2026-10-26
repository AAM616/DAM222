import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'react-native';




export default function SafeScreen() {
  return (
        <View style={styles.container}>  
        <Text> Aqui va la practica de Uriel y Aaron</Text>
        <StatusBar style="auto"/>
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
});
