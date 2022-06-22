const fs = require('fs'); // (file system) qui s'appelle lui-même

// ##### reading files #####

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     // (data)seul renvoi un buffer
//     console.log(data.toString()); 
// });

// console.log("last line"); // s'affichera avant data

// ##### writing files #####

// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
//     console.log('file was written');
// });

// ##### directories #####

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}


// ##### deleting files #####

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}
