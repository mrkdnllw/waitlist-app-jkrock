require('dotenv').config();

module.exports = {
    //url: "mongodb://localhost:27017/test1"
    url: process.env.MONGODB_ATLAS
  };