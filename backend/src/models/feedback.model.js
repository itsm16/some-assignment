import {model, Schema} from 'mongoose'

const feedbackSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    }
})

const feedbackModel = model("feedback", feedbackSchema);

export {feedbackModel};