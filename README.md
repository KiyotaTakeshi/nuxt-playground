# nuxt-playground

## Run mock server

```shell
$ json-server --port 8080 --watch mock/employee.json

$ curl http://localhost:8080/employees -s | jq  '.[].name' -r
taro
jiro

$ curl http://localhost:8080/employees/1 -s | jq  '.name' -r
taro
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
