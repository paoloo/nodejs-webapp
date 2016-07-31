# nodejs-webapp
A simple dockerizable nodejs webapp with knex, sqlite3 and angular, to test some concepts.

## Requirements
- **node js**
- **npm** 
- **bower**
- **express** 4.13.3+
- **knex** 0.8.6+
- **cookie-session** 1.4.3+
- **body-parser** 1.13.3+
- **sqlite3**

Install the basics, *as root*, with your package manager:
```
apt-get install nodejs npm
npm install bower -g -s
```

Then, install everything with **npm**:

```npm install express knex body-parser cookie-session sqlite3``` or just ```npm install```

get angular working on /public by running **bower**:

```cd public && bower install angular```

A `bower init` later help to organize the mess... Or not.

## Usage
To create the database, and then fill with sample data:
```knex migrate:latest && knex seed:run```

And, then, to start the server:
```node index.js``` or ```npm start```
on application home. Then go http://localhost:3000/

You need to login. The default account is "admin" and pass "1234"

## Containerization
I wrote a [Dockerfile](Dockerfile) to build a **docker** image of this project. The base image is `node:argon` and the whole project is built inside the image. To speed the build process up, build it outside and just copy dependencies and everything would help, but this is just a concept. Also, sqlite3 database file is created inside, making it ephemeral.
- To build:
```docker build -t "paoloo/wallapp" .```
- To run:
```docker run "paoloo/wallapp"```
- To test, go **http://ip-address:3000** where the **IP-address** is obtained with:
```docker inspect `docker ps | grep wallapp | cut -d' ' -f1` | grep "IPAddress" | cut -d':' -f2 | cut -d',' -f1```
where **wallapp** is the name of the application.

## License
**MIT**

## be Happy
