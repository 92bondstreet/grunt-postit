(
	function(){

		var basictasks = function(grunt){

			// Project configuration.
			grunt.initConfig({
				pkg: grunt.file.readJSON('package.json'),			   
			});
		
			// Register a default task (for example).
  			grunt.registerTask('default', 'gruntfile.js is ready', function() {
	    		grunt.log.write('Add task and loadNpmTasks...').ok();
  			});
  		};

		module.exports = basictasks;
	}	
)();