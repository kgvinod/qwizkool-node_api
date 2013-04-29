// Set the require.js configuration for your application.
require.config({

	// Initialize the application with the main application file and the JamJS
	// generated configuration file.
	deps : ["../vendor/jam/require.config", "main"],

	paths : {
		// Put paths here.<script src="js/bootstrap.min.js"></script>

		bootstrap : "../vendor/bootstrap/js/bootstrap.min",
        	bootstrap_select : "../vendor/bootstrap-select/bootstrap-select.min",
		bootstrapValidation : "../vendor/bootstrap/js/jqBootstrapValidation",
		tabs : "../assets/js/libs/tabs",
		sha256 : "../assets/js/libs/sha256",
		sha512 : "../assets/js/libs/sha512",
		scion : "../vendor/SCION/scion"

	},
	map : {
		// Ensure Lo-Dash is used instead of underscore.
		"*" : {
			"underscore" : "lodash"
		}

		// Put additional maps here.
	},

	shim : {
		// Put shims here.
		tabs : {
			deps : ["jquery"]
		},
		sha256 : {
			deps : ["jquery"]
		},
		bootstrap : {
			deps : ["jquery"],
			exports : 'bootstrap'
        },
        bootstrap_select : {
            deps : ["bootstrap"],
            exports : 'bootstrap_select'
        }

	}

});
