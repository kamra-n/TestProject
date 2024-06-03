import { View, StyleSheet, Text, Button, TouchableOpacity, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = () => {
  const [storageValue, setStorageValue] = useState();

  const storeValue = async () => {
    try {
      await AsyncStorage.setItem('myKey', 'Bilal');
      // setStorageValue(value);
      // ToastAndroid.show('Value stored successfully', ToastAndroid.SHORT);

    } catch (error) {
      console.error('Error storing value:', error);
    }
  };


  const addValue = async () => {
    try {
      const value = await AsyncStorage.setItem('myKey', 'Bilal');
      setStorageValue(value);
      getValue();
      ToastAndroid.show('Value stored successfully', ToastAndroid.SHORT);

    } catch (error) {
      console.error('Error storing value:', error);
    }
  };


  const clearValue = async () => {
    try {
      await AsyncStorage.removeItem('myKey');
      setStorageValue('');
      ToastAndroid.show('Value cleared successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error clearing value:', error);
      ToastAndroid.show('Error clearing value', ToastAndroid.SHORT);
    }
  };

  const getValue = async () => {
    try {
      const value = await AsyncStorage.getItem('myKey');
      if (value !== null) {
        setStorageValue(value);
      }
    } catch (error) {
      console.error('Error retrieving value:', error);
    }
  };

  useEffect(() => {
    storeValue();
    getValue();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>{storageValue && storageValue || 'No value store yet'}</Text>
      <Button title='Add text to Storage' onPress={addValue} />
      <Button title='Remove Text from Storage' onPress={clearValue} />

    </View>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Customize screen background color
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default Main