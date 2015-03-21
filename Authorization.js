//var csds = require('./csds');
//var connect = require('./connect');
var Authorization;
////////////////////////////test////////////////////////////////////
//var testUpdateAuth=new UpdateAuthorizationRestrictionRequest;
//testUpdateAuth.setUserID("u12118282");
//testUpdateAuth.setAuthorizationRestriction();
//Authorization.updateAuthorisationRestriction(null);
/////////////////////////test end//////////////////////////////////
Authorization = function () {//Authorization class

};
Authorization.prototype.updateAuthorisationRestriction=function(UpdateAuthReq)//The  updateAuthorisationRestriction function
{
//    var isAuthreq=new IsAuthorisedRequest();
//    isAuthreq.setUserID(UpdateAuthReq.getUserID());
//    isAuthreq.getServiceIdentifier().setInterfaceName("Authorization");
//    isAuthreq.getServiceIdentifier().setMethodName("updateAuthorizationRestriction");
//    if (!isAuthorized(UpdateAuthReq.getUserID())){
//        throw NotAuthorizeddExeption;
//    }
//    else
//    {
        // Retrieve
        var MongoClient = require('mongodb').MongoClient;

        // Connect to the db
        MongoClient.connect("mongodb://localhost:27017/authorization", function(err, db) {
            if(!err) {
                console.log("We are connected");
            }
        });

//    }
};
var UpdateAuthorizationRestrictionRequest;
UpdateAuthorizationRestrictionRequest=function()
{
    var userID;
    this.userID = null;
    var AuthorizationRestriction;
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
var UpdateAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
};
var AuthorizationRestriction=function()//used by everyone
{
    var SRestriction=new ServiceRestriction();
};
var ServiceRestriction=function()//used by everyone
{
    var minimumStatusPoints;
    var SIdentifier;
};
ServiceRestriction.prototype.setServiceRestriction=function(minimumStatusPoints,SIdentifier)
{
    this.minimumStatusPoints=minimumStatusPoints;
    this.SIdentifier=SIdentifier;
}
var ServiceIdentifier=function()//used by everyone
{
    var fullyQualifiedInterfaceName;
    var methodName;
};
ServiceIdentifier.prototype.setServiceIdentifier=function(fullyQualifiedInterfaceName,methodName)
{
    this.fullyQualifiedInterfaceName=fullyQualifiedInterfaceName;
    this.methodName=methodName;
}

    function addAuthorizationRestriction(AddAuthorizationRestrictionRequest)
    {
        var addAuthorizationRestriction;
        if (!isAuthorized(userId, "addAuthorisationRestriction"))
        {
            throw "NotAuthorizedExeption";
        }
        addAuthorizationRestriction.isAdded = updateAuthorisationRestriction(userId, "addAuthorisationRestriction").isUpdated;
        return addAuthorizationRestriction;
    }

///////////////optionA(no parameter)
    function getAuthorizationRestrictions()
    {
        var authorizationRestriction;

        var objArray = db.tableName.find();

        for(var i=0;i<objArray.size;i++)
        {
            authorizationRestriction[i] = objArray.Array[i].Object.name;
        }
        return authorizationRestriction;
    }
///////////////optionB(with parameter)
function getAuthorizationRestrictions(getAuthoizationsRestrictionRequest)
{
    var authorizationRestriction;

    authorizationRestriction.name = db.tableName.find({name:getAuthoizationsRestrictionRequest})

    return authorizationRestriction;
}