import mongoose from "mongoose";


interface ITask {
    priority: Number;
    title:String;
    label:String;
    date:Date;

}

interface taskModelInterface extends mongoose.Model<TaskDoc>{
    build(attr: ITask): TaskDoc
}
interface TaskDoc extends mongoose.Document {
    priority: Number;
    title: string;
    label: string;
    date: Date;
  }

const taskSchema = new mongoose.Schema({
    priority: {
        type:Number,
        required: true,
    },
    title: {
        type: String,
        required: true
      },
      label: {
        type: String, 
        required: true
      },
      date:{
        type: Date,
        required: true
      }
})

taskSchema.statics.build =(attr:ITask) => {
    return new Task(attr)
}

const Task = mongoose.model <TaskDoc ,taskModelInterface>('Task',taskSchema)

Task.build ({
    priority:2,
    title:'some title',
    label:'some label',
    date:new Date(Date.now())
})




export { Task }
