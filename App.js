import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [alcoolValue, setAlcoolValue] = useState('');
  const [gasolinaValue, setGasolinaValue] = useState('');
  const [resultado, setResultado] = useState('');

  const handleCalculation = () => {
    if (alcoolValue === '' || gasolinaValue === '') {
      Alert.alert('Erro', 'Por favor, informe os valores do álcool e da gasolina.');
      return;
    }

    const alcool = parseFloat(alcoolValue);
    const gasolina = parseFloat(gasolinaValue);

    const ratio = alcool / gasolina;

    if (ratio < 0.7) {
      setResultado('É mais vantajoso abastecer com álcool.');
    } else {
      setResultado('É mais vantajoso abastecer com gasolina.');
    }
  };

  return (
    <View style={styles.container}>
	  <View style={styles.card}>
      <Text style={styles.title}>Cálculo de Combustível</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Valor do álcool"
        value={alcoolValue}
        onChangeText={text => setAlcoolValue(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Valor da gasolina"
        value={gasolinaValue}
        onChangeText={text => setGasolinaValue(text)}
      />
      <Button title="Calcular" onPress={handleCalculation} />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5DEB3',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  card: {
  width: 300,
  backgroundcolor:'	#ADFF2F',
  borderradius: 5,
  boxshadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: 20
  }
});

export default App;
