# SW Planet Explorer

This is an API with information about the planets from the Star Wars franchise. It uses the generator from [generator-rest](https://github.com/diegohaz/generator-rest).

The information provided by default consists of name, climate, terrain and number of appearances of the planet in a film, but it can be expanded by editing the planet entity in /src/api/planet.

## Commands

After you generate your project, these commands are available in `package.json`.

```bash
npm test # test using Jest
npm run coverage # test and open the coverage report in the browser
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
```

## Running locally

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server in development mode.

```bash
$ npm run dev
Express server listening on http://0.0.0.0:9000, in development mode
```

## Directory structure

### Overview
```
src/
├─ api/
│  ├─ planet/
│  │  ├─ controller.js
│  │  ├─ index.js
│  │  ├─ index.test.js
│  │  ├─ model.js
│  │  └─ model.test.js
│  └─ index.js
├─ services/
│  ├─ express/
│  ├─ mongoose/
│  └─ response/
├─ app.js
├─ config.js
└─ index.js
```
