# unit-testing-vue

This repo contain the code for unit testing purpose, where the page is not intent to be served.
The test files are located in the `test/unit` folder.

## Notes

In production environment, you need to consider test-specific attribute on the element.
The following example is modefied from `componenets/LoginForm.vue`. Moreover,
test-specific attributes are one way to future-proof your tests.

```html
<input data-testid="name-input" type="text" v-model="name" />
```

```js
const input = wrapper.find('[data-testid="name-input"]');
```

To serve the data from db.json

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
