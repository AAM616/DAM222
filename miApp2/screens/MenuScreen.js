import { StyleSheet, Text, View, Button} from 'react-native';
import { StatusBar } from 'react-native';
import {useState} from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import Pressable from './Pressable';
import TextInput  from './TextInput';
import Flatlist  from './Flatlist';
import ImageBackground  from './ImageBackground';
import Modal  from './Modal';
import ActivityIndicator  from './ActivityIndicator';



export default function MenuScreen() {

    const [screen, setScreen]=useState('menu')

    switch(screen){
        case 'tarjetas': 
            return <Tarjetas/>

        case 'safeScreen':
            return <SafeScreen/>
        
        case 'Pressable':
            return <Pressable/>
        
        case 'TextInput':
            return <TextInput/>
    
        case 'Flatlist':
            return <Flatlist/>

        case 'ImageBackground':
            return <ImageBackground/>
        
        case 'Modal':
            return <Modal/>    
        
        case 'ActivityIndicator':
            return <ActivityIndicator/>

        case 'menu':
            default:
                return (
        <View style={styles.container}> 

            <Text>Menu de Practicas</Text>
            <Button title='Tarjetas' onPress={()=>setScreen ('tarjetas')}></Button>
            <Button title='SafeAreaView' onPress={()=>setScreen ('safeScreen')}></Button>
            <Button title='Pressable' onPress={()=>setScreen ('Pressable')}></Button>
            <Button title='TextInput' onPress={()=>setScreen ('TextInput')}></Button>
            <Button title='Flatlist' onPress={()=>setScreen ('Flatlist')}></Button>
            <Button title='ImageBackground' onPress={()=>setScreen ('ImageBackground')}></Button>
            <Button title='Modal' onPress={()=>setScreen ('Modal')}></Button>
            <Button title='ActivityIndicator' onPress={()=>setScreen ('ActivityIndicator')}></Button>



        <StatusBar style="auto"/>
        </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2ebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
