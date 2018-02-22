# rsk-test-node
Container with RSK node and tools  


## Prerequisites
- Install Docker
- Install Docker compose

## Build (re-build) RSK node and console containers
```sh
npm run build
```

## Run node
```sh
npm start
```
Node starts in daemon mode and will be available on ports: 4444, 30305

## Run console
```sh
npm run console
```
An interactive console will opens:
```sh
RSK >
```

## Stop RSK node
```sh
npm stop
```

