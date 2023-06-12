//Something like a singleton, but JS gets in the way...async-lock on npmjs looks promising
//
const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';

let _db = null;

module.exports = {
    getDB: async dbName => {
        if (_db)  { return _db; }
        else {
            //start critical section
            let _mongo  = await mongoClient.connect(mongoURL);
            _db = await _mongo.db(dbName)
            //end critical section
            return _db;
        }
    }
}

