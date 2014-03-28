exports.port = 8848;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

var ms = require('../src/index');

ms.config({
    dir: __dirname + '/response',
    packages: {
        'common': './common',
        'client': './client',
        'lib': './lib'
    },
    logError: {
        logFile: 'ms-error-log'
    },
    list: [
           {
               project: 'aproject',
               dir: __dirname + '/aproject'
           }, {
               project: 'bproject',
               dir: __dirname + '/bproject'
           }
    ]
});

exports.getLocations = function () {
    return [
        {
            location: /^\/request.ajax/, 
            handler: ms.request()
        }, {
            location: /^\/get/,
            handler: ms.request(null, 'aproject')
        }, {
            location: /^\/set/,
            handler: ms.request(null, 'bproject')
        }
    ];
};
