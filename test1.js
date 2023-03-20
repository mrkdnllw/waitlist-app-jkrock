require('dotenv').config();


const { MongoClient, ServerApiVersion } = require('mongodb');
console.log("test1");

console.log(process.env.TEST);
console.log(process.env.MONGODB_ATLAS);
//return;
//xxxxxxxxxxxxxxxxxxxxxxxxx


//const uri = "mongodb+srv://test1:<password>@cluster0.moww2xf.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(`${process.env.MONGODB_ATLAS}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("browser_plugin").collection("armors").then(data=>{
//     console.log(data);

//   }).err(error=>{

//     console.log(error);
//   });
//   // perform actions on the collection object
//   //console.log(collection);
  
//   client.close();
// });


//xxxxxxxxxxxxxxxxxxxxx

//cost MongoClient = require('mongodb').MongoClient;

//const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority';

const client = new MongoClient(process.env.MONGODB_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("browser_plugin").collection("armors");
  // perform actions on the collection object

  collection.insertOne({ name: "John Doe", age: 30 });
  client.close();
});

console.log("reached");