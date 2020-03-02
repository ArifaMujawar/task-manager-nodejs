require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e58e6c73985cc2040ff068c')
// .then((task)=>{
//   console.log(task)
//   return Task.countDocuments({completed:false})
// })
// .then((result)=>{
//   console.log(result)
// })
// .catch((e)=>{
//   console.log(e)
// })

const deleteTask = async (id)=>{
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed:true})
  return count
}

deleteTask('5e58ef1f66fcc3289567c6af').then((count)=>{
  console.log(count)
}).catch((e)=>{
  console.log(e)
})