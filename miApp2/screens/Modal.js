import { useState } from 'react';
import { View,  Text,  Button,  Modal,  StyleSheet} from 'react-native';

export default function App() {

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Practica sencilla de Modal
      </Text>

      <Button
        title="Abrir Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalFondo}>

          <View style={styles.modalContenido}>

            <Text style={styles.modalTitulo}>
              ¡Hola!
            </Text>

            <Text>
              Este mensaje está dentro de un Modal.
            </Text>

            <Button
              title="Cerrar"
              onPress={() => setVisible(false)}
            />

          </View>

        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    marginBottom: 20,
  },

  modalFondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContenido: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    gap: 15,
  },

  modalTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },

});