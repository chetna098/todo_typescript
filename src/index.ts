import express from 'express';
import { json } from 'body-parser';
import { taskRouter } from './routes/task';
import mongoose from 'mongoose';

const app = express();
app.use(json())
app.use(taskRouter)

mongoose.connect('mongodb+srv://chetna:Java1234@cluster0.2zyiopu.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, () => {
    console.log('connected to the database')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})

