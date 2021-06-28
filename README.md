# Boilerplate for Vue 3 with Vite and Bootstrap 5 with Icons

## Table of Contents

-   [Getting Started](#getting-started) - the easy way (TLDR)
-   [Enviroment](#enviroment) - step by step to boilerplate
    -   [Requirements](#requirements)
        -   [Node JS and NPM](#node-js-and-npm)
        -   [Vue JS v3, SFC and Vue CLI](#vue-js-v3-sfc-and-vue-cli)
    -   [Packages](#packages)
        -   [Vite](#vite)
        -   [Vue router](#vue-router)
        -   [Bootstrap 5, Bootstrap Icons and Proper](#bootstrap-5-bootstrap-icons-and-proper)
        -   [Sass](#sass)
    -   [Install and Run](#install-and-run)
-   [Boilerplate](#boilerplate)
    -   [Clear project](#clear-project)
    -   [Get Boilerplate files](#get-boilerplate-files)
-   [Source code](#source-code)
-   [License](#license)

## Getting Started

1. Изтеглете последната версия
    > [**EN**] Download the latest version

Свалете си последната версия от [GitHub](https://github.com/howbizarre/starter-template_vue-3-vite-bootstrap-5-with-icons/releases). Разархиврате във ваша папка или в папката със сваления архив (архива съдържа собствена папка).

> [**EN**]
>
> Download the latest version from [GitHub](https://github.com/howbizarre/starter-template_vue-3-vite-bootstrap-5-with-icons/releases). Unzip the archive in to your folder or in to the download folder (the archive contains its own folder).

Ако имате инсталиран [Git] може да клонирате проекта във ваша папка с командата:

> [**EN**]
>
> If you have Git installed you can clone the project in your folder with the command:

```sh
git clone https://github.com/howbizarre/starter-template_vue-3-vite-bootstrap-5-with-icons
```

2. Създайте шаблона
    > [**EN**] Create the boilerplate

От конзолата (_command prompth_) отивате в папката, в която е `package.json` файла и стартирате следните команди:

> [**EN**]
>
> From the console (_command prompt_) go to the folder where the `package.json` file is located and run the following commands:

```sh
npm install
```

```sh
npm run dev
```

И това е всичко.

> [**EN**]
>
> That's all folks

По долу съм описал постъпково, как да си направите сами Vue 3 Boilerplate with Bootstrap 5.

> [**EN**]
>
> Below I have described step by step how to make your own Vue 3 Boilerplate with Bootstrap 5.

## Enviroment

### Requirements

Ако знаете какво е [Node JS] и [NPM] преминете на [Packages](#packages), ако не - ще спомена на кратко какво да направите, за да си ги инсталирате.

> [**EN**]
>
> If you know what [Node JS] and [NPM] are, go to [Packages](#packages), if not - I’ll write briefly what you have to do to install them.

#### Node JS and NPM

На сайта на [Node JS] може да изтеглите инсталционния пакет. Най-добре за начало да свалите **LTS** (Long Term Support) версията. Стартирайте инсталатора и следвайте стъпките. След приключване проверете в конзолата (_Command Prompth_), дали всичко е добре.

> [**EN**]
>
> You can download the installation package from the [Node JS] website. It is best to start by downloading the **LTS** (Long Term Support) version. Start the installer and follow the steps. When finished, check in the console (Command Prompth) if everything is fine.

1. Проверка на версията на Node JS
    > [**EN**]
    >
    > Check the version of Node JS

```sh
node -v
```

2. Проверка на версията на NPM
    > [**EN**]
    >
    > Check the version of NPM

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

### Packages

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

Ако използвате [Visual Studio Code] в този момент може да го стартирате и да изпълните последващите команди от неговата конзола (Ctrl + `). Ако не го ползвате - може и от конзолата на операционната система. **Visual Studio Code** се стартира със зареден прокт, ако в дриректорията на проекта в конзолата напишете:

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

### Get Boilerplate files

Време е да спрем с писаниците и да вземем малко наготово кода, който съм добавил в [GitHub репозиторито на проекта](https://github.com/howbizarre/starter-template_vue-3-vite-bootstrap-5-with-icons/releases). Това, което ви е необходимо е всичко в папката `/src` и правите Copy & Replace във вашата `/src` папка.

**И това е всикчо приятели.**

## Source code

[Repository](https://github.com/howbizarre/starter-template_vue-3-vite-bootstrap-5-with-icons) & [Releases](https://github.com/howbizarre/starter-template_vue-3-vite-bootstrap-5-with-icons/releases)

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
    [vuex]: https://next.vuex.vuejs.org/
    [git]: https://git-scm.com/
    [github]: https://github.com/
