// video 4
import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contestListAsObj=data.contestList.reduce((obj,contest)=>{
    obj[contest.id] = contest;
    return obj;
},{});

router.get('/',(req,res)=>{
    res.send({data:[]});
});

//this sends json array
// router.get('/contestList',(req,res)=>{
//     res.send({contestList:data.contestList});
// });

//this send json objects
router.get('/contestList',(req,res)=>{
    res.send({
        contestList:contestListAsObj
    });
});

router.get('/contestList/:contestId',(req,res)=>{
   let contest =contestListAsObj[req.params.contestId];
   contest.desc ="dddjhds hgdshgd jdssgd hjsgdhsdgd hjgdhsdhds shdsjhdgd hsdhsgs jdhdg jshdgshgd";
    res.send({contestDetails:contest});
});

export default router;