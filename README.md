# Frontend - Vue

## Introducción

Vue es un [framework](https://es.wikipedia.org/wiki/Framework_para_aplicaciones_web) **progresivo** para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser utilizado incrementalmente. La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos existentes. Por otro lado, Vue también es perfectamente capaz de impulsar sofisticadas [Single-Page Applications](https://developer.mozilla.org/en-US/docs/Glossary/SPA) (SPA,s) cuando se utiliza en combinación con herramientas modernas y librerías de apoyo.

Vue está muy bien documentado. La versión 2 está [traducida al español](https://es.vuejs.org/v2/guide/). La versión 3 tiene dos diferentes estilos con los que trabajar y así aparece en la [documentación](https://vuejs.org/guide/introduction.html):
1. **Options API**: es la que se usaba en la versión dos, con lo que mucha documentación de la versión 2 se puede utilizar sin cambios.
1. **Composition API**: es más concisa y tiene algunas características superiores aunque lo más importante entre ellas es que puede haber librerías de terceros que necesiten de una opción u otra.

Aunque estas dos visiones sean distintas no son excluyentes, en un mismo proyecto puede haber partes realizadas de una forma u otra. Veremos la Versión 3 con Options API, Javascript y Vite para hacer una SPA. La decisión está basada en que sea más fácil para el alumno que sólo conoce Javascript básico, no obstante se recomienda usar también Composition API porque probablemente irá ganando terreno y puede haber librerías nuevas que necesiten de esta nueva API.

## Instalación del entorno

Necesita el entorno de ejecución [Node](https://nodejs.org/es/). Comprobar con `node -v`, si no tiene hay que instalarlo.

### Instalar Node con nvm
Se [recomienda usar un gestor de versiones](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) como [nvm](https://github.com/nvm-sh/nvm) con lo que nos instalaremos nvm:
 ```bash
 wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
 ```
Hay muchas versiones distintas (podemos verlas con `nvm ls-remote`). [Instalaremos la LTS](https://github.com/nvm-sh/nvm#long-term-support):
```bash
nvm install --lts
```

### Instalar Node.js **SI FALLA NVM**
Vamos a usar la [guía para Ubuntu usando el gestor de paquetes](https://nodejs.org/es/download/package-manager/#distribuciones-linux-basadas-en-debian-y-ubuntu-paquetes-enterprise-linux-fedora-y-snap).
> _NOTA: Necesita de curl, si no se tiene instalado hacerlo con `sudo apt-get install curl`._

Usaremos la [versión LTS](https://github.com/nodesource/distributions/blob/master/README.md#using-ubuntu-4):

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

Ahora comprobamos que se tiene instalado con `node -v`. Node también instala npm que es necesario para crear el proyecto.
> _NOTA: hay alternativas a npm como [yarn](https://yarnpkg.com/). Nosotros vamos a usar npm. Como se pueden instalar distintas versiones de node es mejor usar algo que nos facilite la vida como [nvm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)._

## Iniciando nuestro proyecto Vue

Lo primero que hacemos es [crear nuestro proyecto con Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). Nos iremos a la carpeta donde queramos que nos haga toda la estructura (en nuestro caso la raíz de nuestro proyecto) y usaremos el siguiente comando:

```bash
npm create vite@latest
```

Nos hace una serie de preguntas:
1. Le ponemos nombre: `frontend-datos-deportivos`
1. Seleccionamos framework `Vue` claro :)
1. El lenguaje que usaremos será JavaScript

Ahora renombramos la carpeta a `frontend`, para que sea igual que la estructura que se pide en los proyectos, y abrimos una terminal en esa carpeta.

En este momento tenemos todo lo que hace falta para arrancar la aplicación, pero no tenemos las dependencias. Hay que instalarlas:

```bash
npm install
```

Cuando finalice ya estamos listos para arrancar nuestra aplicación Vue:
```bash
npm run dev
```
> _NOTA: si queremos exponerla en nuestra LAN usaremos `npm run dev -- --host` (todos los guiones importan)._

Como vamos a empezar a trabajar con nuestro proyecto, es un buen momento para hacer el commit inicial. Deberíamos tener 14 ficheros con cambios en el proyecto. Si nos fijamos en el archivo `.gitignore` veremos que tiene bastantes exclusiones. Dos muy importantes son: `node_modules` y `dist`.

**Esas carpetas NUNCA se suben al repositorio**. `node_modules` son dependencias que usaremos en desarrollo. Cuando vayamos a desplegar se usarán esas dependencias para contruir toda nuestra aplicación en `dist` (la carpeta que usaríamos para [desplegar en Netlify](https://www.youtube.com/watch?v=Qd9PhRKPhEs&list=PL_4GjXD29UltPeqCXVBOl32lWBt5QKf_j&index=8)), con lo que debe quedar fuera del control de versiones. Para controlar cambios en dependencias se usa el archivo `package.json` que sí está en el control de versiones.

Realizaremos un commit inicial con todos los archivos a excepción de los archivos de imágenes (*.svg), `package-lock.json`, `extensions.json` y el `README.md` generado por Vite:

```bash
git commit -m "Commit inicial"
```

## Empezar a usar Vue
Vue cuenta con [Vue Devtools](https://devtools.vuejs.org/), una extensión para el navegador que nos va a ayudar a la hora de desarrollar. La instalamos y usamos con nuestra página de inicio para ver cómo funciona Vue.

Ya podemos ir a la documentación de [Vue v3 con Options API](https://vuejs.org/guide/introduction.html#what-is-vue).

## Añadir Bootstrap

Seguir las [instrucciones de la documentación](https://getbootstrap.com/docs/5.3/getting-started/vite/).

Hay que añadir su paquete npm (y el de popperjs):
```bash
npm i --save bootstrap @popperjs/core
```

Esto modificará el archivo `package.json`.

Luego hay que modificar los ficheros `vite.config.js` para resolver las rutas de importación que se añaden en `main.js` y los estilos usando el fichero `styles.scss`.

## Añadir Vue router

Hay que instalar el paquete según la [documentación oficial](https://router.vuejs.org/installation.html):

```bash
npm install vue-router@4
```

Después [añadirlo a nuestra aplicación Vue](https://router.vuejs.org/guide/).

Para seguir usando los imports, en vez de utilizar `Vue` o `VueRouter`, importaremos las funciones que nos hacen falta:

```js
import { createRouter, createWebHashHistory } from 'vue-router'
```