import {Router} from 'express'
import { feedbackModel } from '../models/feedback.model.js';

const feedbackRouter = Router();


feedbackRouter.get("/feedbacks", (req, res)=>{
    // get all
    res.json({
        msg:"runs"
    });
})

feedbackRouter.post("/feedback", (req, res)=>{
    console.log(req.body);
    res.json({
        msg: "Done"
    })
})

export {feedbackRouter}
