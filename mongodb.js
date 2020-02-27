// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// short hand to grab above things
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
  if(error){
    return console.log('Unable to connect to database!')
  }

 const db = client.db(databaseName)


 db.collection('tasks').deleteOne({
   _id: new ObjectID("5e53b6319edb2637725386e0")
 }).then((res)=>{
   console.log(res)
 }).catch((err)=>{
console.log(err)
 })


// db.collection('users').deleteMany({
//   age:29
// }).then((res)=>{
// console.log(res)
// }).catch((error)=>{
// console.log(error)
// })


// db.collection('tasks').updateMany({
//   completed: false
// },{
//   $set:{
//     completed:true
// }
// }).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })
  // db.collection('users').updateOne({
  //   _id: new ObjectID("5e53b1e6f7f8733599637e4b")
  // },{
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result)=>{
  //   console.log(result)
  // }).catch((error)=>{
  //   console.log(error)
  // })

  // db.collection('tasks').findOne({_id:new ObjectID("5e53b6319edb2637725386e0")},(error,task)=>{
  //   console.log(task)
  // })

  

  // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
  //   if(error){
  //     return console.log('error')
  //   }
  //   console.log(tasks)
  // })


  // db.collection('users').insertOne({
  //   _id:id,
  //   name:'Arifa',
  //   age:29
  // },(error, result)=>{
  //   if(error){
  //     return console.log('Unable to insert documents!')
  //   }
  //   console.log(result.ops)
  // })

// db.collection('users').insertMany([{
//   name:'Jen',
//   age:'2'
// },{
//   name:'owl',
//   age:'3'
// }],(error, result)=>{
// if(error){
//   return console.log('Unable to insert documents')
// }
// console.log(result.ops)
// })


// db.collection('tasks').insertMany([{
//   description: 'laundry',
//   completed: false
// },{
//   description: 'dusting',
//   completed:true
// },{
//   description:'cooking',
//   completed:false
// }],(error, result)=>{
//   if(error){
//     return console.log('Unable to insert documents')
//   }
//   console.log(result.ops)
// })

})