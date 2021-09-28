const path = require('path');
const fs = require('fs').promises;


async function makeFolders(folders) {
    for (const index in folders) {
        await fs.mkdir(path.join(__dirname, folders[index]), { recursive: true }, (error) => {
            if (error)
                return console.error(error.message);

            console.log(`Directory created ${folders[index]}`);
        });
    }
}


async function makeFiles(files) {
    for (const index in files) {
        await fs.writeFile(files[index], "", function (error) {
            if (error)
                return console.error(error.message);

            console.log(`File created ${files[index]}`);
        });
    }
}


async function main(){
    const folders = [
        //app
        'src/app/controllers/',
        'src/app/models/',
        'src/app/services/',
        'src/app/utils/',
    
        //database
        'src/database/config/',
        'src/database/migrations/',
        'src/database/seeds/',
    
        //server
        'src/server/routes/',
        'src/server/middlewares/'
    ];

    const files = [
        'src/server/server.js',
        'src/index.js'
    ];

    await makeFolders(folders);
    await makeFiles(files);
}

main();