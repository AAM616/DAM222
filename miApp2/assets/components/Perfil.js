
import {Text, View, Button, StyleSheet } from 'react-native';
import { useState} from 'react';

export const Perfil = ({nombre, materia, carrera, cuatrimestre, style }) => {
    const[mostrar, setMostrar] = useState(false);
  return (
    <View style={[estilos.tarjeta,style]}>
        <Text style={estilos.nombre}>{nombre}</Text>
        
        {mostrar &&
        <>
        <Text style={estilos.otroTexto}>{materia}</Text>
        <Text style={estilos.carrera}>{carrera}</Text>
        <Text style={estilos.otroTexto}>{cuatrimestre}</Text>
        </>
        }
        <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
  
  );

}

const estilos = StyleSheet.create({
  nombre: {
    fontSize: 24,
    fontWeight: 800,
  },
  carrera: {
    fontSize:18,
    color: 'purple',
    fontFamily: 'Roboto',
  },
    otroTexto: {
    fontSize:12,
    fontStyle: 'italic',
    fontFamily: 'Courier',
  },
  tarjeta:{
    borderColor:'purple',
    borderWidth:5,
    borderRadius:10,
    padding:15,
    margin:10,

  }


});

