const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/runoob";
 
const connect = (table,callback,d='cinema') => {
    return new Promise((resolved,rejected)=>{
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, results) {
            if (err) throw err;
            const dbase = results.db(d);
            callback(dbase,results)
        });
    })
}

module.exports = connect
