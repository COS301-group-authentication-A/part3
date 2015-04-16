//var csds = require('./csds');
var connect = require('./connect.js');//to connect to the database
var Authorization;
var mongoose;
mongoose= require('mongoose');
//createing the schema
var authSchema = new mongoose.Schema({
    methodName: String,
    moduleID: String,
    roleName: String,
    StatusPoints: Number
}, {collection: 'Authorization'});
Authorization = function () {

};

/**updateAuthorizationRestriction that updates the Restriction in the Database
 * @param UpdateAuthReq -an UpdateAuthorizationRestrictionRequest object
 */
Authorization.prototype.updateAuthorizationRestriction=function(UpdateAuthReq)//The  updateAuthorisationRestriction function
{
    var buzzSpace=new buzzSpaces();
    if(!buzzSpace.isAdministrator(UpdateAuthReq.getUserID()))
    {
        return new Error("notAuthorizedExeption");
    }
    var auth;
    // checks if it is the first time accesing the database
    if(mongoose.models.Authorization) {
        auth = mongoose.model('Authorization');
    }else {
        auth = mongoose.model('Authorization', authSchema);
    }
    //finding the entry and updateing it
        auth.findOneAndUpdate(
            {"methodName":(UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName()),
            "moduleID":(UpdateAuthReq.getAuthorizationRestriction().getModuleID()),"roleName":(UpdateAuthReq.getAuthorizationRestriction().getRoleName())},
            {
                "$set": {
                    "StatusPoints": UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints()
                }
            },
            function (err) {
                if (err) {
                    console.log("Entry not found");
                    return null;
                } else {
                    return new UpdateAuthorizationRestrictionsResult(UpdateAuthReq.getAuthorizationRestriction());
                }
            });
};

var UpdateAuthorizationRestrictionRequest;
/**UpdateAuthorizationRestrictionRequest class that is passed through to updateAuthorizationRestriction
 *
 * @param userID - A string containing the userID of that person
 * @param AuthorizationRestriction - An AuthorizationRestriction object
 * @constructor
 */
UpdateAuthorizationRestrictionRequest=function(userID,AuthorizationRestriction)
{
    var userID;
    this.userID = userID;
    var AuthorizationRestriction;
    this.AuthorizationRestriction=AuthorizationRestriction;
};
/**Gets the userID from the internal veriable*/
UpdateAuthorizationRestrictionRequest.prototype.getUserID=function()
{
    return this.userID;
};
/**Gets the AuthorizationRestriction from the internal veriable*/
UpdateAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};
/**UpdateAuthorizationRestrictionsResult class
 *
 * @param AuthorizationRestriction - an AuthorizationRestriction object
 * @constructor
 */
var UpdateAuthorizationRestrictionsResult=function(AuthorizationRestriction)
{
    var  AuthorizationRestriction;
    this.AuthorizationRestriction=AuthorizationRestriction;
};
/**Gets the AuthorizationRestriction from the internal veriable*/
UpdateAuthorizationRestrictionsResult.prototype,getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};




///////////////////////////////RemoveAuthorisationRestrictionResult class and functions///////////////////////////////////////////////////
/**RemoveAuthorizationRestrictionsResult class
 * @param AuthorizationRestriction - an AuthorizationRestriction object
 * @constructor
 */
var RemoveAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
};
/**Returns the stored AuthorizationRestriction object*/
RemoveAuthorizationRestrictionsResult.prototype,getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};
///////////////////////////////End of RemoveAuthorisationRestrictionResult///////////////////////////////////////////////////


/**updateAuthorizationRestriction that updates the Restriction in the Database
 * @param RemoveAuthorizationReq is a RemoveAuthorizationRestrictionRequest Object
 */
Authorization.prototype.removeAuthorizationRestriction=function(RemoveAuthorizationReq)//The  removeAuthorisationRestriction function
{
    //Setting Minimum status points to zero || logically removing the restriction
    RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().setServicerestrictionMinimumStatusPoints(0);
    //test
    var s = RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints();

    //call update with the updated points to change it in the database
    b = new UpdateAuthorizationRestrictionRequest(RemoveAuthorizationReq.getUserID(),RemoveAuthorizationReq.getAuthorizationRestriction());
    res = this.updateAuthorizationRestriction(b);

    //Return an error if an error was what is returned by update else nothing
    if(typeof(res) == Error.toString()){
        console.log("Returning error");
        return res;
    }else{
        console.log("Authorization restriction removed");
    }
    //else if(){
    //}
};

//////////////////////End of RemoveAuthorisationRestrictionResult class and functions//////////////////////////

//////////////////////////////RemoveAuthorisationRestrictionRequest class and functions//////////////////////////////////////////
/**RemoveAuthorizationRestrictionRequest is used to call removeAuthorizationRestriction
 * @param userID - A string containing the userID of that person
 * @param _AuthorizationRestriction - An AuthorizationRestriction object
 * @constructor
 */
var RemoveAuthorizationRestrictionRequest;
RemoveAuthorizationRestrictionRequest=function(userID,_AuthorizationRestriction)
{
    var userID;
    this.userID = userID;
    var AuthorizationRestriction;
    this.AuthorizationRestriction=_AuthorizationRestriction;
};
/**
* returns the stored userID
*/
RemoveAuthorizationRestrictionRequest.prototype.getUserID=function()
{
    return this.userID;
};
/**
* @param _userID string containing the new userID
* sets the stored userID to the one passed through as a parameter
*/
RemoveAuthorizationRestrictionRequest.prototype.setUserID=function(_userID)
{
    this.userID=_userID;
};
/**
* @param _AuthorizationRestriction - an object containing the new AuthorizationRestriction
*/
RemoveAuthorizationRestrictionRequest.prototype.setAuthorizationRestriction=function(_AuthorizationRestriction)
{
    this.AuthorizationRestriction=_AuthorizationRestriction;
};
/**
* Returns the stored AuthorizationRestriction object
*/
RemoveAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};

///////////////////////////////End of RemoveAuthorisationRestriction request class and functions///////////////////////////////////////////////

var AddAuthorizationRestrictionRequest;
/**
 * populates the necessary variables required to add a new restriction
 * @param _userID
 * @param _AuthorizationRestriction
 * @constructor
 */
AddAuthorizationRestrictionRequest = function(_userID, _AuthorizationRestriction)
{
    var AuthorizationRestriction;
    this.AuthorizationRestriction=_AuthorizationRestriction;
    var userID;
    this.userID = _userID;
};

/**
 * gets the global userID variable
 * @returns {*|AddAuthorizationRestrictionRequest.userID}
 */
AddAuthorizationRestrictionRequest.prototype.getUserID=function()
{
    return this.userID;
};

/**
 * sets the global userID variable
 * @param _userID
 */
AddAuthorizationRestrictionRequest.prototype.setUserID=function(_userID)
{
    this.userID=_userID;
};

/**
 * sets the global AuthorizationRestriction variable with new AuthorizationRestriction
 * @param _AuthorizationRestriction
 */
AddAuthorizationRestrictionRequest.prototype.setAuthorizationRestriction=function(_AuthorizationRestriction)
{
    this.AuthorizationRestriction=_AuthorizationRestriction;
};

/**
 * sets the global AuthorizationRestriction variable
 * @returns {*|AddAuthorizationRestrictionRequest.AuthorizationRestriction}
 */
AddAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};

/**
 * adds a new authorization restriction via the updateAuthorizationRestriction function and returns a result based on updateAuthorizationRestriction result
 * @param AddAuthorizationReq
 * @returns {*}
 */
Authorization.prototype.addAuthorizationRestriction=function(AddAuthorizationReq)
{
    req = new UpdateAuthorizationRestrictionRequest(AddAuthorizationReq.getUserID(), AddAuthorizationReq.getAuthorizationRestriction());
    var res;
    res = this.updateAuthorizationRestriction(req);
    if (res == null)
    {
        console.log("Returning null");
        return res;
    }
    else
    if(typeof(res) == Error.toString())
    {
        console.log("Returning error");
        return res;
    }
    else
    {
        console.log("Authorization restriction added");
        return new AddAuthorizationRestrictionsResult(res.getUpdateAuthorizationRestriction());
    }
};

/**
 * puts updateAuthorizationRestriction into a local variable within AddAuthorizationRestrictionResult
 * @param AuthorizationRestriction
 * @constructor
 */
var AddAuthorizationRestrictionsResult=function(AuthorizationRestriction)
{
    var  AuthorizationRestriction;
    this.AuthorizationRestriction = AuthorizationRestriction;
};

AddAuthorizationRestrictionsResult.prototype.getAddAuthorizationRestrictions=function()
{
    return this.AuthorizationRestriction;
}

/**AuthorizationRestriction class
 *
 * @param serviceRestriction - A serviceRestriction object
 * @param moduleID - A moduleID passed as a String
 * @param roleName - A roleName passed as a string
 * @constructor
 */
var AuthorizationRestriction=function(serviceRestriction,moduleID,roleName)//used by everyone
{
    var moduleID;
    this.moduleID=moduleID;
    var roleName;
    this.roleName=roleName;
    var ServiceRestriction;
    this.ServiceRestriction=serviceRestriction;
};
/** Returns the internal ServiceRestriction*/
AuthorizationRestriction.prototype.getServiceRestriction=function()
{
    return this.ServiceRestriction;
};
/**Returns the module ID*/
AuthorizationRestriction.prototype.getModuleID=function()
{
    return this.moduleID;
};
/**Returns the Role Name*/
AuthorizationRestriction.prototype.getRoleName=function()
{
    return this.roleName;
};
/**ServiceRestriction class
 *
 * @param minimumStatusPoints - status points to update too or to add
 * @param serviceIdentifier - A serviceIdentifier object
 * @constructor
 */
var ServiceRestriction=function(minimumStatusPoints,serviceIdentifier)//used by everyone
{
    var minimumStatusPoints;
    this.minimumStatusPoints=minimumStatusPoints;
    var ServiceIdentifier;
    this.ServiceIdentifier=serviceIdentifier;
};
/**Returns the internal Status points*/
ServiceRestriction.prototype.getServiceRestrictionMinimumStatusPoints=function() {
    return this.minimumStatusPoints;
};


ServiceRestriction.prototype.setServicerestrictionMinimumStatusPoints=function(_minStatPoints){
  this.minimumStatusPoints= _minStatPoints;
};

/**Returns the internal ServiceIdentifier object*/
ServiceRestriction.prototype.getServiceRestrictionServiceIdentifier=function() {
    return this.ServiceIdentifier;
};
/**ServiceIdentifier class
 *
 * @param fullyQualifiedInterfaceName - The name of the section as a String
 * @param methodName - The name of the function as a String
 * @constructor
 */
var ServiceIdentifier=function(fullyQualifiedInterfaceName,methodName)//used by everyone
{
    var fullyQualifiedInterfaceName;
    var methodName;
    this.fullyQualifiedInterfaceName=fullyQualifiedInterfaceName;
    this.methodName=methodName;
};
/** returns the internal Method Name*/
ServiceIdentifier.prototype.getServiceIdentifierMethodName=function()
{
    return this.methodName;
};
/**returns the InterfaceName*/
ServiceIdentifier.prototype.getServiceIdentifierInterfaceName=function()
{
    return this.fullyQualifiedInterfaceName;
};

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----GetAuthorizationRestrictions----%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/**getAuthorizationRestriction gets the Restrictions from the Database
 /*
 * @param getAuthorizationRequest -an GetAuthorizationRestrictionRequest object
 */
Authorization.prototype.getAuthorizationRestriction = function(getAuthorizationRequest)
{
    //check if space is active
    var buzzSpace = buzzSpaces();
    //holds final object for GUI
    var resultObject;
    //for schema
    var check;

    if(mongoose.models.Authorization)
    {
        check = mongoose.model('Authorization');
    }
    else
    {
        check = mongoose.model('Authorization', authSchema);
    }

    /*if(buzzSpace.getModuleID() != getAuthorizationRequest.getAuthorizationRestriction().getModuleID())
     {
     console.log("buzzSpace does not exist");
     return null;
     }
     else
     {*/
    check.find(
    {
        'moduleID': getAuthorizationRequest.getAuthorizationRestriction().getModuleID()
    }).stream().on('data', function(doc)
    {
        console.log("MethodName : "+doc.methodName+"\n RoleName : "+doc.roleName+"\n StatusPoints : "+doc.StatusPoints);
        console.log("\n");
        resultObject = doc;
    }).on('error', function(err)
    {
        console.log("Restrictions could not be returned");
    });

    return new GetAuthorizationRestrictionsResult(getAuthorizationRequest.getAuthorizationRestriction());
    //}
}

//--GetAuthorizationRestrictionsResult and its helper functions--//
/**GetAuthorizationRestrictionsResult class
 *
 * @param AuthorizationRestriction - an AuthorizationRestriction object
 * @constructor
 */
var GetAuthorizationRestrictionsResult=function(AuthorizationRestriction)
{
    var  AuthorizationRestriction;
    this.AuthorizationRestriction=AuthorizationRestriction;
};

//--GetAuthorizationRestrictionRequest and its helper functions--//
/**UpdateAuthorizationRestrictionRequest class that is passed through to updateAuthorizationRestriction
 *
 * @param AuthorizationRestriction - An AuthorizationRestriction object
 * @constructor
 */
GetAuthorizationRestrictionRequest=function(AuthorizationRestriction)
{
    var AuthorizationRestriction;
    this.AuthorizationRestriction=AuthorizationRestriction;
};
GetAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


//#START isAuthorized
/*
 * isAuthorizedRequest:
 * 	@param useri: string
 *	@param serviceIdentifier: ServiceIdentifier object
 */
var isAuthorizedRequest;
isAuthorizedRequest= function(userID, ServiceIdentifier)
{
  var userId;
  var serviceIdentifier;

  this.userId = userID;
  this.serviceIdentifier = ServiceIdentifier;
};

//returns the userId
isAuthorizedRequest.prototype.getUserID =function()
{
    return this.userId;
};

//returns serviceIdentifier object
isAuthorizedRequest.prototype.getisAuthorizedRequestServiceIdentifier=function()
{
    return this.serviceIdentifier;
};


/* isAuthorizedResult class
 *  @param isAuth - boolean virable
 *
 */
var isAuthorizedResult = function(isAuth)
{
    var isAuthorized;
    this.isAuthorized=isAuth;
};

isAuthorizedResult.prototype.getIsAuthorized=function()
{
  return this.isAuthorized;
};


/*
 * isAuthorized class
 *
 * @param isauthorizedRequest: isAuthorizedRequest object
 */

Authorization.prototype.isAuthorized = function(isauthorizedRequest)
{
	    var boolisAuthorized;

	    this.boolisAuthorized = false;

            if(isauthorizedRequest != null)
            {
		var AuthorizationRestrictionsMethodName;
		var authSchema;
		var auth;
		var role;
		AuthorizationRestrictionsMethodName = (isauthorizedRequest.getisAuthorizedRequestServiceIdentifier()).getServiceIdentifierMethodName();


		/*
		 * Create a new buzzSpace object, ProfileRequest object, roleRequest object and get
		 * the module.
		 */
                var buzzSpace=new buzzSpaces();
                var ProfileRequest=new GetProfileRequest(isauthorizedRequest.getUserID());
                var roleRequest=new getUsersRoleRequest(isauthorizedRequest.getUserID());
                var module=buzzSpace.getProfile(ProfileRequest).getModuleID();
                role=buzzSpace.getUsersRole(roleRequest).getUserRole();

                // checks if it is the first time accesing the database
                if(mongoose.models.Authorization)
                {
                    auth = mongoose.model('Authorization');
                }
                else
                {
                    auth = mongoose.model('Authorization', authSchema);
                }

			auth.findOne({"methodName": (AuthorizationRestrictionsMethodName) ,"moduleID": (module) ,"roleName": (role) },function (err, doc){
				if (err)
				{
				    throw new Error("Entry not found");
				}
				else
				{


					      if(doc != null)
					      {
						    var point = parseInt(doc.StatusPoints)

                              			    var status=new Status();
						    var StatusProfilevalue = status.getStatusForProfile(isauthorizedRequest.getUserID());

						    if(StatusProfilevalue >= point)
						    {
						      this.boolisAuthorized = true;
						    }
						    else
						    {
						      this.boolisAuthorized = false;
						    }
					      }
					      else
					      {
						  this.boolisAuthorized = false;
					      }

				      mongoose.connection.close();
				    return new isAuthorizedResult(this.boolisAuthorized);
				}
			    });
		}
            return new isAuthorizedResult(this.boolisAuthorized);

};

//#END isAuthorized





//DUMMY BUZZSPACE HAS TO BE REMOVED BEFORE INTERGRATION
/*
 * @param studentAcademicYear
 * 	it is the academic year of the student
 * @param isOpen
 * 	boolean value
 * @param studentModuleid
 * 	e.g COS330
 */
// Has to be removed it is just for testing
//*********************************************************************

var buzzSpaces=function()
{

};
buzzSpaces.prototype.getUsersRole = function(getUsersRoleRequest)
{
    return new getUsersRoleResult("Student");
};
var getUsersRoleRequest=function(uID)
{
    var userID=uID;
};
var getUsersRoleResult=function(role)
{
    var role;
    role= role;
};
getUsersRoleResult.prototype.getUserRole=function()
{
    return "Student";
};
buzzSpaces.prototype.getProfile = function(getProfileRequest)
{
    var profile;
    profile=new Profile(getProfileRequest.getUserID(),"COS 301")
    return profile;
};
buzzSpaces.prototype.isAdministrator=function(userID)
{
    return true;
}


var GetProfileRequest = function(userID)
{
    var userId;
    this.userId = userId;
};
GetProfileRequest.prototype.getUserID= function () {
    return this.userId
};
var Profile=function(userID,moduleID)
{
    var userID;
    this.userID=userID;
    var moduleID;
    this.moduleID=moduleID;
};
Profile.prototype.getUserID=function()
{
    return this.userID;
};
Profile.prototype.getModuleID=function()
{
    return this.moduleID;
};

var Status=function() {

};
Status.prototype.getStatusForProfile=function(UID)
{
    return 2;
};

//*********************************************************************

///////////////unit testing///////////////////////////
Authorization.prototype.test=function()
{
    console.log("\nTesting Update");
    ////////////////////////////test Update////////////////////////////////////
   var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorizationRestriction");
    var serviceRestriction=new ServiceRestriction(3,sIdentifier);
    var authRestriction=new AuthorizationRestriction(serviceRestriction,"COS 301","Student");
    var updateAuth=new UpdateAuthorizationRestrictionRequest("u12118282",authRestriction);
    var auth=new Authorization;
    auth.updateAuthorizationRestriction(updateAuth);
/////////////////////////test Update end//////////////////////////////////

    /*console.log("\nTesting isAuthorized");
//////////////////////////test isAuthorized///////////////////////////////
    var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorizationRestriction");
    var isAuthorizedReq= new isAuthorizedRequest("u12118282",sIdentifier);
    var auth0=new Authorization;
    var res=auth0.isAuthorized(isAuthorizedReq);*/
//////////////////////////test isAuthorized end////////////////////////////////

    console.log("\nTesting Remove");
/////////////////////////test removeAuth /////////////////////////////////////////////////////
    var sIdentifier=new ServiceIdentifier("Authorization","removeAuthorizationRestriction");
    var serviceRestriction=new ServiceRestriction(0,sIdentifier);
    var authRestriction=new AuthorizationRestriction(serviceRestriction,"COS 301","lecturer");
    var removeAuth=new RemoveAuthorizationRestrictionRequest("u12230830",authRestriction);
    var auth=new Authorization;
    auth.removeAuthorizationRestriction(removeAuth);
    console.log("\n");
/////////////////////////////test remmoveAuth end////////////////////////////////////////////////////////////

    console.log("\nTesting Get");
////////////////////////////test getAuth////////////////////////////////////
    var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorizationRestriction");
    var serviceRestriction=new ServiceRestriction(5,sIdentifier);
    var authRestriction=new AuthorizationRestriction(serviceRestriction,"COS 301","Student");
    var updateAuth=new GetAuthorizationRestrictionRequest(authRestriction);
    var auth=new Authorization;
    auth.getAuthorizationRestriction(updateAuth);
    console.log(auth.getAuthorizationRestriction(updateAuth));

/////////////////////////test getAuth end//////////////////////////////////
};

console.log("Hello");
var a=new Authorization;
a.test();
//END DUMMY FUNCTIONS
