var http = require("http");
var buzzAuthorizationClasses = require("./GUIbuzzAuthorizationClasses");

http.createServer(function(request, response) 
{  
	response.writeHead(200, {"Content-Type": "text/html"});

    var cursorObject = "";

    buzzAuthorizationClasses.getAuthorizationResult("moveThread", function(err, getAuthorizationResult)
    {
        if (!err) {

            var  i = 0;
            for (i = 0; i < getAuthorizationResult.length;) {
                cursorObject = cursorObject + "<option onSelect='selectedRestriction("+getAuthorizationResult[i].methodName+");' value='"+getAuthorizationResult[i].methodName+"'>" + getAuthorizationResult[i].methodName + "</option>";
                i = i + 1;
            }
            console.log(cursorObject);

            response.write("<!DOCTYPE html>"
            +"<head>"
            +"<meta charset='utf-8'>"
            +"<meta http-equiv='X-UA-Compatible' content='IE=edge'>"
            +"<meta name='viewport' content='width=device-width, initial-scale=1'>"
            +"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'>"
            +"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css'>"
            +"<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'></script>"
            +"<script> function addRestriction(){alert('Restriction added!')};"
            +"function removeRestriction(){alert('Restriction removed!')};"
            +"function updateRestriction(){alert('Restriction updated!')};"
            +"function selectedRestriction(option){"
            +"var val = option.options[option.selectedIndex].value;"
            +"document.getElementsByTagId('exampleInputEmail3')[0].setAttribute('placeholder', 'ok');"
            +"};"
            +"</script>"
            +"</head>"
            +"<body>"
            +"<div class='container'>"
            +"<div class='starter-template'>"
            +"<h1>Buzz System</h1>"
            +"<h2>buzzAuthorisation</h2>"
            +"<label for='inputEmail' class='sr-only'>UserId</label><input type='text' id='inputEmail' class='form-control' placeholder='i.e u1234567' required autofocus><br/>"
            +"<p class='lead'>Select a restriction from the dropdown</p>"
            +"<div class='dropdown'>"
                +"<select name='Restrictions' onChange='selectedRestriction(this)' class='btn btn-default dropdown-toggle' type='button' id='menu1' data-toggle='dropdown'>"
                +"<optgroup label='Restrictions'>"
                    +""+cursorObject+""
                +"</optgroup>"
                +"</select>"
            +"</div>"
            +"<div style='margin-top:10.7%;'>"
            +"<form class='form-inline'>"
            +"<div class='form-group'>"
            +"<label class='sr-only' for='exampleInputEmail3'>Ranking</label>"
            +"<input name='restrictionVal' type='text' class='form-control' id='exampleInputEmail3' placeholder='Ranking'>"
            +"</div>"
            +"<button type='submit' class='btn btn-primary' onclick='addRestriction();'>Add Restriction</button>"
            +"</form>"
            +"</div>"
            +"<div style='margin-left:25.5%;margin-top:-3%;'>"
            +"<button type='button' class='btn btn-success' onclick='removeRestriction();'>Remove Restriction</button>"
            +"<button type='button' class='btn btn-info' onclick='updateRestriction();'>Update Restriction</button>"
            +"</div>"
            +"</div>"
            +"</div>"
            +"</body>"
            +"</html>");
            response.end();
        }
        else
        {
            console.log("There is an error: "+err);
        }
    });
}).listen(8080);
console.log('Server is listening to http://localhost/ on port 8080�');
