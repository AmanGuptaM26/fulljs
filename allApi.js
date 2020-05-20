import axios from 'axios';

export const fetchEachContestByID = contestId =>{
    return axios.get(`/api/contestList/${contestId}`)
    .then(resp => resp.data.contestDetails);
};