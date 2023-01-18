- LTS - long term support
- https://www.npmjs.com/package/colors

```JS
"scripts": {
  "start": "nodemon backend/server.js"
},
/* If slash is added at the beginning then it won't work */
```

```JS
dotenv.config({path: 'backend/config.env'})
/* If slash is added at the beginning then it won't work */
```

```JS
"backend": "nodemon backend/server.js --ignore frontend"
/* ignore argument in npm script */
```

```JS
  const id = req.params.id
  /* return value is a string */
```
