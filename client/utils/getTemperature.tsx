import axios from 'axios';

export function getTemperature() {
    axios({
        method: 'get',
        url: 'http://10.0.2.2:8000/get_temp'
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
