//var csds = require('./csds');
/*COMMENTED THIS OUT FOR TESTING [SHAUN]
var connect = require('../Database/connect.js');
 COMMENTED THIS OUT FOR TESTING [SHAUN]*/
var Authorization;

Authorization = function () {//Authorization class

};


Authorization.prototype.updateAuthorisationRestriction=function(UpdateAuthReq)//The  updateAuthorisationRestriction function
{
    var isAuthreq = new isAuthorizedRequest(UpdateAuthReq.getUserID(), UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier());
    if (!this.isAuthorized(isAuthreq)) {
        throw new error("NotAuthorizedEcxeption");
    }
    else {
        var mongoose;
        mongoose= require('mongoose');
        var authSchema = new mongoose.Schema({
            methodName: String,
            StatusPoints: String
        }, {collection: 'Authorization'});
        var auth = mongoose.model('Authorization', authSchema)
        console.log(UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName());
        auth.findOneAndUpdate(
            {"methodName": UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName()},
            {
                "$set": {
                    "StatusPoints": UpdateAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints()
                }
            },
            function (err, doc) {
                if (err) {
                    console.log("Method name not found");
                } else {
                    mongoose.connection.close();
                    return true;
                }
            });

    }
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





///////////////////////////////RemoveAuthorisationRestrictionResult class and functions///////////////////////////////////////////////////
var RemoveAuthorizationRestrictionsResult=function()
{
    var  AuthorizationRestriction;
};
///////////////////////////////End of RemoveAuthorisationRestrictionResult///////////////////////////////////////////////////

Authorization.prototype.removeAuthorisationRestriction=function(RemoveAuthorizationReq)//The  removeAuthorisationRestriction function
{
    //var isAuthRequest=new IsAuthorisedRequest();
   // var isAuthResult=new IsAuthorisedResult();
    var isAuthReq = new isAuthorizedRequest(RemoveAuthorizationReq.getUserID(),RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier();
    
    if(isAuthorized(isAuthReq){
        RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().setServiceRestrictionStatusPoints(0);
        var s = RemoveAuthorizationReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionMinimumStatusPoints();
        console.log(RemoveAuthorizationReq.getUserID() +" ... " + s);
        b = new UpdateAuthorizationRestrictionRequest(RemoveAuthorizationReq.getUserID(),RemoveAuthorizationReq.getAuthorizationRestriction());

        //var uRestriction = new Authorization();
        this.updateAuthorisationRestriction(b);
    }
    else{
        throw new Error("Not authorized to remove");
    }

    //return new RemoveAuthorizationRestrictionsResult();
   // the spec says that there is no need to return anything for remove
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
}

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
    var isAuthReq = new isAuthorizedRequest(AddAuthorizationReq.getUserID(),AddAuthorizationReq.getServiceIdentifierOject());
    if(isAuthorised(isAuthReq))
    {
        req = new UpdateAuthorizationRestrictionRequest(AddAuthorizationReq.getUserID(),AddAuthorizationReq.getAuthorizationRestriction());
        this.updateAuthorisationRestriction(req);
    }
    else
    {
        throw new error(NotAuthorizedEcxeption);
    }
    //return new AddAuthorizationRestrictionsResult();
};
///////////////////////////////End of AddAuthorisationRestriction class and functions///////////////////////////////////
///////////////////////////////AddAuthorisationRestrictionResult class and functions////////////////////////////////////
var AddAuthorizationRestrictionsResult;
AddAuthorizationRestrictionsResult = function ()
{
    var AuthorizationRestriction;
};
//////////////////////End of AddAuthorisationRestrictionResult class and functions//////////////////////////////////////

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

////////////////////////////test////////////////////////////////////
var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorisationRestriction");
var serviceRestriction=new ServiceRestriction(2,sIdentifier);
var authRestriction=new AuthorizationRestriction(serviceRestriction);
var updateAuth=new UpdateAuthorizationRestrictionRequest("u12118282",authRestriction);
var auth=new Authorization;
auth.updateAuthorisationRestriction(updateAuth);
/////////////////////////test end//////////////////////////////////

////////////////////////////test add////////////////////////////////////
var sIdentifier=new ServiceIdentifier("Authorization","addAuthorisationRestriction");
var serviceRestriction=new ServiceRestriction(4,sIdentifier);
var authRestriction=new AuthorizationRestriction(serviceRestriction);
var addAuth=new AddAuthorizationRestrictionRequest("u13397134",authRestriction);
var auth=new Authorization;
auth.addAuthorisationRestriction(addAuth);
/////////////////////////test add end//////////////////////////////////

////////////////////////////test remove////////////////////////////////////
var sIdentifier=new ServiceIdentifier("Authorization","removeAuthorisationRestriction");
var serviceRestriction=new ServiceRestriction(6,sIdentifier);
var authRestriction=new AuthorizationRestriction(serviceRestriction);
var removeAuth=new RemoveAuthorizationRestrictionRequest("u1223O83O",authRestriction);
auth.removeAuthorisationRestriction(removeAuth);
/////////////////////////test remove end//////////////////////////////////

/////////////////////////test get end//////////////////////////////////
var auth=new Authorization;
var sIdentifier=new ServiceIdentifier("Authorization","updateAuthorisationRestriction");
var serviceRestriction=new ServiceRestriction(2,sIdentifier);
var authRestriction=new AuthorizationRestriction(serviceRestriction);
getAuthorizationRestriction(authRestriction);

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
}
//***********************************end of getAuthorizationRestrictions************************************//


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
var BuzzSpace = function(studentAcademicYear, _isOpen, studentModuleid)
{
  var academicYear;
  var isOpen;
  var moduleid;
  
  this.academicYear = studentAcademicYear;
  this.isOpen = _isOpen;
  this.moduleid = studentModuleid;
};

BuzzSpace.prototype.getAcademicYear =function()
{
    return this.academicYear;
};

BuzzSpace.prototype.getIsOpen =function()
{
    return this.isOpen;
};

BuzzSpace.prototype.getModuleID =function()
{
    return this.moduleid;
};

var getUsersRolesForModule = function(usersRolesForModuleRequest)
{
  var roleModuleRequest;
  var rolelec;
  this.rolelec = "lecture";
  this.roleModuleResults = usersRolesForModuleRequest;
}

getUsersRolesForModule.prototype.getUsersRoleResult =function()
{
    return this.roleModuleResults;
};

getUsersRolesForModule.prototype.getRole =function()
{
    return this.rolelec;
};


var GetUsersRolesForModuleRequest = function(userId, moduleId)
{
  var userid;
  var moduleid;
  this.userid = userId;
  this.moduleid = moduleId;
}

GetUsersRolesForModuleRequest.prototype.getUserID =function()
{
    return this.userid;
};

GetUsersRolesForModuleRequest.prototype.getUserID =function()
{
    return this.moduleid;
};
//*********************************************************************
//END TESTING FUNCTION



/*
 * class buzzAuthorization has a function prototype called isAuthorized.
 */
 //#START isAuthorized
//buzzAuthorization = function(){
  
//};


/*
 * isAuthorizedRequest inherits from buzzAuthorization has one virable and two objects:
 * 	@param userid
 *	@param serviceIdentifierOject: ServiceIdentifier object
 * 	@param buzzSpaceObject: BuzzSpace object for getting moduleid
 */
var isAuthorizedRequest = function(userID, theServiceRestrictionObject, buzzSpaceObject)
{
  var userid;
  var serviceIdentifierOject;
  var BuzzSpaceObject;
  
  this.userid = userID;
  this.serviceIdentifierOject = theServiceRestrictionObject;
  this.BuzzSpaceObject = buzzSpaceObject;
};

isAuthorizedRequest.prototype.getUserID =function()
{
    return this.userid;
};
isAuthorizedRequest.prototype.getisAuthorizedRequestServiceRestrictionOject=function()
{
    return this.serviceIdentifierOject;
};

isAuthorizedRequest.prototype.setit=function(sumsum)
{
    this.serviceIdentifierOject = sumsum;
};

//@param buzzObj set buzz space object
isAuthorizedRequest.prototype.setBuzzSpaceObject = function(buzzObj)
{
  this.BuzzSpaceObject = buzzObj;
}
//@param buzzObj set buzz space object
isAuthorizedRequest.prototype.getBuzzSpaceObject = function()
{
  return this.BuzzSpaceObject;
}

/*
 * BuzzAuthorization connects to the database compares status poits from status and returns true if
 * the status point in Buzz is less than that retrieved from status false otherwise.
 * 
 * isAuthorized receieve and object of isAuthorizedrequest which has an object of serviceidentifier
 * and a userid..
 * @param isauthorizedRequest: isAuthorizedRequest object
 */

Authorization.prototype.isAuthorized = function(isauthorizedRequest)
{
            if(isauthorizedRequest != null)          
            {
				var boolisAuthorized = false;
        			var getStatusProfilevalue;
				var mongoose;
				var AuthorizationRestrictionsMethodName;
				var authSchema;
				var auth;
				var role;
// 				var sIdentifier=new ServiceIdentifier("Authorization","addAuthorisationRestriction");
				
//         			var request  = new isAuthorizedRequest(isauthorizedRequest, sIdentifier);
				var lectureRole = "lecture";
				var teachingAssistantRole = "teachingAssistant";
				var studentRole = "student";
				var guestRole = "guest";
				
				
				
        			AuthorizationRestrictionsMethodName = isauthorizedRequest.getisAuthorizedRequestServiceRestrictionOject().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName();

				
				mongoose= require('mongoose');
				authSchema = new mongoose.Schema({
				    methodName: String,
				    StatusPoints: String
				}, {collection: 'Authorization'});
				
				/*
				 * Fetch user role for a specific student returns getUsersRolesForModuleResults object.
				 */
				role = new getUsersRolesForModule(new GetUsersRolesForModuleRequest(isauthorizedRequest.getUserID(),isauthorizedRequest.getBuzzSpaceObject().getModuleID()));
				
//				console.log("Academic year: " + isauthorizedRequest.getBuzzSpaceObject().getAcademicYear()+"\n");
//				console.log("Module ID: " + isauthorizedRequest.getBuzzSpaceObject().getModuleID() +"\n");
//				console.log("IsOpen: " + isauthorizedRequest.getBuzzSpaceObject().getIsOpen()+"\n");
				if(guestRole == role.getRole())
				{
				  return false;
				}
				
				if(lectureRole == role.getRole() || teachingAssistantRole == role.getRole())
				{
				  return true;
				}

				
				auth = mongoose.model('Authorization', authSchema);

				auth.findOne({"methodName": AuthorizationRestrictionsMethodName},function (err, doc){
					if (err) 
					{
					    console.log("Method name not found");
					}
					else 
					{
						console.log("Connection success...");

						      if(doc != null)
						      {
							    var point = parseInt(doc.StatusPoints)
							    console.log(point);
							    /*
							    * call getStatusForProfile from status and parse in the isAuthorizedRequest as a parameter 
							    * it is a userId.
							    */
							    getStatusProfilevalue = new getStatusForProfile(isauthorizedRequest.getUserID());
					      
							    if((getStatusProfilevalue > point && role.getRole() == studentRole))
							    {
							      boolisAuthorized = true;
							    }
							    else
							    {
							      boolisAuthorized = false;
							    }
						      }
						      else
						      {
							  boolisAuthorized = false;
						      }

					      mongoose.connection.close();
					    return boolisAuthorized;
					}
				    });
            }
            return false;
      
}
      
 //#END isAuthorized -----------------------
