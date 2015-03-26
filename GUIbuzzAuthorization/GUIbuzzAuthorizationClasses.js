var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;
var server = new Server('45.55.154.156', 27017, {
    auto_reconnect: true
});
var db = new Db('Buzz', server);
var onErr = function(err, callback) {
    db.close();
    callback(err);
};
exports.getAuthorizationResult = function(gname, callback)
{
    var stringToReturn = "";

    db.open(function(err, db) {
        if (!err) {
            db.collection('Authorization', function(err, collection) {
                if (!err)
                {
                    collection.find({
                        //'methodName': gname//uncommenting this will return the specified restriction
                    }).toArray(function(err, docs)
                    {
                        if (!err)
                        {
                            db.close();

                                callback("",docs);

                        }
                        else
                        {
                            onErr(err, callback);
                        }
                    }); //end collection.find
                }
                else
                {
                    onErr(err, callback);
                }
            }); //end db.collection
        }
        else
        {
            onErr(err, callback);
        }
    }); // end db.open
};