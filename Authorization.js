var Authorization;
Authorization = function () {//Authorization class

};
Authorization.prototype.updateAuthorisationRestriction=function(UpdateAuthorizationRestrictionRequest)//The  updateAuthorisationRestriction function
{
    if (!isAuthorized(updateAuthorisationRestrictionRequest.getuserID(), "updateAuthorisationRestriction"))
        throw NotAuthorizedExeption;
    for (var i = 0; i < servicePointsSize; i++) {
        if (updateAuthorizationRestrictionRequest.get == servicePoints.sevice[i]) {
            servicePoints.points[i] = level;
            UpdateAuthorizationRestriction.isUpdated = true;
            return UpdateAuthorizationRestriction;
        }
    }

    UpdateAuthorizationRestriction.isUpdated = false;
    return UpdateAuthorizationRestriction;
};

var AuthorizationRestriction=function()//used by everyone
{
    var SRestriction=new ServiceRestriction();
};
var ServiceRestriction=function()//used by everyone
{
    var minimumStatusPoints;
    var SIdentifier=new ServiceIdentifier();
};
var ServiceIdentifier=function()//used by everyone
{
    var fullyQualifiedInterfaceName;
    var methodName;
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
