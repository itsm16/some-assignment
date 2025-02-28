import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res)=>{
    res.json({
        msg: "Runs"
    })
})

export {userRouter};