# nodejs-webapp
A simple dockerizable nodejs webapp with knex, sqlite3 and angular, to test some concepts.

## Requirements
- **node js**
- **npm** 
- **bower**
- **express** 4.13.3+
- **knex** 0.8.6+
- **body-parser** 1.13.3+
- **sqlite3**

Install everything with **npm**:
```npm install express knex body-parser bower sqlite3``` or just ```npm install```

If you wanr, renew angular on /public by running **bower**:
```bower install angular```

A `bower init` later help to organize the mess... Or not.

## Usage
```node index.js``` or ```npm start```
on application home. Then go http://localhost:3000/

## Containerization
I wrote a [Dockerfile](Dockerfile) to build a **docker** image of this project. The base image is `node:argon` and the whole project is build inside the image. To speed the build process up, build it outside and just copy dependencies and everything would help, but this is just a concept. Also, sqlite3 database file is created inside, making it ephemeral.
- To build:
```docker build -t "paoloo/wallapp" .```
- To run:
```docker run "paoloo/wallapp"```
- To test, go **http://ip-address:3000** where the **IP-address** is obtained with:
```docker inspect `docker ps | grep wallapp | cut -d' ' -f1` | grep "IPAddress" | cut -d':' -f2 | cut -d',' -f1```

## License
**MIT**

## be Happy
