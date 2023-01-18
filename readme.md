- LTS - long term support
- https://www.npmjs.com/package/colors
- Middleware is a function that runs between the request and response cycle
- Middleware function can be ran for a particular route by passing it as the second argument

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

```JS
// Method 1:
app.use(delay(isInProduction ? 0 : 5000))

// Method 2
isInProduction ? '' : app.use(delay(2000))
/* Method 1 is preferable */
```
