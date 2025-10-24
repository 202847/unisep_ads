
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInputj } from 'react-native';


export default function App() {

  const [valor, setValor] = useState(0);
  const [nome, setNome] = useState("teste");

  function add() {
    setValor(valor + 1)
  }

  function apgd() {
    setValor(valor - 1)
  }

  return (
    <View style={styles.container}>
      <Text>{valor}</Text>
      <Button

        title='valor'
        onPress={() => { add() }}
      />
      <Button
        title='valor'
        onPress={() => { apgd() }}
      />

      <TextInput
        onChangeText={setNome}
        value={nome}
        style={{
          borderWidth: 1,
          width: 200,
          height: 25,
          borderBlackColor: '#000'
        }}
      />

      <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0cb50f5a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




