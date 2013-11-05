
//文件上传模块

var formidable = require('formidable');


exports.get = function(req,callback){


    var form = new formidable.IncomingForm();
    form.uploadDir = config.path.tmp; //临时文件夹

    form.parse(req, function(err, fields, files) {

        if(err){
            console.log(err);
            callback?callback(false):0;
            return;
        }
        //console.log(fields);
        //console.log(files);
        callback?callback(files.upload):0;
    });
};

