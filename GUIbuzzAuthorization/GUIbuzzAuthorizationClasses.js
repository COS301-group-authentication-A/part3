function getAuthorizationRestrictions()
{
    var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert'),
    getAuthorizationRequestResult;

    var db = new Db('authorization', new Server('localhost', 27017));
    // Establish connection to db
    db.open(function(err, db)
    {
        // Get a collection
        db.collection('Authentication', function (err, collection)
        {
            // Fetch the restrictions object.
            getAuthorizationRequestResult = collection.find({});

            getAuthorizationRequestResult.each(function(err, docs) {
                    console.log("Hello " + docs);
                });
            //console.log("Hello");
        })
    })

    return getAuthorizationRequestResult;
};
exports.getAuthorizationRestrictionsResult = getAuthorizationRestrictions;