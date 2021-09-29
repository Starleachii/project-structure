# Project Structure
_Automatically creates a folder structure for back-end projects._

## Run via curl
```sh
curl -fsSL https://raw.githubusercontent.com/Starleachii/project-structure/main/start.js | node
```

## Run via wget
```sh
wget --no-check-certificate https://raw.githubusercontent.com/Starleachii/project-structure/main/start.js -O - | node
```

After you run it, your folder structure should look like this tree below:

<pre>
src
├── app
│   ├── controllers
│   ├── models
│   ├── services
│   └── utils
├── database
│   ├── config
│   ├── migrations
│   └── seeds
├── index.js
└── server
    ├── middlewares
    ├── routes
    └── server.js
</pre>
