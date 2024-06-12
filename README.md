# Node with TypeScript - WebSockets - TS-Node-dev (favorite)

## After clone, you must do

1. Run this:

   ```sh
   pnpm i
   pnpm dev
   ```

## This project was created with this steps

1. Install TypeScript and more dependencies

   ```sh
   npm i -D typescript @types/node ts-node-dev rimraf
   ```

2. init TypeScript config file

   ```sh
   npx tsc --init --outDir dist/ --rootDir src
   ```

3. scripts for dev, build and start ([more info about TS-NODE here](https://www.npmjs.com/package/ts-node-dev))

   ```sh
     "dev": "tsnd --respawn --clear src/app.ts",
     "build": "rimraf ./dist && tsc",
     "start": "npm run build && node dist/app.js"
   ```
