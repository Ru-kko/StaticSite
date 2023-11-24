# Proyecto de Introduccion a los Lenguajes de Internet Grupo C

**Por: Jose Sebastian Vera**

Para el correcto so de la aplicacion es nesesario gtener un gestor de paquetes para node js como `npm`, `yarn` o `pnpm`.

Este proyecto no utiliza **ningun framework** sin embrago es nesesario poner en escucha la aplicacion en algun puerto, puesto que utiliza js modules para funcionar y es nesesario cominicacion.

Para probar la aplicacion, dejo a dispocicion la carpeta `dist` la cual tiene todos loa rchivos minificados nesesarios para funcionar en un servidor como apache o ngnx, tambien es posible probar por medio del comando de desarrollo para `vite` el cual es el empaqutador y minificador que se utiliza.

# Probar utilizando vite
``` bash
npm install
npm run dev
```

Se pondra un puerto en escucha en la siguiente direccion [localhost](http://localhost:5173).

## Probar con live server
Liver server es un paquete de npm que permite hostear un servidor de desarrollo apache.
``` bash
npm install
npm run prod
```

Se pondra un puerto en escucha en la siguiente direccion [app](http://localhost:80)


## Probar en la aplicacion hosteada

He puesto en marcha un servicio de staticpages en azure, el cual estara activo hasta el dia martes 28 de noviembre en el siguiente [link](https://wonderful-mud-021333710.4.azurestaticapps.net/)

<hr/>

[**Repositorio**](https://github.com/Ru-kko/StaticSite)