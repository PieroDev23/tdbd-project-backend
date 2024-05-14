# Project Backend TDBD ✨

Proyecto grupo 4 base de datos🚀

## Dependencias

- Typescript (lenguaje de programación)
- Express (Librería para crear APIS REST)
- zod (creación de esquemas para validar datos)
- mysql (gestor de base de datos)
- typeorm (orm para manejar bases de datos realcionales y no relacionales)
- morgan (logs de respuestas HTTP)
- jsonwebtoken (librería para la implementación de autenticación JWT)
- bcryptjs (librer´ía para encriptar datos lo uso para las contraseñas)
- cors (librería para políticas CORS)
- dotenv (librería para el manejo de variables de entorno)

## Environment Variables

Para levantar este proyecto se deben de setear la siguientes variables

`APP_PORT` puerto de express

`APP_JWT_SECRET` llave secreta para generar y validar los jwt

`DB_NAME` nombre de tu bd

`DB_PORT` puerto donde corre la bd

`DB_USER` usuario de tu bd

`DB_PASSWORD` password de la bd

`DB_HOST` host de tu bd


## Inicializar proyecto
```
  npm ci
  npm run dev
```
Te deberá de aparecer los siguientes mensajes en la terminal.
```
  ✅ Application running on port {{APP_PORT}}
  🐸✨ Database successfully connected
```

## APIs disponibles

http://localhost:{{APP_PORT}}/api/v1/auth/login

```
    {
        "email": "someemail@example.com",
        "password": "somecomplexpassword"
    }
```

http://localhost:{{APP_PORT}}/api/v1/auth/register

```
    {
        "username": "someusername",
        "email": "someemail@example.com",
        "password": "somecomplexpassword"
    }
```


## Authores

- [@pieroDev23 Fullstack Developer](https://www.github.com/octokatherine)


