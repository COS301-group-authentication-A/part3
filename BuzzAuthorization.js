/*
 * BuzzAuthorization class contains isAuthorized function.
 * 
 * Author's Name: William Seloma
 * Student Number: 10155865
 */

/*
 * Dummy getStatusForProfile has to be removed when intergrating
 */
function getStatusForProfile(getAuthoizationsRestrictionRequest)
{
	var toreturn = 0;
	if(getAuthoizationsRestrictionRequest != null)
	{
	  toreturn = 3;
	}
	
	return toreturn;
}
    
/*
 * class isAuthorizedResult has a method isAuthorized which is
 * boolean it is used by BuzzAuthorization function isAuthorized
 * 
 */
function isAuthorizedResult()
{
  var isAuthorized = false;
};

    
/*
 * class BuzzAuthorization has a function prototype called isAuthorized.
 */
BuzzAuthorization = function(){
  
};


/*
 * 	BuzzAuthorization function isAuthorized:
 * 	returns a isAuthorizedResult object
 * 	
 * 	creates a new object of isAuthorizedResult and alters its contents
 * 	of the object and returns it.
 * 
 */    
BuzzAuthorization.prototype.isAuthorized = function(isAuthorizedRequest)
{
	  var statusProfileResults;
	  var isAuthorizedResultObject = new isAuthorizedResult();
	  
	  if(isAuthorizedRequest != null)
	  {
		statusProfileResults = getStatusForProfile(isAuthorizedRequest);
		
		if(statusProfileResults != null)
		{
		  if(statusProfileResults > 0)
		  {
		    //Set isAuthorizedResult object to false
		    isAuthorizedResultObject.isAuthorized = true;
		  }
		}
			    
	  }
	  
	  return isAuthorizedResultObject;
}
