- LTS - long term support
- https://www.npmjs.com/package/colors

```JS
"scripts": {
  "start": "nodemon backend/server.js"
},
```

If slash is added at the beginning then it won't work for both of these

```JS
dotenv.config({path: 'backend/config.env'})
```

```JS
"backend": "nodemon backend/server.js --ignore frontend"
```
