# Boilerplate for Vue 3 with Vite and Bootstrap 5 with Icons

## Table of Contents

-   [Pre requirements](#pre-requirements)
    -   [Node JS and NPM](#node-js-and-npm)
    -   [Vue JS v3, SFC and Vue CLI](#vue-js-v3-sfc-and-vue-cli)
-   Dependences
    -   Vite
    -   Vue router
    -   Bootstrap 5, Bootstrap Icons and Proper
    -   Sass
-   Install and Run

## Pre requirements

Предполагам, че вече знаете какво е [Node JS] и [NPM], и все пак ще спомена на кратко за какво да направите, ако все още не сте ги инсталирали.

### Node JS and NPM

На сайта на [Node JS] може да изтеглите инсталционния пакет. Най-добре е да е гледате **LTS** (Long Term Support) версията. Следвайте стъпките на инсталатора и след приключване проверете в конзолата, дали всичко е добре.

```sh
node -v
npm -v
```

### Vue JS v3, SFC and Vue CLI

[Vue JS v3] е основния framework, който ползвам в моя темплейт и трябва да го имате инсталиран във вашите среди за разработка. За да го добави ще използваме [NPM]. Заедно с Vue 3 ще добавим и **SFC** (Single File Components) инструмента, който заменя vue-template-compiler плъгина. Накрая ще добавим и \*Vue **CLI\***.

```sh
npm install vue@next
npm install -D @vue/compiler-sfc
npm install -g @vue/cli
```

## License

MIT

[//]: # "Links Reference"
[node js]: http://nodejs.org
[npm]: https://www.npmjs.com/
[vue js v3]: https://v3.vuejs.org/
