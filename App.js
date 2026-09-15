import { StyleSheet, Text, Card, View, Pressable } from 'react-native';
import {SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


   export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.tela}>
        <Text style={styles.texto}>Clique para adicionar um ponto ou subtrair!</Text>
        <View style={styles.areadebotao}>
        <Pressable style={styles.botao1}>
        <Text style={styles.textodobotao}>+1</Text>
        </Pressable>
        <Pressable style={styles.botao2}>
        <Text style={styles.textodobotao}>-1</Text>
        </Pressable>
        </View>
        <View style={styles.resultado}>
        
        </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '',
    padding: 8,
  },

  tela:{
    height:200,
    width: 300,
    borderRadius: 30,
    backgroundColor: '#696969',
    alignItems: 'center',
    shadowColor:'black',
      shadowOffset: {
    width: 15,  
    height: 15,  
  },
    shadowRadius: 30,
  },

  texto:{
    marginTop: 20,
    fontSize: 15,
  },

  areadebotao:{
    flexDirection:'row',
  },

  botao1:{
    height:50,
    width: 55,
    borderRadius: 10,
    backgroundColor: '#000080',
    marginTop: 30,
    marginRight: 50,
    alignItems: 'center',
    justifyContent:'center'
    
    
  },

  botao2:{
    height:50,
    width: 55,
    borderRadius: 10,
    backgroundColor: '#000080',
    marginTop: 30,
    alignItems: 'center',
    justifyContent:'center'
  },

  textodobotao:{
    fontSize: 20,
    color:'#ffffff'
  },

  resultado:{

  },
});
