//var csds = require('./csds');
//var connect = require('./connect');
var Authorization;

Authorization = function () {//Authorization class

};
Authorization.prototype.updateAuthorisationRestriction=function(UpdateAuthReq)//The  updateAuthorisationRestriction function
{
//    var isAuthreq=new IsAuthorisedRequest();
//    isAuthreq.setUserID(UpdateAuthReq.getUserID());
//    isAuthreq.getServiceIdentifier().setInterfaceName("Authorization");
//    isAuthreq.getServiceIdentifier().setMethodName("updateAuthorizationRestriction");
//    if (!isAuthorized(isAuthreq)){
//        throw NotAuthorizeddExeption;
//    }
//    else
//    {
    //    var isAuthreq=new IsAuthorisedRequest();
//    isAuthreq.setUserID(UpdateAuthReq.getUserID());
//    isAuthreq.getServiceIdentifier().setInterfaceName("Authorization");
//    isAuthreq.getServiceIdentifier().setMethodName("updateAuthorizationRestriction");
//    if (!isAuthorized(isAuthreq)){
//        throw NotAuthorizeddExeption;
//    }
//    else
//    {
    var Db = require('mongodb').Db,
        MongoClient = require('mongodb').MongoClient,
        Server = require('mongodb').Server,
        assert = require('assert');


    var db = new Db('authorization', new Server('localhost', 27017));
// Establish connection to db
    db.open(function(err, db) {
        // Get a collection
        db.collection('Authentication', function (err, collection) {

            // Update the document with an atomic operator
            collection.update({_id: UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName()}, {$set: {Ranking: UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints()}});

            // Wait for a second then fetch the document
            setTimeout(function () {

                // Fetch the document that we modified
                collection.findOne({_id: (UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName())}, function (err, item) {
                    assert.equal(null, err);
                    assert.equal(UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName(), item._id);
                    assert.equal(UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints(), item.Ranking);
                    db.close();
                });
            }, 1000);
        })
    });
};


///////////////////////////////Update Authorisation restriction request class and functions///////////////////////////////////////////////////
var UpdateAuthorizationRestrictionRequest;
UpdateAuthorizationRestrictionRequest=function(userID,AuthorizationRestriction)
{
    var userID;
    this.userID = userID;
    var AuthorizationRestriction;
    this.AuthorizationRestriction=AuthorizationRestriction;
};
UpdateAuthorizationRestrictionRequest.prototype.getUserID=function()
{
    return this.userID;
};
UpdateAuthorizationRestrictionRequest.prototype.setUserID=function(userID)
{
    this.userID=userID;
};
UpdateAuthorizationRestrictionRequest.prototype.setAuthorizationRestriction=function(AuthorizationRestriction)
{
    this.AuthorizationRestriction=AuthorizationRestriction;
};
UpdateAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};
//////////////////////////////////End of Update Authorisation restriction request class and functions///////////////////////////////////////////////////////
///////////////////////////////Update Authorisation restriction result class and functions///////////////////////////////////////////////////
var UpdateAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
};
///////////////////////////////End of Update Authorisation restriction request class and functions///////////////////////////////////////////////////


///////////////////////////////Update Authorisation restriction request class and functions///////////////////////////////////////////////////
var UpdateAuthorizationRestrictionRequest;
UpdateAuthorizationRestrictionRequest=function(userID,AuthorizationRestriction)
{
    var userID;
    this.userID = userID;
    var AuthorizationRestriction;
    this.AuthorizationRestriction=AuthorizationRestriction;
};
UpdateAuthorizationRestrictionRequest.prototype.getUserID=function()
{
    return this.userID;
};
UpdateAuthorizationRestrictionRequest.prototype.setUserID=function(userID)
{
    this.userID=userID;
};
UpdateAuthorizationRestrictionRequest.prototype.setAuthorizationRestriction=function(AuthorizationRestriction)
{
    this.AuthorizationRestriction=AuthorizationRestriction;
};
UpdateAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};
//////////////////////////////////End of Update Authorisation restriction request class and functions///////////////////////////////////////////////////////
///////////////////////////////Update Authorisation restriction result class and functions///////////////////////////////////////////////////
var UpdateAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
};
///////////////////////////////End of Update Authorisation restriction request class and functions///////////////////////////////////////////////////





///////////////////////////////RemoveAuthorisationRestrictionResult class and functions///////////////////////////////////////////////////
var RemoveAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
};
///////////////////////////////End of RemoveAuthorisationRestrictionResult///////////////////////////////////////////////////


Authorization.prototype.removeAuthorisationRestriction=function(RemoveAuthorizationReq)//The  removeAuthorisationRestriction function
{
   // if(isAuthorized(RemoveAuthorizationReq)){
   //     RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().setServiceRestrictionStatusPoints(0);
   // }
};
///////////////////////////////RemoveAuthorisationRestrictionResult class and functions//////////////////////////
var RemoveAuthorizationRestrictionsResult;
RemoveAuthorizationRestrictionsResult = function () {
    var AuthorizationRestriction;
};
//////////////////////End of RemoveAuthorisationRestrictionResult class and functions//////////////////////////

//////////////////////////////RemoveAuthorisationRestrictionRequest class and functions//////////////////////////////////////////

var RemoveAuthorizationRestrictionRequest;
RemoveAuthorizationRestrictionRequest=function(userID,_AuthorizationRestriction)
{
    var userID;
    this.userID = userID;
    var AuthorizationRestriction;
    this.AuthorizationRestriction=_AuthorizationRestriction;
};
RemoveAuthorizationRestrictionRequest.prototype.getUserID=function()
{
    return this.userID;
};
RemoveAuthorizationRestrictionRequest.prototype.setUserID=function(_userID)
{
    this.userID=_userID;
};
RemoveAuthorizationRestrictionRequest.prototype.setAuthorizationRestriction=function(_AuthorizationRestriction)
{
    this.AuthorizationRestriction=_AuthorizationRestriction;
};
RemoveAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};

///////////////////////////////End of RemoveAuthorisationRestriction request class and functions///////////////////////////////////////////////




///////////////////////////////Authorisation restriction class and functions///////////////////////////////////////////////////
var AuthorizationRestriction=function(serviceRestriction)//used by everyone
{
    var ServiceRestriction;
    this.ServiceRestriction=serviceRestriction;
};
AuthorizationRestriction.prototype.setServiceRestriction=function(ServiceRestriction)

{
    this.ServiceRestriction=ServiceRestriction;
};
AuthorizationRestriction.prototype.getServiceRestriction=function()
{
    return this.ServiceRestriction;
};

{
    this.ServiceRestriction=ServiceRestriction;
};
AuthorizationRestriction.prototype.getServiceRestriction=function()
{
    return this.ServiceRestriction;
};
///////////////////////////////End of Authorisation restriction class and functions///////////////////////////////////////////////////
///////////////////////////////Service restriction class and functions///////////////////////////////////////////////////
var ServiceRestriction=function(minimumStatusPoints,serviceIdentifier)//used by everyone
{
    var minimumStatusPoints;
    this.minimumStatusPoints=minimumStatusPoints;
    var ServiceIdentifier;
    this.ServiceIdentifier=serviceIdentifier;
};
ServiceRestriction.prototype.setServiceRestrictionStatusPoints=function(minimumStatusPoints)
{
    this.minimumStatusPoints=minimumStatusPoints;
};
ServiceRestriction.prototype.setServiceRestrictionStatusPoints=function(minimumStatusPoints)
{
    this.minimumStatusPoints=minimumStatusPoints;
};

ServiceRestriction.prototype.setServiceRestrictionServiceIdentifier=function(serviceIdentifier)
{
    this.ServiceIdentifier=serviceIdentifier;
};

ServiceRestriction.prototype.getServiceRestrictionMinimumStatusPoints=function() {
    return this.minimumStatusPoints;
};
ServiceRestriction.prototype.getServiceRestrictionServiceIdentifier=function() {
    return this.ServiceIdentifier;
};
///////////////////////////////End of Service restriction class and functions///////////////////////////////////////////////////
///////////////////////////////Service Identifier class and functions///////////////////////////////////////////////////
var ServiceIdentifier=function(fullyQualifiedInterfaceName,methodName)//used by everyone
{
    var fullyQualifiedInterfaceName;
    var methodName;
    this.fullyQualifiedInterfaceName=fullyQualifiedInterfaceName;
    this.methodName=methodName;
};
ServiceIdentifier.prototype.setServiceIdentifierMethodName=function(methodName)
{
    this.methodName=methodName;
};
ServiceIdentifier.prototype.setServiceIdentifierInterfaceName=function(fullyQualifiedInterfaceName)
{
    this.fullyQualifiedInterfaceName=fullyQualifiedInterfaceName;
};
ServiceIdentifier.prototype.getServiceIdentifierMethodName=function()
{
    return this.methodName;
};
ServiceIdentifier.prototype.getServiceIdentifierInterfaceName=function()
{
    return this.fullyQualifiedInterfaceName;
};
///////////////////////////////End of Service Identifier class and functions//////////////////////////////////////////////////
    function addAuthorizationRestriction(AddAuthorizationRestrictionRequest)
    {
        var addAuthorizationRestriction;
     //   if (!isAuthorized(userId, "addAuthorisationRestriction"))
       // {
         //   throw "NotAuthorizedExeption";
        //}
        addAuthorizationRestriction.isAdded = updateAuthorisationRestriction(userId, "addAuthorisationRestriction").isUpdated;
        return addAuthorizationRestriction;
    }

function getAuthorizationRestrictions(getAuthoizationsRestrictionRequest)
{
    var authorizationRestriction;
    authorizationRestriction.name = db.tableName.find({name:getAuthoizationsRestrictionRequest});

    return authorizationRestriction;
}
////////////////////////////test////////////////////////////////////
var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorisationRestriction");
var serviceRestriction=new ServiceRestriction(2,sIdentifier);
var authRestriction=new AuthorizationRestriction(serviceRestriction);
var updateAuth=new UpdateAuthorizationRestrictionRequest("u12118282",authRestriction);
var auth=new Authorization;
auth.updateAuthorisationRestriction(updateAuth);
/////////////////////////test end//////////////////////////////////

////////////////////////////test remove////////////////////////////////////
var rSIdentifier =new ServiceIdentifier("Authorization","removeAuthorisationRestriction");
var rServiceRestriction =new ServiceRestriction(5,rSIdentifier);
var rAuthRestriction;
rAuthRestriction = new AuthorizationRestriction(rServiceRestriction);
var removeAuth;
removeAuth = new RemoveAuthorizationRestrictionRequest("u12230830", authRestriction);
var rAuth;
rAuth = new Authorization;
rAuth.removeAuthorisationRestriction(removeAuth);
/////////////////////////test remove end//////////////////////////////////
