//var csds = require('./csds');
var connect = require('../Database/connect.js');
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
    
    if(isAuthResult(RemoveAuthorizationReq)){
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

//**************************getAuthorizationRestriction***************************//
Authorization.prototype.getAuthorizationRestriction = function(getAuthReq)
{
    var getAuthorizationRequestResult;//this holds the returned (cursor) object which is going to be decoded to get the rest of the information.

    var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert');

    var db = new Db('authorization', new Server('localhost', 27017));
    // Establish connection to db
    db.open(function(err, db)
    {
        // Get a collection
        db.collection('Authentication', function (err, collection)
        {
            // Fetch the requested restriction object according to the request.
            getAuthorizationRequestResult = collection.find(
                                            {
                                                "serviceName" : getAuthReq.getAuthorizationRestriction().getServiceRestriction().getServiceRestrictionServiceIdentifier().getServiceIdentifierMethodName()
                                            })
        })
    })

    return getAuthorizationRequestResult;
}
//***********************************end************************************//


/*
 * class buzzAuthorization has a function prototype called isAuthorized.
 */
 //#START isAuthorized
//buzzAuthorization = function(){
  
//};


/*
 * isAuthorizedRequest inherits from buzzAuthorization has one virable and two objects:
 * 	- userid: virable
 *	- serviceIdentifierOject: ServiceIdentifier
 *	- contextInfo: Map from generic 
 */
var isAuthorizedRequest = function(userID, serviceIdentifierObject)
{
  var userid;
  var serviceIdentifierOject;
  
  userid = userID;
  serviceIdentifierOject = serviceIdentifierObject;
  //var contextInfo = new Map();
};

isAuthorizedRequest.prototype.getUserID =function()
{
    return this.userid;
};
isAuthorizedRequest.prototype.getServiceIdentifierOject=function()
{
    return this.serviceIdentifierOject;
};



/*
 * BuzzAuthorization connects to the database compares status poits from status and returns true if
 * the status point in Buzz is less than that retrieved from status false otherwise.
 */
Authorization.prototype.isAuthorized = function(isAuthorizedRequest)
{
            if(isAuthorizedRequest != null)          
            {
        			var getStatusProfilevalue;
        			var request  = new isAuthorizedRequest();
        			var AuthorizationRestrictionsMethodName = request.serviceIdentifierOject.getServiceIdentifierMethodName();
        
        			var mongoose = require('mongoose');
        			mongoose.connect('mongodb://45.55.154.156:27017/Buzz');
        
        			var db = mongoose.connection;
        			db.on('error', console.error.bind(console, 'connection error:'));
        			db.once('open', function (callback) 
        			{
        				var collection = db.collection('Authorization');
        				var boolisAuthorized = false;
        				/*
        				  * Check if there is a connection error if not, find the ranking depending on it 
        				  * set boolisAuthorized to true else false, else if the is an error set boolisAuthorized to false. 
        				  */
        				if(callback)
        				{
        				  boolisAuthorized = false;
        				  console.log("Error occured could not connect to the database");
        				}
        				else
        				{
        				  console.log("Connection success...");
        			    
        				  var results = collection.findOne({ methodName:AuthorizationRestrictionsMethodName}, function(err, item)
        				  {
        				    if(!err)
        				    {
        				      /*
        				      * Check if item is null if yes set boolisAuthorized to false.
        				      */
        					if(item != null)
        					{
        					  
        					  var point = parseInt(item.StatusPoints)
        					  //console.log(point);
        					  /*
        					  * call getStatusForProfile from status and parse in the isAuthorizedRequest as a parameter 
        					  * it is a userId.
        					  */
        					  getStatusProfilevalue = new getStatusForProfile(isAuthorizedRequest);
        			    
        					  if((getStatusProfilevalue > point))
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
        				      
        				    }
        				  });
        		    
        				}
        			  
                    return boolisAuthorized;
        
        		    });
                        
                
            }
            
            return false;
      
}
      
 //#END isAuthorized -----------------------

