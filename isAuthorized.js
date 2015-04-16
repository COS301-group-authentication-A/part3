//var csds = require('./csds');
// var test = require('unit.js');
var worknow = new Object();
worknow.atho = function()
{
var connect = require('../Database/connect.js');
//var csds = require('./csds');
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
  if(this instanceof UpdateAuthorizationRestrictionRequest)
  {  
    var userID;
    this.userID = userID;
    var AuthorizationRestriction;
    this.AuthorizationRestriction=AuthorizationRestriction;
  }
  else return new UpdateAuthorizationRestrictionRequest;
    
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
var RemoveAuthorizationRestrictionsResult=function()
{
	if(this instanceof RemoveAuthorizationRestrictionsResult)
        {
	  var  AuthorizationRestriction;
        }
        else return new RemoveAuthorizationRestrictionsResult;
};
///////////////////////////////End of RemoveAuthorisationRestrictionResult///////////////////////////////////////////////////

Authorization.prototype.removeAuthorisationRestriction=function(RemoveAuthorizationReq)//The  removeAuthorisationRestriction function
{
	try	{
        	RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().setServiceRestrictionStatusPoints(0);
        	var s = RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints();
        	//console.log(RemoveAuthorizationReq.getUserID() +" ... " + s);
        	b = new UpdateAuthorizationRestrictionRequest(RemoveAuthorizationReq.getUserID(),RemoveAuthorizationReq.getAuthorizationRestriction());

	        //var uRestriction = new Authorization();
	        this.updateAuthorisationRestriction(b);
	    //return new RemoveAuthorizationRestrictionsResult();
	   // the spec says that there is no need to return anything for remove
	}catch(err){
		//throw err("Not Authorized exception");
	}
};
///////////////////////////////RemoveAuthorisationRestrictionResult class and functions//////////////////////////
var RemoveAuthorizationRestrictionsResult;
RemoveAuthorizationRestrictionsResult = function () { 
	if(this instanceof RemoveAuthorizationRestrictionsResult)
        {
	    var AuthorizationRestriction;
        }
        else return new RemoveAuthorizationRestrictionsResult;
  
};
//////////////////////End of RemoveAuthorisationRestrictionResult class and functions//////////////////////////

//////////////////////////////RemoveAuthorisationRestrictionRequest class and functions//////////////////////////////////////////

var RemoveAuthorizationRestrictionRequest;
RemoveAuthorizationRestrictionRequest=function(userID,_AuthorizationRestriction)
{
	if(this instanceof RemoveAuthorizationRestrictionRequest)
        {
	    var userID;
	    this.userID = userID;
	    var AuthorizationRestriction;
	    this.AuthorizationRestriction=_AuthorizationRestriction;
        }
        else return new RemoveAuthorizationRestrictionRequest;
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

//////////////////////////////AddAuthorizationRestrictionRequest class and functions////////////////////////////////////

var AddAuthorizationRestrictionRequest;
AddAuthorizationRestrictionRequest = function(_userID, _AuthorizationRestriction)
{
	if(this instanceof AddAuthorizationRestrictionRequest)
        {
	  var AuthorizationRestriction;
	  this.AuthorizationRestriction=_AuthorizationRestriction;
	  var userID;
	  this.userID = _userID;
        }
        else return new AddAuthorizationRestrictionRequest;
    
    
};

AddAuthorizationRestrictionRequest.prototype.getUserID=function()
{
    return this.userID;
};
AddAuthorizationRestrictionRequest.prototype.setUserID=function(_userID)
{
    this.userID=_userID;
};

AddAuthorizationRestrictionRequest.prototype.setAuthorizationRestriction=function(_AuthorizationRestriction)
{
    this.AuthorizationRestriction=_AuthorizationRestriction;
};
AddAuthorizationRestrictionRequest.prototype.getAuthorizationRestriction=function()
{
    return this.AuthorizationRestriction;
};
//////////////////////////////End of AddAuthorizationRestrictionRequest class and functions/////////////////////////////
//////////////////////////////AddAuthorisationRestriction class and functions///////////////////////////////////////////
Authorization.prototype.addAuthorisationRestriction=function(AddAuthorizationReq)
{
    //req1 = new isAuthorizedRequest(AddAuthorizationReq.getUserID(),GET SERVICE IDENTIFIER)
    //if (this.isAuthorized(req1).getIsAuthorized == true)
    //{
        req2 = new UpdateAuthorizationRestrictionRequest(AddAuthorizationReq.getUserID(), AddAuthorizationReq.getAuthorizationRestriction());
        this.updateAuthorisationRestriction(req2);
        return new AddAuthorizationRestrictionsResult();
    //}
    //else
    //{
    //  throw new Error("Not Authorized Exception");
    //}

};
///////////////////////////////End of AddAuthorisationRestriction class and functions///////////////////////////////////
///////////////////////////////AddAuthorisationRestrictionResult class and functions////////////////////////////////////
var AddAuthorizationRestrictionsResult=function()
{
	if(this instanceof AddAuthorizationRestrictionsResult)
        {
	    var  AuthorizationRestriction;
        }
        else return new AddAuthorizationRestrictionsResult;
};
//////////////////////End of AddAuthorisationRestrictionResult class and functions//////////////////////////////////////

/**AuthorizationRestriction class
 *
 * @param serviceRestriction - A serviceRestriction object
 * @param moduleID - A moduleID passed as a String
 * @param roleName - A roleName passed as a string
 * @constructor
 */
var AuthorizationRestriction=function(serviceRestriction,moduleID,roleName)//used by everyone
{
	if(this instanceof AuthorizationRestriction)
        {
	    var moduleID;
	    this.moduleID=moduleID;
	    var roleName;
	    this.roleName=roleName;
	    var ServiceRestriction;
	    this.ServiceRestriction=serviceRestriction;
        }
        else return new AuthorizationRestriction(serviceRestriction,moduleID,roleName);
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
var ServiceRestriction = new Object();
ServiceRestriction=function(minimumStatusPoints,serviceIdentifier)//used by everyone
{
	if(this instanceof ServiceRestriction)
        {
	    var minimumStatusPoints;
	    this.minimumStatusPoints=minimumStatusPoints;
	    var ServiceIdentifier;
	    this.ServiceIdentifier=serviceIdentifier;
        }
        else return new ServiceRestriction(minimumStatusPoints,serviceIdentifier);
};
/**Returns the internal Status points*/
ServiceRestriction.prototype.getServiceRestrictionMinimumStatusPoints=function() {
    return this.minimumStatusPoints;
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
	"use strict"
        console.log('in ServiceIdentifier ' + methodName);
  
	if(this instanceof ServiceIdentifier)
        {
	  var fullyQualifiedInterfaceName;
	  var methodName;
	  this.fullyQualifiedInterfaceName=fullyQualifiedInterfaceName;
	  this.methodName=methodName;
        }
        else return new ServiceIdentifier(fullyQualifiedInterfaceName,methodName);
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
	var check;
	
	if(mongoose.models.Authorization) 
	{
		check = mongoose.model('Authorization');
	}
	else 
	{
		check = mongoose.model('Authorization', authSchema);
	}
	
	check.find(
	{
		'methodName': getAuthorizationRequest.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName()
	},
	function (err) 
	{
		if (err) 
		{
			console.log("Restriction not found");
			return null;
		} 
		else 
		{	console.log("Restriction found and being returned");
			return new GetAuthorizationRestrictionsResult(getAuthorizationRequest.getAuthorizationRestriction());//take note of this getAutho...
		}
	});
}

//--GetAuthorizationRestrictionsResult and its helper functions--//
/**GetAuthorizationRestrictionsResult class
 *
 * @param AuthorizationRestriction - an AuthorizationRestriction object
 * @constructor
 */
var GetAuthorizationRestrictionsResult=function(AuthorizationRestriction)
{
	if(this instanceof GetAuthorizationRestrictionsResult)
        {
	    var  AuthorizationRestriction;
	    this.AuthorizationRestriction=AuthorizationRestriction;
        }
        else return new GetAuthorizationRestrictionsResult(AuthorizationRestriction);
};

//--GetAuthorizationRestrictionRequest and its helper functions--//
/**UpdateAuthorizationRestrictionRequest class that is passed through to updateAuthorizationRestriction
 *
 * @param AuthorizationRestriction - An AuthorizationRestriction object
 * @constructor
 */
var GetAuthorizationRestrictionRequest=function(AuthorizationRestriction)
{
	if(this instanceof GetAuthorizationRestrictionRequest)
        {
	  var AuthorizationRestriction;
	  this.AuthorizationRestriction=AuthorizationRestriction;
        }
        else return new GetAuthorizationRestrictionRequest(AuthorizationRestriction);
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
	if(this instanceof isAuthorizedRequest)
        {
	    var userId;
	    var serviceIdentifier;

	    this.userId = userID;
	    this.serviceIdentifier = ServiceIdentifier;
        }
        else return new isAuthorizedRequest(userID, ServiceIdentifier);
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
	if(this instanceof isAuthorizedResult)
        {
	    var isAuthorized;
	    this.isAuthorized=isAuth;
        }
        else return new isAuthorizedResult(isAuth);
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
				    return new Error("Entry not found");
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
    	if(this instanceof buzzSpaces)
        {
        }
        else return new buzzSpaces();

};
buzzSpaces.prototype.getUsersRole = function(getUsersRoleRequest)
{
    return new getUsersRoleResult("Student");
};
var getUsersRoleRequest=function(uID)
{
    	if(this instanceof getUsersRoleRequest)
        {
	  var userID=uID;
        }
        else return new getUsersRoleRequest(uID);
  
};
var getUsersRoleResult=function(role)
{
    	if(this instanceof getUsersRoleResult)
        {
	    var role;
	    role= role;
        }
        else return new getUsersRoleResult(role);
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
    	if(this instanceof GetProfileRequest)
        {
	    var userId;
	    this.userId = userID;
        }
        else return new GetProfileRequest(userID);
  
};
GetProfileRequest.prototype.getUserID= function () {
    return this.userId
};
var Profile=function(userID,moduleID)
{
    	if(this instanceof Profile)
        {
	    var userID;
	    this.userID=userID;
	    var moduleID;
	    this.moduleID=moduleID;
        }
        else return new Profile(userID,moduleID);
  
  
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
    	if(this instanceof Status)
        {
        }
        else return new Status();
  
};
Status.prototype.getStatusForProfile=function(UID)
{
    return 2;
};

//   return {ServiceIdentifier: ServiceIdentifier,Authorization: Authorization, ServiceRestriction: ServiceRestriction, AuthorizationRestriction: AuthorizationRestriction, UpdateAuthorizationRestrictionRequest: UpdateAuthorizationRestrictionRequest, isAuthorizedRequest: isAuthorizedRequest, RemoveAuthorizationRestrictionRequest: RemoveAuthorizationRestrictionRequest};
}

module.exports = worknow;
// module.exports = Authorization;
// module.exports = ServiceIdentifier;
// module.exports['@singleton'] = true;


//THIS CODE WOULD BE IN ANOTHER FILE e.g examples.js
var test = require('unit.js');
//var Authorization = require('./Authorization.js');



    describe('test cases',function()
    {
      it('testing isAuthorized', function(done)
      {
	var obj = require('./Authorization');
	var sIdentifier=obj.ServiceIdentifier("Authorization","updateAuthorizationRestriction");
	var isAuthorizedReq = obj.isAuthorizedRequest("u12118282",sIdentifier);
// 	var auth0 = new Authorization;
	var res = obj.isAuthorized(isAuthorizedReq);

	done();
      });
    });  


