GRUNT-POSTIT
=========

grunt-postit is a minimalist guide to use <a href="http://gruntjs.com/" title="The JavaScript Task Runner" alt="Grunt">Grunt</a> as Task Runner.

Installation
------------

### 0. Minimalist package.json

	{
  		"name": "my-project-name",
	  	"version": "0.1.0"
	}

### 1. Grunt CLI

	npm install grunt-cli -g

Notice `-g` option to install command line grunt globally.  

### 2. Grunt

	npm install grunt --save-dev

Notice that `grunt` will be installed locally **AND** will automatically be added to the devDependencies section in package.json file.

	{
	  "name": "my-project-name",
	  "version": "0.1.0",
	  "devDependencies": {
	    "grunt": "~0.4.1",    
	  }
	}


### 3. Gruntplugins

The plugin listing is available on <a href="http://gruntjs.com/plugins" title="The JavaScript Task Runner" alt="Grunt">http://gruntjs.com/plugins</a>.

	npm install grunt-plugin-i-want-to-install --save-dev

Notice that the plugin ` grunt-plugin-i-want-to-install` will be installed locally **AND** will automatically be added to the devDependencies section in package.json file.

	{
	  "name": "my-project-name",
	  "version": "0.1.0",
	  "devDependencies": {
	    "grunt": "~0.4.1",    
	    "grunt-plugin-i-want-to-install": "~0.2.4"
	  }
	}

### 4. Basic gruntfile.js
	
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



Gruntplugins
------------

### grunt-contrib-clean

1. Installation and loading

		npm install grunt-contrib-clean --save-dev

	Load the plugin that provides the *grunt-contrib-clean* task.

		grunt.loadNpmTasks('grunt-contrib-clean');

2. Define cleaning task

	I use the medium format to clean dir

		clean: {
	  		dev: ["path/to/dir/css/one", "path/to/dir/img/one", "path/to/dir/js/one"]
	  	   ,production: ["path/to/dir/css", path/to/dir/img", "path/to/dir/js/"]
		}

	More format examples on <a href="https://npmjs.org/package/grunt-contrib-clean" title="grunt-contrib-clean" alt="grunt-contrib-clean">npmjs.org</a>.

3. Register and run cleaning task

		grunt.registerTask('default', ['clean']);


### grunt-contrib-uglify

1. Installation and loading

		npm install grunt-contrib-uglify --save-dev

	Load the plugin that provides the *grunt-contrib-uglify* task.

		grunt.loadNpmTasks('grunt-contrib-uglify');

2. Define cleaning task

	I use the basic compression: uglify

		uglify: {
    		js: {
      			files: {
        			'dest/script1.min.js': 'src/script1.js'
        			,'dest/script2.min.js': 'src/script2.js']
      			}
      		}
    	}

    I use the basic compression: uglify + concat

		uglify: {
    		js: {
      			files: {
        			'dest/script.min.js': ['src/script1.js', 'src/script2.js']
      			}
      		}
    	}

	More format examples on <a href="https://npmjs.org/package/grunt-contrib-uglify" title="grunt-contrib-uglify" alt="grunt-contrib-uglify">npmjs.org</a>.

3. Register and run cleaning task

		grunt.registerTask('default', ['uglify']);

### grunt-contrib-concat

1. Installation and loading

		npm install grunt-contrib-concat --save-dev

	Load the plugin that provides the *grunt-contrib-concat* task.

		grunt.loadNpmTasks('grunt-contrib-concat');

2. Define concat task

	Concatenating with a custom separator

		concat: {
    		options: {
      			separator: ';'
    		}
    		,js: {
      			src: ['js/script1.js', 'js/script2.js', 'js/script3.js'],
      			dest: 'dist/script.js'
    		}
    		,css: {
      			src: ['css/style1.css', 'css/style2.css', 'css/style3.css'],
      			dest: 'dist/script.css'
    		}
  		}

	More format examples on <a href="https://npmjs.org/package/grunt-contrib-concat" title="grunt-contrib-concat" alt="grunt-contrib-concat">npmjs.org</a>.

3. Register and run concat task

		grunt.registerTask('default', ['concat']);


Authors and contributors
------------------------
### Current
* [Yassine Azzout][] (Creator, Coder & keeper)

[Yassine Azzout]: http://yass.io


License
-------
[MIT license](http://www.opensource.org/licenses/Mit)
