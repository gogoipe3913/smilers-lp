process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var SftpUpload = require('sftp-upload'),
    fs = require('fs');

var options = {
        host:'suprieve.com',
        username:'staging_kobayashi',
        path: './public',
        remoteDir: '/',
        port: 50990,
        password: 'vtGwzGYB',
        dryRun: false,
    },
    sftp = new SftpUpload(options);

sftp.on('error', function(err) {
    throw err;
})
    .on('uploading', function(progress) {
        console.log('Uploading', progress.file);
        console.log(progress.percent+'% completed');
    })
    .on('completed', function() {
        console.log('Upload Completed');
    })
    .upload();