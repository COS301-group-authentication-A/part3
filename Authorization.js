var Authorization=fyunction()
{
    varservicePointsSize = 3;

    function updateAuthorisationRestriction(UpdateAuthorizationRestrictionRequest) {
        var UpdateAuthorizationRestriction;
        if (!isAuthorized(username, "updateAuthorisationRestriction"))
            throw "NotAuthorizedExeption";
        for (var i = 0; i < servicePointsSize; i++) {
            if (updateAuthorizationRestrictionRequest.restrictionName == servicePoints.sevice[i]) {
                servicePoints.points[i] = level;
                UpdateAuthorizationRestriction.isUpdated = true;
                return UpdateAuthorizationRestriction;
            }
        }

        UpdateAuthorizationRestriction.isUpdated = false;
        return UpdateAuthorizationRestriction;
    }
}
