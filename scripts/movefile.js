const fs = require('fs');
const path = require('path');

const move = (oldPath, newPath) => {

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                console.log(err);
            }
            return;
        }
    });

    copy = () => {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);

        readStream.on('error', (e) => {console.log(e)});
        writeStream.on('error', (e) => {console.log(e)});

        readStream.on('close', () => {
            fs.unlink(oldPath, console.log('success'));
        });

        readStream.pipe(writeStream);
    }
}

let pathFrom = process.env.movepathfrom;
let pathTo = process.env.movepathto;
let fname = process.env.movename;
console.log(pathFrom, pathTo, fname);

if(pathFrom && pathTo)
    move(path.join(__dirname, '/../' + pathFrom), path.join(__dirname, '/../' + pathTo) + '/' + fname);