const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User',{
  name:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    trim:true,
    lowercase: true,
    required: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
      }
    }
  },
  age :{
    type:Number,
    default:0,
    validate(value){
      if(value<0){
        throw new Error('Age must be a positive number')
      }
    }
  },
  password:{
    type: String,
    trim:true,
    minlength: 7,
    validate(value){
      if(value.toLowerCase().includes('password')){
        throw new Error('Password should not be password')
      }
    }
  }
})

// const me = new User({
//   name: 'zen',
//   email:'ddd@example.com',
//   age: 29,
//   password:'password'
// })

// me.save().then((me)=>{
//   console.log(me)
// }).catch((error)=>{
//   console.log('Error ', error)
// })

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

const task = new Tasks({
  description: 'feed yusra',
  completed:false
})
task.save().then((task)=>{
console.log(task)
}).catch((error)=>{
console.log(error)
})