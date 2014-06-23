// require   -   js/stacktrace.js 

var createUrqa = function(){

	var ret_obj = new Object();

	ret_obj.exec = cordova.require('cordova/exec'); 

	ret_obj.send_error = function( err ){

		var trace = printStackTrace({e: err});

		this.exec( 
	        function(result){ 
	        	//writelog(result);
	        }, 
	        function(error){ 
	        	//writelog("error");
	        }, 
	        "UrqaPlugin", "test_exception", ['message', trace.join('\n\t') ] );

	};

	ret_obj.send_msg = function( message, err ){
		if( null == err ){
			err = new Error();
		}

		var trace = printStackTrace({e: err});

		this.exec( 
	        function(result){ 
	        	
	        }, 
	        function(error){ 
	        	
	        }, 
	        "UrqaPlugin", "test_exception", [message, trace.join('\n\t') ] );

	}

	return ret_obj;

};