var http 		= require("http")
var fs 			= require('fs');
var ObjectId	= require("mongojs").ObjectId
//var dbTrace 	= require("mongojs").connect("trace2",["trace"]);
var bot 		= require("./botTimer.js")

size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var query = {
			url:"http://127.0.0.1:8080/search.json?q=",
			request: { 
				a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,
				how:0,what:0,where:0,when:0,who:0,why:0,
				how_he:0,what_he:0,where_he:0,when_he:0,who_he:0,why_he:0,
				how_she:0,what_she:0,where_she:0,when_she:0,who_she:0,why_she:0,
				how_I:0,what_I:0,where_I:0,when_I:0,who_I:0,why_I:0,
				how_is:0,what_is:0,where_is:0,when_is:0,who_is:0,why_is:0,
				how_are:0,what_are:0,where_are:0,when_are:0,who_are:0,why_are:0,
				how_will:0,what_will:0,where_will:0,when_will:0,who_will:0,why_will:0,
				how_was:0,what_was:0,where_was:0,when_was:0,who_was:0,why_was:0,
				how_it:0,what_it:0,where_it:0,when_it:0,who_it:0,why_it:0
			  },
			  id:function(str,s,r){
			  	return str.replace(s,r)
			  },

			  get:function(request){
			  	console.log(request)
			  	http.get(options,
  				  function(res) {
      					res.on('data', function (chunk) {
          					myData += chunk;
        				});
        				res.on('end', function () {
          					console.log('-> Data receive :',myData);
          					save(myData)
        				});
    			  }).on('error', function(e) {
      					console.log("-> Got error: ",url," | error :", e.message);
    			  });
			  },
			  
			  save:function(data){
			  	console.log(request)
			  }
			}

bot.start(function(){query.get("test")})
