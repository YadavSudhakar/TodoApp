// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27000/TodoApp', (err,db) => {
  if(err){
    return onsole.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('59575840e3b6090ddcabab5d')
  },{
    $set:{
      name:'Nikhil'
    },
    $inc:{
      age:1
    }
  },{
        returnOriginal:false
      }).then((result) => {
        console.log(result);
  });

  // db.close();
});
