//video 1
//console.log('First code');

import { func } from "prop-types";

//video 2
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message){
    console.log('*******');
    console.info(message);
    console.log('*******');
};

export default {
    port:env.PORT || 8081
};