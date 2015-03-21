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
//    if (!isAuthorized(UpdateAuthReq.getUserID())){
//        throw NotAuthorizeddExeption;
//    }
//    else
//    {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/authentication');

    
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
};
ServiceRestriction.prototype.getServiceRestrictionMinimumStatusPoints=function() {
    return this.minimumStatusPoints;
};
ServiceRestriction.prototype.getServiceRestrictionServiceIdentifier=function() {
    return this.SIdentifier;
};
var ServiceIdentifier=function()//used by everyone
{
    var fullyQualifiedInterfaceName;
    var methodName;
};
ServiceIdentifier.prototype.setServiceIdentifier=function(fullyQualifiedInterfaceName,methodName)
{
    this.fullyQualifiedInterfaceName=fullyQualifiedInterfaceName;
    this.methodName=methodName;
};
ServiceIdentifier.prototype.getServiceIdentifierMethodName=function()
{
    return this.methodName;
};
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
////////////////////////////test////////////////////////////////////
//testUpdateAuth.setAuthorizationRestriction();
var authorization=new Authorization
var authorizationRestriction=new AuthorizationRestriction;
var testUpdateAuth=new UpdateAuthorizationRestrictionRequest;
var sIdentifier=new ServiceIdentifier;
var sratriction=new ServiceRestriction;
sIdentifier.setServiceIdentifier("Threads","updateAuthorisationRestriction");
sratriction.setServiceRestriction(5,sIdentifier);
testUpdateAuth.setUserID("u12118282");
testUpdateAuth.setAuthorizationRestriction();

authorization.updateAuthorisationRestriction(testUpdateAuth);
/////////////////////////test end//////////////////////////////////