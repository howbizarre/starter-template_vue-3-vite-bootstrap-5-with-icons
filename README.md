# Boilerplate for Vue 3 with Vite and Bootstrap 5 with Icons

## Table of Contents

-   [Enviroment](#enviroment)
    -   [Pre requirements](#pre-requirements)
        -   [Node JS and NPM](#node-js-and-npm)
        -   [Vue JS v3, SFC and Vue CLI](#vue-js-v3-sfc-and-vue-cli)
    -   [Dependences](#dependences)
        -   [Vite](#vite)
        -   [Vue router](#vue-router)
        -   [Bootstrap 5, Bootstrap Icons and Proper](#bootstrap-5-bootstrap-icons-and-proper)
        -   [Sass](#sass)
    -   [Install and Run](#install-and-run)
-   [Boilerplate](#boilerplate)
    -   [Clear project](#clear-project)
    -   [Import Bootstrap 5, Icons and Router](#import-bootstrap-5-icons-and-router)
    -   [Create routing](create-routing)
-   [Source code](#source-code)
-   [License](#license)

## Enviroment

### Pre requirements

Ако знаете какво е [Node JS] и [NPM] преминете на [Dependences](#dependences), ако не - ще спомена на кратко какво да направите, за да си ги инсталирате.

#### Node JS and NPM

На сайта на [Node JS] може да изтеглите инсталционния пакет. Най-добре за начало да свалите **LTS** (Long Term Support) версията. Стартирайте инсталатора и следвайте стъпките. След приключване проверете в конзолата (_Command Prompth_), дали всичко е добре.

1. Проверка на версията на Node JS

```sh
node -v
```

2. Проверка на версията на NPM

```sh
npm -v
```

#### Vue JS v3, SFC and Vue CLI

[Vue JS v3] е основния framework, който ползвам в моя темплейт и трябва да го имате инсталиран. За да го добавите ще използваме [NPM]. Заедно с Vue 3 ще добавим и **SFC** (Single File Components) инструмента, който заменя **_vue-template-compiler_** плъгина. Накрая ще добавим и \*Vue **CLI\***.

1. Инсталиране на Vue 3

```sh
npm install vue@next
```

2. Инсталиране на SFC

```sh
npm install -D @vue/compiler-sfc
```

3. Инсталиране на Vue CLI

```sh
npm install -g @vue/cli
```

### Dependences

Това са основните пакети в темплейта. Те оформят постановка, от която може да започнете да разработвате свой собствен проект.

В моите проекти използвам [Bootstrap] и в темплейта го залагам, като основен **_front-end faramework_**. Добавям и [Sass], като предпроцесор на **CSS** файловете, за да имам по-голяма свобода на управлението им.

Използвам [Vite] за настройки на средата за разработка. Може да ползвате и [Vue CLI], особено за по-малки проекти с не много бъндъли.

Добавям и [Vue Router]. Това е неделима част от всеки web проект и за мен е задължителен.

#### Vite

1. Започваме с инициализация на проекта ни с **Vite** темплейт. За целта в конзолата напишете:

```sh
npm init @vitejs/app
```

2. В следващите стъпки окажете следните данни:

```sh
Project name: vue3-bootstrap5-boilerplate
```

```sh
Select a framework: vue
```

```sh
Select a variant: vue
```

3. Отидете в директорията на новосъздадения проект:

```sh
cd vue3-bootstrap5-boilerplate
```

Повече информация за **Vite** инсталацията може да видите на адрес: https://vitejs.dev/guide/#scaffolding-your-first-vite-project

Ако използвате [Visual Studio Code] в този момент може да го стартирате и да изпълните последващите команди от неговата конзола (Ctrl + `). Ако не го ползвате - може и от конзолата на операционната система. **Visual Studio Code** се стартира със следната команда:

```sh
code .
```

#### Vue router

За инсталацията можете да видите информация на адрес: https://next.router.vuejs.org/installation.html

```sh
npm install vue-router@4
```

#### Bootstrap 5, Bootstrap Icons and Proper

Следва добавянето на Bootstrap 5 (https://getbootstrap.com/docs/5.0/getting-started/download/#npm),

```sh
npm install bootstrap
```

Bootstrap Icons (https://icons.getbootstrap.com/)

```sh
npm i bootstrap-icons
```

Накрая добавяме [Proper JS] библиотеката, за да използваме възможностите на **Bootstrap** за визуализиране на **_Tooltips_**, **_Popover_** и др.

```sh
npm i @popperjs/core
```

#### Sass

Последно, но не и по значение, добавяме поддръжката на **Sass**. Използвам го само по време на разработката и затова го добавяме, като `--save-dev` към темплейта.

```sh
npm install sass --save-dev
```

### Install and Run

Приключи инициализацията на темплейта и остана да заредим всички модули и да го стартираме. В конзолата изпълняваме последователно:

```sh
npm install
```

```sh
npm run dev
```

Ще се зареди стартовия проект **Hello Vue 3 + Vite** на http://localhost:3000/

## Boilerplate

### Clear project

**Vite** добавя към проекта няколко неща, които няма да са ни нужни.

Най-напред отворете файла `/src/App.vue` и премахнете ненужното съдържание, докато придобие следния вид:

```vue
<template></template>
<script></script>
```

Изтриите папката **assets** `/src/assets`, а в папката **components** `/src/components` изтриите файла `HelloWorld.vue`.

### Import Bootstrap 5, Icons and Router

В папката `/src` на проекта има създаден файл `main.js`. Там ще добавим импорта на **Bootstrap**, както и **Vue Router**.

Отворете файла и добавете веднага сле `import { createApp } from "vue";` следните редове:

```vue
import "bootstrap/scss/bootstrap.scss"; import "bootstrap-icons/font/bootstrap-icons.css";
```

**Vue Router** се добавя веднага след `import App from "./App.vue";`

```vue
import router from "./router";
```

И на края окажете, че ще използвате рутера преди закачането на приложението

```vue
createApp(App).use(router).mount("#app");
```

В крайна сметка `main.js` трябва да изглежда по следния начин:

```vue
import { createApp } from "vue"; import "bootstrap/scss/bootstrap.scss"; import "bootstrap-icons/font/bootstrap-icons.css"; import App from "./App.vue"; import router from "./router"; createApp(App).use(router).mount("#app");
```

### Create routing

В папката `/src` създайте нова папка с име **router** `/src/router` и вътре създайте файл с име **index.js** `/src/router/index.js`. Отворете файла и добавете следното съдържание:

```vue
import { createRouter, createWebHistory } from "vue-router"; export const routes = []; const history = createWebHistory(); const router = createRouter({ history, routes, }); export default router;
```

## Source code

## License

MIT

[Back to top](#table-of-contents)

[//]: # "Links Reference"
[node js]: http://nodejs.org
[npm]: https://www.npmjs.com/
[vue js v3]: https://v3.vuejs.org/
[bootstrap]: https://getbootstrap.com/
[sass]: https://sass-lang.com/
[vite]: https://vitejs.dev/
[vue cli]: https://cli.vuejs.org/
[vue router]: https://next.router.vuejs.org/
[visual studio code]: https://code.visualstudio.com/
[proper js]: https://popper.js.org/
