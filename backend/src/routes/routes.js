import {Router} from 'express'
import { feedbackModel } from '../models/feedback.model';

const feedbackRouter = Router();


feedbackRouter.get("/feedbacks", (req, res)=>{
    // get all
    res.json();
})

