import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect } from 'react';
import { addData2GoogleSheet } from './utils/addData2GoogleSheet';
import { getTemperature } from './utils/getTemperature';
import { v4 as uuid } from 'uuid';

export default function App() {

  const data = 22;
  const userid = uuid();
  
  return (
    <View style={styles.container}>
      <Button onPress={()=> addData2GoogleSheet(data,userid)} title='update sheet'></Button>
      <Button onPress={()=> getTemperature()} title='get temp'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
