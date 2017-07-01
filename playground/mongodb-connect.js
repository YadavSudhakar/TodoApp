// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27000/TodoApp', (err,db) => {
  if(err){
    return onsole.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server');
  //
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result) => {
  //   if(err){
  //     console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name:'Sudhakar Yadav',
    age:20,
    location:'Aarey Colony,Goregaon'
  },(err,result) => {
    if(err){
      console.log('Unable to insert users',err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });


  db.close();
});
