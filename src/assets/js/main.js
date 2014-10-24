require.config({
  shim: {
	  'nouislider': {
		  deps: ['jquery']
	  },
	  'crypto.MD5': {
		  deps: ['crypto']
	  }
  },
  paths: {
    'nouislider': '../../../bower_components/nouislider/distribute/jquery.nouislider.all',
    'requirejs': '../../../bower_components/requirejs/require',
    'rivets': '../../../bower_components/rivets/dist/rivets',
    'base64': '../../../bower_components/base64/base64',
    'crypto': '../../../bower_components/cryptojs/lib/Crypto',
    'crypto.MD5': '../../../bower_components/cryptojs/lib/MD5',
    'd3': '../../../bower_components/d3/d3',
    'es5-shim': '../../../bower_components/es5-shim/es5-shim',
    'json2': '../../../bower_components/json2/json2',
    'jquery': "../../../bower_components/jquery/dist/jquery"
  }
});

require(['app/app'], function(App){
	window.onerror = function(message, file, line) {
		ga('send', 'event', 'app', 'exception', file + "(" + line + "): " + message);
		ga('send', 'exception', {
			'exDescription': file + "(" + line + "): " + message,
			'exFatal': true,
			'appName': 'CHGC',
			'appVersion': '0.12.0'
		});
	};

	App.init();
});