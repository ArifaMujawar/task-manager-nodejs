const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  description:{
    type: String,
    trim: true,
    required: true
  },
  completed:{
    type: Boolean,
    default: false
  },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref: 'User'
    }
},{
  timestamps: true
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task;

// const task = new Tasks({
//   description: 'feed yusra',
//   completed:false
// })
// task.save().then((task)=>{
// console.log(task)
// }).catch((error)=>{
// console.log(error)
// })