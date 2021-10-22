# nuxt-playground

## prepare

```shell
$ node -v
v14.17.3

# npm i --global yarn

$ yarn --version
1.22.17

npm i --global json-server
```

## Run mock server

```shell
json-server --port 8080 --watch mock/employee.json

$ curl http://localhost:8080/employees -s | jq  '.[].name' -r
taro
jiro

$ curl http://localhost:8080/employees/1 -s | jq  '.name' -r
taro
```

## Build Setup

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

yarn start
```

## Serve nginx container

```shell
# build front
yarn generate

# build nginx image and run
docker-compose up -d --build
```

- Access [http://localhost:3000/](http://localhost:3000/)
