// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27000/TodoApp', (err,db) => {
  if(err){
    return onsole.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
  //   console.log('Todos');
  //   console.log(result);
  // },(err) =>{
  //   console.log('Inable to fetch',err);
  // });

  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // },(err) =>{
  //   console.log('Inable to fetch',err);
  // });

  db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
  },(err) =>{
    console.log('Inable to fetch',err);
  });

  // db.close();
});
