
#AXIOS
Axios es una biblioteca de JavaScript que se utiliza para realizar solicitudes HTTP ( GET, POST, DELETE, UPDATE, Etc ).

#React Query ( server state management ) -> Se encarga de administrar el estado de los datos que provienen de un servidor.
React Query es una biblioteca para manejar el fetching, caching y la actualización de los datos del servidor en las aplicaciones de React. Permite tratar los datos remotos como si fueran locales, simplificando enormemente la gestión de los datos. Algunas de las características más destacadas de React Query incluyen el refetching automático de los datos en background, la paginación y el scrolling infinito, y la sincronización de los datos en tiempo real.

#ZUSTAND ( client state management ) -> Se ocupa de manejar el estado que se genera y se utiliza dentro de la aplicación del cliente.
Zustand es una pequeña biblioteca de manejo de estado para React que proporciona una forma simple y eficiente de manejar el estado global de la aplicación. Con Zustand, puedes crear stores de estado global que pueden ser compartidos y utilizados en cualquier parte de tu aplicación. 

Front End Dashboard 
#nextui -> https://nextui.org/docs/frameworks/nextjs Es React UI library
#shadcn    https://ui.shadcn.com/docs/installation/next Es React UI library

Estructura de Carpetas

SRC
    app
    page.tsx 
    layout.tsx
    global.css
    components ( Que pertenecen a la page )
    xxx ( Carpeta de otra Page )
        page.tsx 
        layout.tsx 
        components ( Que pertenecen a la page )
    hooks 
    interfaces
    providers
    services
    store

