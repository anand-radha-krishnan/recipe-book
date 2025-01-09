^## MNR (MongoDB, Node.js, React.js)

### Reference Text

#### package.json scripts

```
  "scripts": {
    "dev:server": "tsnd src/server/server.ts",
    "dev:bundler": "webpack -w --mode=development"
  },
```

#### package.json dependencies

```
  "dependencies": {
    "axios": "^1.7.9",
    "cors": "^2.8.5",
    "ejs": "^3.1.10",
    "express": "^4.21.2",
    "mongodb": "^6.12.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "ts-loader": "^9.5.1",
    "typescript": "^5.7.2",
    "webpack": "^5.97.1",
    "webpack-cli": "^6.0.1"
  },
  "devDependencies": {
   "@typescript-eslint/parser": "^8.19.1",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.3",
    "eslint-plugin-react-hooks": "^5.1.0",
    "prettier": "^3.4.2",
    "ts-node-dev": "^2.0.0"
  }
```

#### Tech Stack

```
  TypeScript
  React.js
  Express.js --> Node.js
  ejs --> Templating language for HTML markup generation
  MongoDB
  Webpack
```