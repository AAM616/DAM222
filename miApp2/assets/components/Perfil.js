
import {Text, View, Button} from 'react-native';
import {Fragment, useState} from 'react';

export const Perfil = ({nombre, materia, carrera, cuatrimestre}) => {
    const[mostrar, setMostrar] = useState(false);
  return (
    <View>
        <Text>{nombre}</Text>
        
        {mostrar &&
        <>
        <Text>{materia}</Text>
        <Text>{carrera}</Text>
        <Text>{cuatrimestre}</Text>
        </>
        }
        <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
  
  );

}
