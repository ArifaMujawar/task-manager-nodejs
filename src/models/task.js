const mongoose = require('mongoose')


const Tasks = mongoose.model('task',{
  description:{
    type: String,
    trim: true,
    required: true
  },
  completed:{
    type: Boolean,
    default: false
  }
})

module.exports = Tasks;

// const task = new Tasks({
//   description: 'feed yusra',
//   completed:false
// })
// task.save().then((task)=>{
// console.log(task)
// }).catch((error)=>{
// console.log(error)
// })