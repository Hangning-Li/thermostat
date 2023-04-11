import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';

function updateSheet(data){
  axios({
    method: 'post',
    url: 'http://localhost:8080/add_data',
    data: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(function (response) {
      alert(response.status + " :" + response.data);                
    })
    .catch(function (error) {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    })
}

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <button onSubmit={updateSheet(22)}></button>
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
