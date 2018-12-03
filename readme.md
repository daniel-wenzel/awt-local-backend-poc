# Getting Started

## A. installation fun
1. Install ipfs
2. Install node.js & npm
3. Install an http-server of your choice (e.g. http-server)
```bash
npm i -g http-server
```
4. Install backend dependencies
```bash
cd backend && npm i && cd ...
```

## B. Starting everything
1. Starting the ipfs daemon and leave it running
```bash
ipfs daemon
```
2. In another terminal window: Provide the ipfs files*
```bash
cd ipfs-files
ipfs add -r puppies
cd ..
```
It should output QmSnNCfxL7R1ei8Dfk82gsEPykBZjC683iovaxaMxuE1WW as the hash - if not you need to adjust `frontend/prepareManifest.js`.
3. Start the backend
```bash
cd backend && node index.js
```
4. In another terminal window: Start the frontend
```bash
http-server frontent
```
5. Visit `http://localhost:8080/`, you should see the puppy video. Yay!

*If my video files are still cached somewhere you can omit this step, however most likely they will not and you need to make sure you run a node which is providing them.
