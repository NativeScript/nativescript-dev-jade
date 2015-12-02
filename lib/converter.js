exports.convert = convert;

var fs = require('fs');
var path = require('path');
var jade = require('jade');
var glob = require('glob');

function convert(logger, projectDir, options) {
	return new Promise(function (resolve, reject) {
		options = options || {};

		var peerPath = path.join(__dirname, '../../jade');
		if (fs.existsSync(peerPath)) {
			try {
				logger.info('Found peer Jade ' + require(path.join(peerPath, 'package.json')).version);
			} catch (err) { }
		} else {
			throw Error('Jade installation local to project was not found. Install by executing `npm install jade`.');
		}
		
		var jadeFilesPath = path.join(__dirname, '../../../app/**/*.jade');
		var jadeFiles = glob.sync(jadeFilesPath);
	
		for(var i = 0; i < jadeFiles.length; i++) {
		    var filePath = jadeFiles[i];
			
			var xmlContent;
			
			try {
				xmlContent = jade.renderFile(filePath, { filename: filePath, pretty: true });
			} catch(e) {
				reject(Error(filePath + ' Jade failed. Error: ' + e));
			}
			
			if(xmlContent){
				var xmlFilePath = filePath.replace('.jade', '.xml');
				fs.writeFile(xmlFilePath, xmlContent, 'utf8');
			} else{
				reject(Error('Jade cannot generate output for file ' + filePath));
			}	
		}
		
		resolve();
	});
}