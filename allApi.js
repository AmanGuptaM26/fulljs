import axios from 'axios';

export const fetchEachContestByID = contestId =>{
    return axios.get(`/api/contestList/${contestId}`)
    .then(resp => resp.data.contestDetails);
};

export const fetchAllContestList= () => {
    return axios.get(`/api/contestList/`)
    .then(resp => resp.data.contestList);
};