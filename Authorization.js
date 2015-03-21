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
    Space.findById(((UpdateAuthReq.getAuthorizationRestriction()).getARServiceRestriction()).getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName(), function(err, user) {
        if (err) throw err;

        // change the users location
        Space.ranking = UpdateAuthReq.getAuthorizationRestriction().getARServiceRestriction().getServiceRestrictionMinimumStatusPoints();

        // save the user
        Space.save(function(err) {
            if (err) throw err;

            console.log('User successfully updated!');
        });

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
AuthorizationRestriction.prototype.setServiceRestriction=function(ServiceRestriction)
{
    this.SRestriction=ServiceRestriction;
};
AuthorizationRestriction.prototype.getARServiceRestriction=function()
{
    return this.SRestriction;
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
var sRastriction=new ServiceRestriction;
sIdentifier.setServiceIdentifier("Threads","updateAuthorisationRestriction");
sRastriction.setServiceRestriction(5,sIdentifier);
authorizationRestriction.setServiceRestriction(sRastriction);
testUpdateAuth.setUserID("u12118282");
testUpdateAuth.setAuthorizationRestriction(authorizationRestriction);

authorization.updateAuthorisationRestriction(testUpdateAuth);
/////////////////////////test end//////////////////////////////////