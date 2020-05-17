import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/contestList`)
.then(res =>{
    console.log(res.data);
})
.catch(error =>{
    console.error(error);
});