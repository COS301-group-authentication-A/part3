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
    var mongoose = require('mongoose');
    var spacesSchema = mongoose.Schema({
        _id: { type: String, required: true, unique: true },
        Ranking: { type: String, required: true }
    });
    mongoose.connect('mongodb://localhost/authorization');
    var Space = mongoose.model('Authentication', spacesSchema)
    Space.findById(((UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction()).getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName()), function(err, user) {
        if (err) throw err;

        // change the users location
        Space.ranking = UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints();

        // save the user
        Space.save(function(err) {
            if (err) throw err;

            console.log('User successfully updated!');
        });

    });
//    }
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
var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorizationRestriction");
var serviceRestriction=new ServiceRestriction(5,sIdentifier);
var authRestriction=new AuthorizationRestriction(serviceRestriction);
var updateAuth=new UpdateAuthorizationRestrictionRequest("u12118282",authRestriction);
var auth=new Authorization;
auth.updateAuthorisationRestriction(updateAuth);
/////////////////////////test end//////////////////////////////////