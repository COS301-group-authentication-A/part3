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
var RemoveAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
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
    var AuthorizationRestriction;
};
//////////////////////End of RemoveAuthorisationRestrictionResult class and functions//////////////////////////

//////////////////////////////RemoveAuthorisationRestrictionRequest class and functions//////////////////////////////////////////

var RemoveAuthorizationRestrictionRequest;
RemoveAuthorizationRestrictionRequest=function(userID,_AuthorizationRestriction)
{
    var userID;
    this.userID = userID;
    var AuthorizationRestriction;
    this.AuthorizationRestriction=_AuthorizationRestriction;
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
    var AuthorizationRestriction;
    this.AuthorizationRestriction=_AuthorizationRestriction;
    var userID;
    this.userID = _userID;
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
    try
    {
        req = new UpdateAuthorizationRestrictionRequest(AddAuthorizationReq.getUserID(), AddAuthorizationReq.getAuthorizationRestriction());
        this.updateAuthorisationRestriction(req);
        return new AddAuthorizationRestrictionsResult();
    }
    catch (err)
    {
        throw err("Not Authorized exception");
    }
};
///////////////////////////////End of AddAuthorisationRestriction class and functions///////////////////////////////////
///////////////////////////////AddAuthorisationRestrictionResult class and functions////////////////////////////////////
var UpdateAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
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
//**************************getAuthorizationRestriction***************************//

Authorization.prototype.getAuthorizationRestriction = function(getAuthorizationReq)
{
    var mongo = require('mongodb'),
        Server = mongo.Server,
        Db = mongo.Db;
    var server = new Server('45.55.154.156', 27017, {
        auto_reconnect: true
    });
    var db = new Db('Buzz', server);
    var onErr = function(err, callback) {
        db.close();
        callback(err);
    };

    var getAuthorizationRestrictionRequest = getAuthorizationReq.getServiceRestriction().getServiceRestrictionServiceIdentifier();

    this.getAuthorizationRestrictionResult(getAuthorizationRestrictionRequest, function(err, getAuthorizationRestrictionResult)
    {
        console.log(JSON.stringify(getAuthorizationRestrictionResult))
    });

    //getAuthorizationRestrictionResult
    exports.getAuthorizationRestrictionResult = function(req, callback)
    {
        var stringToReturn = "";

        db.open(function(err, db) {
            if (!err) {
                db.collection('Authorization', function(err, collection) {
                    if (!err)
                    {
                        collection.find({
                            'methodName': req//uncommenting this will return the specified restriction
                        }).toArray(function(err, docs)
                        {
                            if (!err)
                            {
                                db.close();
                                var intCount = docs.length;
                                if (intCount > 0)
                                {
                                    var strJson = "";
                                    for (var i = 0; i < intCount;)
                                    {
                                        strJson += '{"StatusPoints":"' + docs[i].StatusPoints + '"}'
                                        i = i + 1;
                                        if (i < intCount)
                                        {
                                            strJson += ',';
                                        }
                                    }
                                    strJson = '{"methodName":"' + req + '","count":' + intCount + ',"Authorization":[' + strJson + "]}"
                                    callback("", JSON.parse(strJson));
                                }
                            }
                            else
                            {
                                onErr(err, callback);
                            }
                        }); //end collection.find
                    }
                    else
                    {
                        onErr(err, callback);
                    }
                }); //end db.collection
            }
            else
            {
                onErr(err, callback);
            }
        }); // end db.open
    };
};
//***********************************end of getAuthorizationRestrictions************************************//




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
		var mongoose;
		var AuthorizationRestrictionsMethodName;
		var authSchema;
		var auth;
		var role;
		AuthorizationRestrictionsMethodName = (isauthorizedRequest.getisAuthorizedRequestServiceIdentifier()).getServiceIdentifierMethodName();


		mongoose= require('mongoose');
                var authSchema = new mongoose.Schema({
                    methodName: String,
                    moduleID: String,
                    roleName: String,
                    StatusPoints: Number
                }, {collection: 'Authorization'});

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
				    throw err("Entry not found");
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

    ////////////////////////////test Update////////////////////////////////////
   var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorizationRestriction");
    var serviceRestriction=new ServiceRestriction(3,sIdentifier);
    var authRestriction=new AuthorizationRestriction(serviceRestriction,"COS 301","Student");
    var updateAuth=new UpdateAuthorizationRestrictionRequest("u12118282",authRestriction);
    var auth=new Authorization;
    auth.updateAuthorizationRestriction(updateAuth);
/////////////////////////test Update end//////////////////////////////////

//////////////////////////test isAuthorized////////////////////////////////
    var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorizationRestriction");
    var isAuthorizedReq= new isAuthorizedRequest("u12118282",sIdentifier);
    var auth0=new Authorization;
    var res=auth0.isAuthorized(isAuthorizedReq);
};


var a=new Authorization;
a.test();


//END DUMMY FUNCTIONS
