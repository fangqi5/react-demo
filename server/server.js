import express from 'express'
import React from 'react'//引入React以支持JSX的语法
import { renderToString } from 'react-dom/server'//引入renderToString方法
import Canvas from'./canvas'

const app= express()
const content = renderToString(<Canvas/>)
app.use(express.static('public'));
app.get('/',(req,res) => res.send(`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
        <div id="root">${content}</div>
   </body>
   <script src="/index.js"></script>
</html>
`))




app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))
