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
                        'methodName': gname
                    }).toArray(function(err, docs)
                    {
                        if (!err)
                        {
                            db.close();
                            var intCount = docs.length;
                            if (intCount > 0)
                            {
                                var strJson = "";
                                for (var i = 0; i < intCount;)
                                {
                                    strJson += '{"StatusPoints":"' + docs[i].StatusPoints + '"}'
                                    i = i + 1;
                                    if (i < intCount)
                                    {
                                        strJson += ',';
                                    }
                                }
                                console.log(strJson);
                                strJson = '{"methodName":"' + gname + '","count":' + intCount + ',"Authorization":[' + strJson + "]}"
                                callback("", JSON.parse(strJson));console.log(JSON.parse(strJson));
                            }
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