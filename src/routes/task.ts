import express, {Request, Response} from 'express';
import { Task } from '../../model/task';

const router = express.Router()

router.get('/api/task',async (req: Request, res:Response) => {
    const task = await Task.find({})
    return res.status(200).send(task)
})

router.post('/api/task',async (req: Request, res:Response) => {
    const { priority,title, label,date} = req.body;

    const  task= Task.build({ priority,title, label,date });
    await task.save()
    return res.status(201).send(task)
   
    
})

export {router as taskRouter} 

