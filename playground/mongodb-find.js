// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27000/TodoApp', (err,db) => {
  if(err){
    return onsole.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').find({name:'sudhakar'}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) =>{
    console.log('Inable to fetch',err);
  });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
  },(err) =>{
    console.log('Inable to fetch',err);
  });

  db.close();
});
