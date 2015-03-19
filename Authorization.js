var servicePointsSize=3;
var servicePoints;
servicePoints.service[0] = "addAuthorizationRestriction";//aren't theses supposed to be the serrvices we restrict? i.e post,comment,upload file,etc. [Shaun]
servicePoints.service[1] = "removeAuthorizationRestriction";
servicePoints.service[2] = "getAuthorizationRestrictions";
servicePoints.points[0] = 0;
servicePoints.points[1] = 0;
servicePoints.points[2] = 0;

function updateAuthorisationRestriction(username,restrictionName,level)
{
    if(!isAuthorized(username,"updateAuthorisationRestriction"))
        throw "NotAuthorizedExeption";
    for(var i= 0;i<servicePointsSize;i++) {
        if (restrictionName == servicePoints.sevice[i]) {
            servicePoints.points[i] = level;
            return true;
        }
    }
    return false;
}

function addAuthorisationRestriction(username,restrictionName,level)
{
    if(!isAuthorized(username,"addAuthorisationRestriction"))
        throw "NotAuthorizedExeption";
    return updateAuthorisationRestriction(username,restrictionName,level);
}

function getAuthorizationRestriction(restriction)//my function is supposed to return the restriction that can be updated. i.e if user is restricted to post, then i return this authority (postRestriction)so it can be updated. [Shaun]
{
    var currRestriction;

    for(var i= 0;i<servicePointsSize;i++)
        if (restriction == servicePoints.sevice[i]) {
            currRestriction = servicePoints.sevice[i];
            break;
        }

    return currRestriction;
}