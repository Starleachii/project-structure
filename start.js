const path = require('path');
const fs = require('fs');

folders = [
    'src/',
        'src/app/',
            'src/app/controllers/',
            'src/app/models/',
            'src/app/services/',
            'src/app/utils/',
        'src/database/',
            'src/database/config/',
            'src/database/migrations/',
            'src/database/seeds/',
        'src/server/',
            'src/server/routes/',
            'src/server/middlewares/'
]

files = [
    'src/server/server.js',
    'src/index.js'
]

for(const index in folders){
    fs.mkdir(path.join(__dirname, folders[index]), (error) => {
        if (error) 
            return console.error(error.message);
        
        console.log(`Directory created ${folders[index]}`);
    });
}

for(const index in files){
    fs.writeFile(files[index], "", function(error) {
        if(error) 
            return console.error(error.message);
        
        console.log(`File created ${files[index]}`);
    }); 
}
