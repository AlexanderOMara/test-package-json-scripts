'use strict';

var fs = require('fs');
var path = require('path');

var file = path.join(__dirname, 'log.txt');
var data = (new Date()).toISOString() + ': ' + process.argv.slice(2).join(' ') + '\n';

// Set _PUBLISHING environment variable before publishing.
if (!process.env._PUBLISHING) {
	fs.appendFile(file, data, function(err) {
		if (err) {
			throw err;
		}
	});
}
