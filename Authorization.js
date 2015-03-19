var servicePointsSize=3;
var servicePoints;
servicePoints.service[0] = "addAuthorizationRestriction";
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
