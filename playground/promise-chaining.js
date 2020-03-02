require('../src/db/mongoose')

const User = require('../src/models/user')

// const userPromise = User.findByIdAndUpdate('5e58b4d0934e44193da5144c', {age: 1});

// userPromise.then((user)=>{
//   console.log(user)
//   return User.countDocuments({age: 1});
// }).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })


const updateAgeAndCount = async (id, age)=>{
  const user = await User.findByIdAndUpdate(id,{age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount('5e58b4d0934e44193da5144c', 2).then((count)=>{
  console.log(count)
}).catch((e)=>{
  console.log(e)
})