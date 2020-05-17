// video 4
import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send({data:[]});
});

router.get('/contestList',(req,res)=>{
    res.send({contestList:data.contestList});
});

export default router;